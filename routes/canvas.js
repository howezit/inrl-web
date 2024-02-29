require('../settings');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const {
	t_musk,
	addLimit
} = require('../lib');
router.get('/', async (req, res, next) => {
	res.sendFile(__path + '/routes/html/canvas.html')
})
router.post('/musk_tweet', async (req, res) => {
	try {
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		const text = req.body.text;
		const footer = req.body.footer;
		if (!text && !footer) return errorMsg(res, 'missing parameter text & footer & tz');
		const file = await t_musk({text, footer: footer|| ' ', tz: req.body.tz || 'asia/Kolkata'});
		return await res.json({
		    status: true,
		    creator,
		    result: file
		});
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});

router.get('/musk_tweet', async (req, res) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		const text = req.query.text;
		const footer = req.query.footer;
		if (!text && !footer) return errorMsg(res, 'missing parameter text & footer & tz');
		const file = await t_musk({text, footer: footer|| ' ', tz: req.query.tz || 'asia/Kolkata'});
		return await res.end(file);
	} catch (e) {
		console.log(e);
		return error200(res);
	}
});

module.exports = router
