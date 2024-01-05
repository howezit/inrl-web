require('../settings');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const {
	ocrSpace,
	gpt6,
	addLimit,
	checkkey
} = require('../lib');
const keys = inrlkeys.map(a => a.k)

router.get('/chatgpt', async (req, res) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
		if (!id) return errorMsg(res, 'missing parameter text');
		let res_msg = await gpt6(id);
		res_msg = res_msg.reply;
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: res_msg
		});
	} catch {
		return error200(res);
	}
});

router.post('/ocr', async (req, res) => {
	try {
		const buff = req.files.file;
		const apiKey = req.body.key;
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
		if (!buff || !apiKey) return error503(res);
		const p = `./temp/${req.files.file.name}`;
		fs.writeFileSync(p, buff.data);
		const ocr = await ocrSpace(p, {
			apiKey
		});
		return await res.json(ocr);
	} catch {
		return error200(res);
	}
});

router.get('/qrcode', async (req, res) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
		if (!id) return errorMsg(res, 'missing parameter text');
		res.set({
			'Content-Type': 'image/png'
		})
		return await res.end(await QRCode.toBuffer(id, {
			width: 640,
		}))
	} catch {
		return error200(res);
	}
})
module.exports = router
