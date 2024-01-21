require('../settings');
const express = require('express');
const router = express.Router();
const {
	ahegao,
	ass,
	bdsm,
	blowjob,
	cuckold,
	cum,
	eba,
	ero,
	femdom,
	foot,
	gangbang,
	gifs,
	glasses,
	hentai,
	jahy,
	manga,
	masturbation,
	milf,
	nsfwneko,
	neko2,
	nsfwloli,
	orgy,
	panties,
	pussy,
	tentacles,
	thighs,
	yuri,
	zettai,
	addLimit
} = require('../lib');

router.get('/', async (req, res, next) => {
	res.sendFile(__path + '/routes/html/nsfw.html')
})

router.get('/ahegao', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: ahegao()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/ass', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: ass()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/bdsm', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: bdsm()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/blowjob', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: blowjob()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/cuckold', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: cuckold()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/cum', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: cum()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/eba', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: eba()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/ero', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: ero()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/femdom', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: femdom()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/foot', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: foot()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/gangbang', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: gangbang()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/gifs', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: gifs()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/glasses', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: glasses()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/hentai', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: hentai()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/jahy', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: jahy()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/manga', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: manga()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/masturbation', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: masturbation()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/milf', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: milf()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/nsfwneko', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: nsfwneko()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/neko2', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: neko2()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/nsfwloli', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: nsfwloli()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/orgy', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: orgy()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/panties', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: panties()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/pussy', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: pussy()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/tentacles', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: tentacles()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/thighs', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: thighs()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/yuri', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: yuri()
		})
	} catch (e) {
		return error200(res);
	}
})
router.get('/zettai', async (req, res, next) => {
	try {
		const apikey = req.query.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		res.json({
			status: true,
			creator,
			result: zettai()
		})
	} catch (e) {
		return error200(res);
	}
})
module.exports = router
