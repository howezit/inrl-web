require('../settings');
const parsePhoneNumber = require('awesome-phonenumber');
const {
	db
} = require('../db');
const {
	DataTypes
} = require('sequelize');
const {
	getkeys
} = require('./apikey');
const {
	sendMail,
	sendWa,
        sendApiKeyMail
} = require('./toclient');
const {
	makeid
} = require('./enc');

function genid() {
	let result = "";
	const characters = "0123456789";
	var characters9 = characters.length;
	for (var i = 0; i < 6; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters9));
	}
	return result;
}

const apikey = db.define('apikey', {
	key: {
		type: DataTypes.STRING,
		allowNull: false
	},
	limit: {
		type: DataTypes.INTEGER,
		allowNull: true
	}
});

const storeOtp = db.define('otp', {
	key: {
		type: DataTypes.STRING,
		allowNull: false
	},
	otp: {
		type: DataTypes.INTEGER,
		allowNull: true
	}
});
const storage = db.define('storage', {
	today: {
		type: DataTypes.INTEGER,
		allowNull: true,
		defaultValue: 0
	},
	total_req: {
		type: DataTypes.INTEGER,
		allowNull: true,
		defaultValue: 0
	},
	users: {
		type: DataTypes.INTEGER,
		allowNull: true,
		defaultValue: 0
	}
});

async function add_req(count) {
let exist = await storage.findOne();
if(!exist) {
const res =  await getkeys()
 await storage.create({today: 1, total_req: 1, users: Object.keys(res).length});
 exist = await storage.findOne();
 } else await exist.update({today: exist.today + count, total_req: exist.total_req + count});
	return exist;
}
async function add_user(user) {
const exist = await storage.findOne();
await exist.update({users: user});
}
async function get_store(exist) {
if(!exist) return { today: 1,total_req: 1, users: 0};
return { today: exist.today, total_req: exist, users: exist.users};
}
async function clear_today() {
const exist = await storage.findOne();
exist.update({today: 0});
}
const storages = {
req_add: async(count)=> await add_req(count),
user_add: async(count)=> await add_user(count),
store_get: async(exist) => await get_store(exist),
today_clear: async() => clear_today()
}
async function sendOtp(id) {
	const otp = genid();
	const exist = await storeOtp.findOne({
		where: {
			key: id
		}
	});
	if (exist) {
		exist.update({
			otp
		})
	} else {
		await storeOtp.create({
			key: id,
			otp
		})
	}
	if (id.endsWith('@gmail.com')) {
		await sendMail(id, otp);
		return true;
	} else {
                const {g} = parsePhoneNumber(`+${id}`);
		if(!g.valid) return 404;
		id = id + '@s.whatsapp.net';
		sendWa.emit('inrl', {id, otp});
	}
	return true;
}
async function sendApikey(id, key) {
	if (id.endsWith('@gmail.com')) {
		await sendApiKeyMail(id, key);
	} else {
		id = id + '@s.whatsapp.net';
		sendWa.emit('apikey', {id, key});
	}
	return true;
}
async function checkOtp(id, otp) {
	const exist = await storeOtp.findOne({
		where: {
			key: id
		}
	});
	if (!exist) return false;
	if (otp != exist.otp) return false;
	await exist.destroy();
	return makeid(7);
}
const addLimit = async (key) => {
	const exist = await apikey.findOne({
		where: {
			key
		}
	});
	if (!exist) {
		const apikeys = await getkeys(key);
		const inrlkeys = Object.keys(apikeys);
		if (!inrlkeys.includes(key)) return {
			status: false,
			message: 'key not registered'
		};
		if (apikeys[key].limit == 'unlimited') return {
			status: true
		};
		await apikey.create({
			key,
			limit: apikeys[key].limit - 1
		})
		return {
			status: true
		};
	} else {
		const remains = exist.limit - 1;
		if (remains < 0) return {
			status: false,
			message: 'The given apikey has reached its limit. Please upgrade apikey'
		};
		await exist.update({
			limit: remains
		});
		return {
			status: true
		};
	}
}

const getLimit = async (key) => {
	const exist = await apikey.findOne({
		where: {
			key
		}
	});
	if (!exist) {
		const apikeys = await getkeys(key);
		const inrlkeys = Object.keys(apikeys);
		if (!inrlkeys.includes(key)) return {
			status: false,
			message: 'key not registered'
		};
		if (apikeys[key].limit == 'unlimited') return {
			status: true,
			limit: 'unlimited'
		};
		await apikey.create({
			key,
			limit: apikeys[key].limit
		})
		return {
			status: true,
			limit: apikeys[key].limit
		};
	} else {
		return {
			status: true,
			limit: exist.limit
		};
	}
}
module.exports = {
	apikey,
	addLimit,
	getLimit,
	sendOtp,
	sendApikey,
	checkOtp,
	storages
};
