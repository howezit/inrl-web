require('../settings');
const express = require('express');
const router = express.Router();
const {
	igstalk,
	ytChannel,
	gitUser,
	checkkey,
	addLimit
} = require('../lib');

router.get('/ig', async (req, res) => {
	try {
		const id = req.query.name;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
		if (!id) return errorMsg(res, 'missing parameter name');
		return res.json({
			status: true,
			creator: `${creator}`,
			result: await igstalk(id)
		});
	} catch (e) {
		return error200(res);
	}
})
router.get('/ytchannel', async (req, res) => {
	try {
		const id = req.query.name;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
		if (!id) return errorMsg(res, 'missing parameter name');
		return res.json({
			status: true,
			creator: `${creator}`,
			result: await ytChannel(id.trim())
		})
	} catch (e) {
		console.log(e)
		return error200(res);
	}
})
router.get('/github', async (req, res, next) => {
	try {
		const id = req.query.user;
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		if (!keys.includes(apikey)) return errorMsg(res, 'apikey not registered');
		if (!await checkkey(apikey)) return errorMsg(res, 'apikey limit over');
		await addLimit(apikey);
		if (!id) return errorMsg(res, 'missing parameter user');
		res.json({
			status: true,
			creator: `${creator}`,
			result: await gitUser(id.trim())
		})
	} catch (e) {
		return error200(res);
	}
})
module.exports = router
