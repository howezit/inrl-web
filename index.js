require('./settings')
const express = require('express');
const app = express();
let path = require('path')
const bodyParser = require("body-parser");
const fs = require('fs');
const cron = require('node-cron');
const {storages,apikey,updateFully,getkeys,addkey,removeKey,toPremiumKey,sendOtp,sendApikey,checkOtp} = require('./lib');
const {
	db
} = require('./db');
function ignoreFavicon(req, res, next) {
  if (req.originalUrl.includes('favicon.ico')) {
    res.status(204).end()
  }
  next();
}
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server)
const PORT = process.env.PORT || 8000;
const main = require('./routes/main'),
	botinfo = require('./routes/info/info'),
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
	app.set('trust proxy', true)
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(ignoreFavicon);
	app.use(express.static("public"));
	app.use('/', main)
	app.set("trust proxy", true);
	app.set("json spaces", 2);
	app.use('/api', require('./routes/api'))
	app.use('/api/post', require('./routes/post'));
	app.use('/api/textpro', require('./routes/textpro'));
	app.use('/api/photooxy', require('./routes/photooxy'));
	app.use('/api/canvas', require('./routes/canvas'));
	app.use('/api/program', require('./routes/program'));
	app.use('/api/gfx', require('./routes/gfx'));
	app.use('/api/tools', require('./routes/tools'));
	app.use('/api/search', require('./routes/search'));
	app.use('/api/ai', require('./routes/ai'));
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
	let requests = 1;
	app.get('/storage', async(req, res, next) => {
		const data = await storages.req_add(requests);
		return res.json(await storages.store_get(data));
	});
	app.get('/resp', async(req, res, next) => {
		const json = {
			ip: req.ip
		};
		return res.json(json);
	});
	app.all("*", (req, res, next) => {
		console.log(req.method,req.path);
		requests = requests +1;
		next();
	});
	app.use(async (req, res, next) => {
		if (fs.existsSync('.' + req.path)) {
			const file = fs.readFileSync('.' + req.path);
			res.end(file);
			console.log(`path cleared: ${req.path}`);
			return fs.unlinkSync('.' + req.path);
		}
		if(res.headersSent) return;
		res.status(200).json({
			status: false,
			message: "Connection Closed"
		})
	})
	io.on('connection', (socket) => {
		socket.on('send_otp', async(msg) => {
			const resp = await sendOtp(msg);
			if(resp == 404) return io.emit('otp_send', false);
			io.emit('otp_send', `otp sends to ${msg}`);
		});
		socket.on('otp', async({id, otp}) => {
			const res = await checkOtp(id, otp);
                        if(!res) return io.emit('valid', 'invalid request');
			const trying = await addkey(res, {
				type: 'free',
				user: id,
				limit: 20,
				Date: 31
			});
			if(res) {
				io.emit('valid', trying);
				await sendApikey(id, trying);
			}
		});
	});
	app.listen(3000);
	server.listen(PORT, () => {
		console.log(`listening on :${PORT}`);
	});
	cron.schedule('59 23 * * *', async() => {
		const curent_store = await getkeys();
		await storages.today_clear('today_req');
		const all = curent_store;
		const keys = Object.keys(all);
		keys.map(a=>{
			if(all[a].type != 'free') {
				all[a].Date = all[a].Date -1;
				if(all[a].Date ==0) delete all[a];
			}
		});
			const saved = await apikey.findAll();
			for(const i of saved) {
				i.destroy();
			}
		return await updateFully(all, curent_store);
		}, {
			scheduled: true,
			timezone: "Asia/Kolkata"
		});
}
start();
module.exports = {io};
