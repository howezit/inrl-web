require('../settings');
const {
	db
} = require('../db');
const {
	DataTypes
} = require('sequelize');


function makeid() {
	let result = "";
	const characters = "0123456789";
	var characters9 = characters.length;
	for (var i = 0; i < 6; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters9));
	}
	return result;
}


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
async function setOtp(id) {
	const otp = makeid();
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
	return true;
}
const addLimit = async (key) => {
	const keys = inrlkeys.map(a => a.k);
	if (!keys.includes(key)) return {
		status: false,
		message: 'key not registered'
	};
	const limit = inrlkeys.filter(a => a.k == key);
	if (limit[0].l == 'unlimited') return {
		status: true
	};
	const exist = await apikey.findOne({
		where: {
			key
		}
	});
	if (!exist) {
		await apikey.create({
			key,
			limit: 1
		})
		return {
			status: true
		};
	} else {
		const remains = limit[0].l - exist.limit;
		if (remains < 1) return {
			status: false,
			message: 'api key over'
		};
		await exist.update({
			limit: exist.limit + 1
		});
		return {
			status: true
		};
	}
}
const checkkey = async (key) => {
	const keys = inrlkeys.map(a => a.k);
	if (!keys.includes(key)) return false;
	const limit = inrlkeys.filter(a => a.k == key);
	const exist = await apikey.findOne({
		where: {
			key
		}
	});
	if (!exist) return true;
	if (exist.limit == 'unlimited') return true;
	if (limit[0].i - exist.limit < 1) return false;
	return true;
}
const getLimit = async (key) => {
	const keys = inrlkeys.map(a => a.k);
	if (!keys.includes(key)) return {
		status: false,
		message: 'key not registered'
	};
	const limit = inrlkeys.filter(a => a.k == key);
	const exist = await apikey.findOne({
		where: {
			key
		}
	});
	if (!exist) {
		return {
			status: true,
			limit: limit[0].l
		};
	} else {
		const remains = limit[0].l - exist.limit;
		return {
			status: true,
			limit: remains < 1 ? 0 : remains
		};
	}
}
module.exports = {
	apikey,
	addLimit,
	checkkey,
	getLimit,
	setOtp,
	checkOtp
};
