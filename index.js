require('./settings')
const express = require('express');
const app = express();
let path = require('path')
const favicon = require("serve-favicon");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const expressSession = require("express-session");
const MemoryStore = require("memorystore")(expressSession);
const passport = require("passport");
const flash = require("connect-flash");
const csrf = require("csurf");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;
let main = require('./routes/main'),
    api = require('./routes/api'),
    server = require('./routes/server'),
    code = require('./routes/pair'),
    info = require('./routes/info/info'),
    db = require('./routes/user'),
    post = require('./routes/post'),
    logo = require('./routes/logo'),
    vars = require('./routes/info/var'),
    plugin = require('./plugin/main');
const fileUpload = require('express-fileupload');
require('events').EventEmitter.defaultMaxListeners = 500;

app.use(fileUpload());
(cors = require("cors")), (secure = require("ssl-express-www"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser("random"));
app.use(
  expressSession({
    secret: "random",
    resave: true,
    saveUninitialized: true,
    maxAge: 24 * 60 * 60 * 1000,
    store: new MemoryStore(),
  })
);
app.use(csrf());
app.use(passport.initialize());
app.use(express.static("public"));
app.use(passport.session());
app.set("trust proxy", true);
app.set("json spaces", 2);
app.use(cors());
app.use(secure);
app.use(flash());
//app.set('view engine', 'html');
//app.set("views", "page");
app.use('/', main)
app.use('/api', api)
app.use('/info/bot/var', vars)
app.use('/server', server);
app.use('/pair', code);
app.use('/info', info)
app.use('/post', post);
app.use('/logo', logo);
app.use('/plugins', plugin);
app.use('/db', db);


app.use(function (req, res, next) {
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
