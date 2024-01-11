require('../settings');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const {
	ocrSpace,
	gpt6,
	addLimit,
	Fancy,
	Fancylist,
	pdf,
	upload
} = require('../lib');
const QRCode = require('qrcode');


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
router.get('/chatgpt', async (req, res) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		let res_msg = await gpt6(id);
		res_msg = res_msg.reply;
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: res_msg
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});

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
		if (!url.status) return errorMsg(res, url.e);
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
		if (!buff && !text || !path) return errorMsg(res, 'missing appended files and text, must need text or files, defin a path:"hy.pdf"');
                const pdfFile = await pdf(buff?.files, {text, path});
		return res.json({status: true, creator, url: 'https://' + req.hostname + pdfFile});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});

module.exports = router
