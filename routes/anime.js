require('../settings');
const express = require('express');
const router = express.Router();
const {
	husbu,
	loli,
	neko,
	shota,
	wifu,
	checkkey,
	addLimit
} = require('../lib');
const keys = inrlkeys.map(a => a.k);

router.get('/husbu', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
		res.json({
			status: true,
			creator,
			result: husbu()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/loli', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
		res.json({
			status: true,
			creator,
			result: loli()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/neko', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
		res.json({
			status: true,
			creator,
			result: neko()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/shota', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
		res.json({
			status: true,
			creator,
			result: shota()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/wifu', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
		res.json({
			status: true,
			creator,
			result: wifu()
		})
	} catch (e) {
		return error200(res);
	}
})

module.exports = router
