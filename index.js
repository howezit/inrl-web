require('./settings')
const express = require('express');
const app = express();
let path = require('path')
const bodyParser = require("body-parser");
const fs = require('fs');

const PORT = process.env.PORT || 8000;
let main = require('./routes/main'),
    api = require('./routes/api'),
    server = require('./routes/server'),
    code = require('./routes/pair'),
    info = require('./routes/info/info'),
    post = require('./routes/post'),
    logo = require('./routes/logo'),
    vars = require('./routes/info/var'),
    plugin = require('./plugin/main'),
    admin = require('./admin/get'),
    donate = require('./donate/api');
require('events').EventEmitter.defaultMaxListeners = 500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/', main)
app.set("trust proxy", true);
app.set("json spaces", 2);
app.use('/api', api)
app.use('/info/bot/var', vars)
app.use('/server', server);
app.use('/pair', code);
app.use('/info', info)
app.use('/post', post);
app.use('/logo', logo);
app.use('/plugins', plugin);
app.use('/admin', admin);
app.use('/donate', donate);


app.use(function (req, res, next) {
	//if(fs.existSync(req.pathname)) {}
	return res.send(require('util').inspect(req.path + req.baseUrl));
    res.status(200).json({
        status: false,
        message: "Connection Closed"
    })
})
app.listen(PORT, () => {
    console.log(`
	██████╗ ███████╗███████╗████████╗ █████╗ ██████╗ ██╗
	██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██║
	██████╔╝█████╗  ███████╗   ██║   ███████║██████╔╝██║
	██╔══██╗██╔══╝  ╚════██║   ██║   ██╔══██║██╔═══╝ ██║
	██║  ██║███████╗███████║   ██║   ██║  ██║██║     ██║
	╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝
			                              made by inrl
								 
 Server running on http://localhost:` + PORT)
console.log(`Hello ${creator}`)
})

module.exports = app
