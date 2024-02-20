require('../settings');
const express = require('express');
const router = express.Router();
const axios = require('axios');
const fs = require('fs');
const {
	ocrSpace,
	addLimit,
	Fancy,
	Fancylist,
	pdf,
	upload
} = require('../lib');
const QRCode = require('qrcode');
router.get('/', async (req, res, next) => {
	res.sendFile(__path + '/routes/html/tools.html')
})

router.get('/fancy', async (req, res, next) => {
	try {
		const id = req.query.text;
		const key = req.query.key;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		if (!key) return errorMsg(res, 'missing parameter key, key upto 40|key=list');
		if (key == 'list') {
			return res.json({
				status: true,
				creator: `${creator}`,
				result: Fancylist(id)
			});
		}
		if (key > 40) return errorMsg(res, 'key must be less then 40 and greater then 0');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: Fancy(parseInt(key), id)
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});
router.post('/fancy', async (req, res, next) => {
	try {
		const id = req.body.text;
		const key = req.body.key;
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		if (!key) return errorMsg(res, 'missing parameter key, key upto 40|key=list');
		if (key == 'list') {
			return res.json({
				status: true,
				creator: `${creator}`,
				result: Fancylist(id)
			});
		}
		if (key > 40) return errorMsg(res, 'key must be less then 40 and greater then 0');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: Fancy(parseInt(key), id)
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});

router.get('/temp_mail', async (req, res) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
	        const {data} = await axios("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1");
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: data[0]
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
})

router.get('/get_mail', async (req, res) => {
	try {
                const mail_id = req.query.email;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!mail_id) return errorMsg(res, 'missing parameter email');
		const [demo, mail] = mail_id.split('@');
	        const {data} = await axios(`https://www.1secmail.com/api/v1/?action=getMessages&login=${demo}&domain=${mail}`);
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: data
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
})

router.get('/qrcode', async (req, res) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		return await res.end(await QRCode.toBuffer(id));
	} catch (e) {
		console.log(e);
		return error200(res);
	}
})

router.post('/url', async (req, res) => {
	try {
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		const buff = req.files.file;
		if (!buff) return error503(res);
		const p = `./temp/${req.files.file.name}`;
		fs.writeFileSync(p, buff.data);
		const url = await upload({
			path: '/temp/' + req.files.file.name
		});
		if (!url.status) return errorMsg(res, url.error);
		return await res.json(url);
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});
router.post('/ocr', async (req, res) => {
	try {
		const buff = req.files.file;
		const apiKey = req.body.key;
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!buff || !apiKey) return error503(res);
		const p = `./temp/${req.files.file.name}`;
		fs.writeFileSync(p, buff.data);
		const ocr = await ocrSpace(p, {
			apiKey
		});
		return await res.json(ocr);
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});
router.post('/pdf', async (req, res) => {
	try {
		const buff = req.files;
		const apikey = req.body.apikey;
		const text = req.body.text;
		const path = req.body.path;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!buff && !text) return errorMsg(res, 'missing appended files and text, must need text or files, defin a path:"hy.pdf"');
		if (!path) return errorMsg(res, 'missing appended files and text, must need text or files, defin a path:"hy.pdf"');
                const pdfFile = await pdf(buff?.files, {text, path});
		return res.json({status: true, creator, url: 'https://' + req.hostname + pdfFile});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});

module.exports = router
