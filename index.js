require('./settings')
const express = require('express');
const app = express();
let path = require('path')
const bodyParser = require("body-parser");
const fs = require('fs');
const cron = require('node-cron');
const {apikey} = require('./lib');
const {
	db
} = require('./db');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 8000;
const main = require('./routes/main'),
	api = require('./routes/api'),
	server = require('./routes/server'),
	code = require('./routes/pair'),
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
	app.use('/api', api)
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
	app.use('/server', server);
	app.use('/pair', code);
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
	app.listen(PORT, () => {
		console.log(`Server running on http://localhost:` + PORT);
	});
	io.on('connection', (socket) => {
		console.log('a user connected');
	});
	server.listen(3000, () => {
		console.log('listening on *:3000');
	});
	cron.schedule('0 5 * * *', () => {
		const all = apikeys.findAll();
		for(const i of all) {
			i.destroy();
		}
		}, {
			scheduled: true,
			timezone: "Asia/Kolkata"
		});
}
start();
module.exports = app
