require('../settings');
const {
	Insta,
	getFBInfo,
	download,
	xvideosDown,
	addLimit,
	PinDL
} = require('../lib');
const express = require('express');
const router = express.Router();
router.get('/', async (req, res, next) => {
	res.sendFile(__path + '/routes/html/download.html')
})

router.get('/insta', async (req, res, next) => {
	try {
		const id = req.query.url;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		if (!id) return errorMsg(res, 'missing parameter url');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await Insta(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res)
	}
});
router.get('/pinterest', async (req, res, next) => {
	try {
		const id = req.query.url;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		if (!id) return errorMsg(res, 'missing parameter url');
		return await res.json({
			status: true,
			creator: `${creator}`,
			result: await PinDL(id)
		});
	} catch (e) {
		console.log(e);
		return error200(res)
	}
});
router.get('/fb', async (req, res) => {
	try {
		const id = req.query.url;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
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
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
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
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
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
