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
	search,
	googleIt
} = require('../lib');
const keys = inrlkeys.map(a => a.k)

router.get('/gis', async (req, res, next) => {
	try {
		const id = req.query.text;
		const key = req.query.count;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, 'apikey limit over');
		if (!id) return errorMsg(res, 'missing parameter text');
		if (!id) return errorMsg(res, 'missing parameter count');
		res.json({
			status: true,
			creator: `${creator}`,
			result: await gis(text, key)
		});
	} catch {
		return error200(res)
	}
})

router.get('/lyrics', async (req, res, next) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, 'apikey limit over');
		if (!id) return errorMsg(res, 'missing parameter text');
		res.json({
			status: true,
			creator: `${creator}`,
			result: await lyrics(id)
		});
	} catch {
		return error200(res)
	}
});

router.get('/reddit', async (req, res, next) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, 'apikey limit over');
		if (!id) return errorMsg(res, 'missing parameter text');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await reddit(id)
		});
	} catch {
		return error200(res)
	}
});

router.get('/gs', async (req, res) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, 'apikey limit over');
		if (!id) return errorMsg(res, 'missing parameter text');
		return res.json({
			creator: `${creator}`,
			result: await googleIt(id)
		})
	} catch {
		return error200(res)
	}
})
router.get('/xvideo/search', async (req, res, next) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, 'apikey limit over');
		if (!id) return errorMsg(res, 'missing parameter text');
		res.json({
			status: true,
			creator: `${creator}`,
			result: await xvideosSearch(text)
		});
	} catch {
		return error200(res)
	}
});
router.get('/apk/search', async (req, res, next) => {
	try {
		const id = req.query.text;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, 'apikey limit over');
		if (!id) return errorMsg(res, 'missing parameter text');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await search(id)
		});
	} catch {
		return error200(res)
	}
});
module.exports = router
