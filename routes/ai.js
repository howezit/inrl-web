require('../settings');
const express = require('express');
const router = express.Router();
const {
	gpt,
	addLimit,
	gemini,
	stableDiffusion,
	getBuffer,
	bardAi,
	Bing
} = require('../lib');

router.get('/', async (req, res, next) => {
	res.sendFile(__path + '/routes/html/ai.html')
})
router.get('/chatgpt', async (req, res) => {
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
			result: await gpt(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});
router.get('/bard', async (req, res) => {
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
			result: await bardAi(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});
router.get('/bing', async (req, res) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		const result = await Bing(id);
		return await res.end(await getBuffer(result));
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});
router.get('/gemini', async (req, res) => {
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
			result: await gemini(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});
router.get('/diffusion', async (req, res) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		const result = await stableDiffusion(id);
		return await res.end(await getBuffer(result));
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});


module.exports = router
