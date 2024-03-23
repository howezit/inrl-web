const {husbu} = require('./img/anime/husbu');
const {loli} = require('./img/anime/loli');
const {neko} = require('./img/anime/neko');
const {shota} = require('./img/anime/shota');
const {wifu} = require('./img/anime/wifu');
const {fonts} = require('./fonts');
const {ytsearch} = require('./yt');
const {getkeys,addkey,updateFully,removeKey,toPremiumKey,storages} = require('./apikey');
const {morece_encode,decode_morece,jsObfuscate,uglifyJS,deobfuscateJS,beautifyJs,beautifyCSS,beautifyHTML} = require('./programs');
const {
	ahegao
} = require('./img/nsfw/ahegao');
const {
	ass
} = require('./img/nsfw/ass');
const {
	bdsm
} = require('./img/nsfw/bdsm');
const {
	blowjob
} = require('./img/nsfw/blowjob');
const {
	cuckold
} = require('./img/nsfw/cuckold');
const {
	cum
} = require('./img/nsfw/cum');
const {
	eba
} = require('./img/nsfw/eba');
const {
	ero
} = require('./img/nsfw/ero');
const {
	femdom
} = require('./img/nsfw/femdom');
const {
	foot
} = require('./img/nsfw/foot');
const {
	gangbang
} = require('./img/nsfw/gangbang');
const {
	gifs
} = require('./img/nsfw/gifs');
const {
	glasses
} = require('./img/nsfw/glasses');
const {
	hentai
} = require('./img/nsfw/hentai');
const {
	jahy
} = require('./img/nsfw/jahy');
const {
	manga
} = require('./img/nsfw/manga');
const {
	masturbation
} = require('./img/nsfw/masturbation');
const {
	milf
} = require('./img/nsfw/milf');
const {
	nsfwneko
} = require('./img/nsfw/nsfwneko');
const {
	neko2
} = require('./img/nsfw/neko2');
const {
	nsfwloli
} = require('./img/nsfw/nsfwloli');
const {
	orgy
} = require('./img/nsfw/orgy');
const {
	panties
} = require('./img/nsfw/panties');
const {
	pussy
} = require('./img/nsfw/pussy');
const {
	tentacles
} = require('./img/nsfw/tentacles');
const {
	thighs
} = require('./img/nsfw/thighs');
const {
	yuri
} = require('./img/nsfw/yuri');
const {
	zettai
} = require('./img/nsfw/zettai');
const {
	upload
} = require('./url');
const {
	birthDetails
} = require('./age');
const country = require('./country.json');
const {
	ephoto,
	textpro,
	photooxy
} = require("mumaker")
const news24 = require('./news24');
const {pdf} = require('./pdf');
const {
	gfx1,
	gfx2,
	gfx3,
	gfx4,
	gfx5,
	gfx6,
	gfx7,
	gfx8,
	gfx9,
	gfx10,
	gfx11,
	gfx12,
        t_musk
} = require('./canvas');
const {
	makeid,
	encrypt,
	decrypt
} = require('./enc');
const {
	igstalk,
	ytChannel,
	gitUser
} = require('./stalk');
const {
	Fancy,
	Fancylist
} = require('./fancy');
const {
	write
} = require('./write');
const {
	gpt,
	gemini,
	stableDiffusion,
	bardAi,
	Bing
} = require('./ai');
const {
	apikey,
	addLimit,
	getLimit,
	sendOtp,
        sendApikey,
	checkOtp
} = require('./auth');
const {
	getUser,
	saveUser
} = require('./func');
const {
	getBuffer
} = require('./getbuffer');
const {
	getFBInfo
} = require('./fb');
const {
	search,
	download
} = require('./apk');
const {
	htmlColor
} = require('./color');
const {
	BufferToFile
} = require("./buffer");
const {
	xvideosSearch,
	xvideosDown
} = require("./porn");
const {
	gis,
	googleIt
} = require('./google');
const {
	lyrics,
	pinterest,
	reddit
} = require('./search');
const {
	ocrSpace
} = require('./ocr');
const {
	Insta,
	PinDL
} = require('./download');
const {
	device,
	generateRandomString
} = require('./true');
const {
	fetchJson,
	runtime
} = require('./get');
const {
	attp,
	ttp
} = require('./attp');
const {mailTransporter} = require('./toclient');
// define datas in abouve and export by bellow funxtion
module.exports = {
	morece_encode,
	decode_morece,
	jsObfuscate,
	deobfuscateJS,
	uglifyJS,
	beautifyJs,
	beautifyCSS,
	beautifyHTML,
	getkeys,
	addkey,
	updateFully,
	removeKey,
	toPremiumKey,
	storages,
	ytsearch,
	fonts,
	husbu,
	loli,
	neko,
	shota,
	wifu,
	ahegao,
	ass,
	bdsm,
	blowjob,
	cuckold,
	cum,
	eba,
	ero,
	femdom,
	foot,
	gangbang,
	gifs,
	glasses,
	hentai,
	jahy,
	manga,
	masturbation,
	milf,
	nsfwneko,
	neko2,
	nsfwloli,
	orgy,
	panties,
	pussy,
	tentacles,
	thighs,
	yuri,
	zettai,
	igstalk,
	ytChannel,
	gitUser,
	attp,
	ttp,
	BufferToFile,
	fetchJson,
	runtime,
	search,
	gpt,
	gemini,
	stableDiffusion,
	bardAi,
	Bing,
	download,
	makeid,
	encrypt,
	decrypt,
	ephoto,
	textpro,
	Fancy,
	Fancylist,
	photooxy,
	xvideosSearch,
	xvideosDown,
	birthDetails,
	htmlColor,
	apikey,
	addLimit,
	getLimit,
	sendOtp,
        sendApikey,
	checkOtp,
	country,
	upload,
	Insta,
	PinDL,
	gfx1,
	gfx2,
	gfx3,
	gfx4,
	gfx5,
	gfx6,
	gfx7,
	gfx8,
	gfx9,
	gfx10,
	gfx11,
	gfx12,
	t_musk,
	news24,
	write,
	gis,
	googleIt,
	lyrics,
	pinterest,
	reddit,
	ocrSpace,
	getBuffer,
	device,
	generateRandomString,
	getUser,
	saveUser,
	getFBInfo,
	pdf,
	mailTransporter
};
//end
