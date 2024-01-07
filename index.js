require('./settings')
const express = require('express');
const app = express();
let path = require('path')
const bodyParser = require("body-parser");
const fs = require('fs');
const cron = require('node-cron');
const {apikey,updateFully,getkeys,addkey,removeKey,toPremiumKey,setOtp,checkOtp} = require('./lib');
const {
	db
} = require('./db');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server)
const PORT = process.env.PORT || 8000;
const main = require('./routes/main'),
	botinfo = require('./routes/info/info'),
	post = require('./routes/post'),
	vars = require('./routes/info/var'),
	plugin = require('./plugin/main'),
	admin = require('./admin/get'),
	donate = require('./donate/api');
require('events').EventEmitter.defaultMaxListeners = 500;
const fileUpload = require('express-fileupload');
async function start() {
	await db.sync();
	app.use(fileUpload());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(express.static("public"));
	app.use('/', main)
	app.set("trust proxy", true);
	app.set("json spaces", 2);
	app.use('/api', require('./routes/api'))
	app.use('/api/post', post);
	app.use('/api/textpro', require('./routes/textpro'));
	app.use('/api/photooxy', require('./routes/photooxy'));
	app.use('/api/gfx', require('./routes/gfx'));
	app.use('/api/tools', require('./routes/tools'));
	app.use('/api/search', require('./routes/search'));
	app.use('/api/maker', require('./routes/maker'));
	app.use('/api/stalk', require('./routes/stalk'));
        app.use('/api/anime', require('./routes/anime'));
	app.use('/api/nsfw', require('./routes/nsfw'));
        app.use('/api/info', require('./routes/info'));
	app.use('/api/tokens', require('./routes/tokens'));
	app.use('/api/download', require('./routes/download'));
	app.use('/info/bot/var', vars)
	app.use('/server', require('./routes/server'));
	app.use('/pair', require('./routes/pair'));
	app.use('/info', botinfo)
	app.use('/plugins', plugin);
	app.use('/admin', admin);
	app.use('/donate', donate);

	app.use(async (req, res, next) => {
		if (fs.existsSync('.' + req.path)) {
			const file = fs.readFileSync('.' + req.path);
			await res.end(file);
			return fs.unlinkSync('.' + req.path);
		}
		res.status(200).json({
			status: false,
			message: "Connection Closed"
		})
	})
	io.on('connection', (socket) => {
		socket.on('send_otp', async(msg) => {
			await setOtp(msg);
			io.emit('otp_send', `otp sends to ${msg}`);
		});
		socket.on('otp', async({id, otp}) => {
			const res = await checkOtp(id, otp)
			io.emit('valid', res);
			if(res) await addkey(res, {
				free: true,
				user: id,
				limit: 20,
				Date: 31
			});
		});
	});
	app.listen(3000);
	server.listen(PORT, () => {
		console.log(`listening on :${PORT}`);
	});
	cron.schedule('0 5 * * *', async() => {
		const all = await getkeys();
		const keys = Object.keys(all);
		keys.map(a=>{
			all[a].limit =0;
			if(a.free != true) {
				all[a].Date = all[a].Date -1;
				if(all[a].Date ==0) delete all[a];
			}
			return await updateFully(all);
		});
		}, {
			scheduled: true,
			timezone: "Asia/Kolkata"
		});
}
start();
module.exports = {io};
