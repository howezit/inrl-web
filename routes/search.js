require('../settings');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const {
	addLimit,
	gis,
	xvideosSearch,
	lyrics,
	reddit,
        ytsearch,
	search,
	googleIt,
	pinterest
} = require('../lib');
router.get('/', async (req, res, next) => {
	res.sendFile(__path + '/routes/html/search.html')
})


router.get('/pinterest', async (req, res) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		if (!id) return errorMsg(res, 'missing parameter text');
		return res.json({
			status: true,
			creator: `${creator}`,
			result: await pinterest(id.trim())
		})
	} catch (e) {
		console.log(e);
		return error200(res);
	}
})
router.get('/yt', async (req, res) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		if (!id) return errorMsg(res, 'missing parameter text');
		return res.json({
			status: true,
			creator: `${creator}`,
			result: await ytsearch(id.trim())
		})
	} catch (e) {
		console.log(e);
		return error200(res);
	}
})
router.get('/gis', async (req, res, next) => {
	try {
		const id = req.query.text;
		const count = req.query.count;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		if (!id) return errorMsg(res, 'missing parameter text');
		if (!count) return errorMsg(res, 'missing parameter count');
		res.json({
			status: true,
			creator: `${creator}`,
			result: await gis(id, count)
		});
	} catch (e) {
		console.log(e);
		return error200(res)
	}
})

router.get('/lyrics', async (req, res, next) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		if (!id) return errorMsg(res, 'missing parameter text');
		res.json({
			status: true,
			creator: `${creator}`,
			result: await lyrics(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res)
	}
});

router.get('/reddit', async (req, res, next) => {
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
			result: await reddit(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res)
	}
});

router.get('/gs', async (req, res) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		if (!id) return errorMsg(res, 'missing parameter text');
		return res.json({
			creator: `${creator}`,
			result: await googleIt(id)
		})
	} catch (e) {
		console.log(e);
		return error200(res)
	}
})
router.get('/xvideo', async (req, res, next) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		if (!id) return errorMsg(res, 'missing parameter text');
		res.json({
			status: true,
			creator: `${creator}`,
			result: await xvideosSearch(text)
		});
	} catch (e) {
		console.log(e);
		return error200(res)
	}
});
router.get('/apk', async (req, res, next) => {
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
			result: await search(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res)
	}
});
module.exports = router
