require('../settings');
const {
	Insta,
	getFBInfo,
	download,
	xvideosDown,
	addLimit
} = require('../lib');
const express = require('express');
const router = express.Router();
const keys = inrlkeys.map(a => a.k);


router.get('/insta', async (req, res, next) => {
	try {
		const id = req.query.url;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, 'apikey limit over');
		if (!id) return errorMsg(res, 'missing parameter url');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await Insta(id)
		});
	} catch {
		return error200(res)
	}
});
router.get('/fb', async (req, res) => {
	try {
		const id = req.query.url;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, 'apikey limit over');
		if (!id) return errorMsg(res, 'missing parameter url');
		return await res.json({
			status: true,
			creator,
			result: await getFBInfo(id)
		})
	} catch {
		return error200(res)
	}
})


router.get('/apk', async (req, res, next) => {
	try {
		const id = req.query.url;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, 'apikey limit over');
		if (!id) return errorMsg(res, 'missing parameter url');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await download(id)
		});
	} catch {
		return error200(res)
	}
});


router.get('/xvideos', async (req, res, next) => {
	try {
		const id = req.query.url;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, 'apikey limit over');
		if (!id) return errorMsg(res, 'missing parameter url');
		res.json({
			status: true,
			creator: `${creator}`,
			result: await xvideosDown(id)
		});
	} catch {
		return error200(res)
	}
});
module.exports = router
