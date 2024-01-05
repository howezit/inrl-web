require('../settings');
const express = require('express');
const router = express.Router();
const {
	husbu,
	loli,
	neko,
	shota,
	wifu,
	addLimit
} = require('../lib');
const keys = inrlkeys.map(a => a.k);

router.get('/husbu', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		const limits = await addLimit(apikey);
		if(!limits.status) return errorMsg(res, 'apikey limit over'); 
		if(!limits.status) return errorMsg(res, 'apikey limit over'); 
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
		const limits = await addLimit(apikey);
		if(!limits.status) return errorMsg(res, 'apikey limit over'); 
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
		const limits = await addLimit(apikey);
		if(!limits.status) return errorMsg(res, 'apikey limit over'); 
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
		const limits = await addLimit(apikey);
		if(!limits.status) return errorMsg(res, 'apikey limit over'); 
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
		const limits = await addLimit(apikey);
		if(!limits.status) return errorMsg(res, 'apikey limit over'); 
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
