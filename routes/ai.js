require('../settings');
const express = require('express');
const router = express.Router();
const {
	gpt,
	addLimit,
	gemini
} = require('../lib');

router.get('/chatgpt', async (req, res) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message); 
		if (!id) return errorMsg(res, 'missing parameter text');
		let res_msg = await gpt(id);
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


module.exports = router
