require('../settings');
const express = require('express');
const router = express.Router();
const {
	addLimit,
	morece_encode,
	decode_morece,
	jsObfuscate,
	deobfuscateJS,
	uglifyJS,
	beautifyJs,
	beautifyCSS,
	beautifyHTML
} = require('../lib');

router.get('/', async (req, res, next) => {
	res.sendFile(__path + '/routes/html/program.html')
})

router.get('/morece_encode', async (req, res, next) => {
	try {
		const id = req.query.text;		
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await morece_encode(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});
router.get('/morece_decode', async (req, res, next) => {
	try {
		const id = req.query.text;		
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await decode_morece(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});
router.post('/js_minify', async (req, res, next) => {
	try {
		const id = req.body.text;		
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await uglifyJS(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});
router.post('/js_obfuscate', async (req, res, next) => {
	try {
		const id = req.body.text;		
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await jsObfuscate(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});
router.post('/js_deobfuscate', async (req, res, next) => {
	try {
		const id = req.body.text;		
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await deobfuscateJS(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});
router.post('/js_beautify', async (req, res, next) => {
	try {
		const id = req.body.text;		
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await beautifyJs(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});
router.post('/css_beautify', async (req, res, next) => {
	try {
		const id = req.body.text;		
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await beautifyCSS(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});
router.post('/html_beautify', async (req, res, next) => {
	try {
		const id = req.body.text;		
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await beautifyHTML(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});

module.exports = router;
