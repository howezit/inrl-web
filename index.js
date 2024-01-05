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

const PORT = process.env.PORT || 8000;
const main = require('./routes/main'),
	api = require('./routes/api'),
	server = require('./routes/server'),
	code = require('./routes/pair'),
	info = require('./routes/info/info'),
	post = require('./routes/post'),
	textpro = require('./routes/textpro'),
	gfx = require('./routes/gfx'),
	tokens = require('./routes/tokens'),
	maker = require('./routes/maker'),
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
	app.use('/api/textpro', textpro);
	app.use('/api/gfx', gfx);
	app.use('/api/maker', maker);
	app.use('/api/tokens', tokens);
	app.use('/info/bot/var', vars)
	app.use('/server', server);
	app.use('/pair', code);
	app.use('/info', info)
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
