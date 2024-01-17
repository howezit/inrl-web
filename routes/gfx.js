require('../settings');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const {
	gfx1,
	gfx2,
	gfx3,
	gfx4,
	gfx5,
	gfx6,
	gfx7,
	gfx8,
	gfx9,
	gfx10,
	gfx11,
	gfx12,
	addLimit
} = require('../lib');


router.post('/gfx1', async (req, res) => {
	try {
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		const text = req.body.text;
		const text2 = req.body.text2;
		if (!text && !text2) return errorMsg(res, 'missing parameter text');
		const file = await gfx1({
			text,
			text2
		});
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

router.post('/gfx2', async (req, res) => {
	try {
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		const text = req.body.text;
		const text2 = req.body.text2;
		if (!text && !text2) return errorMsg(res, 'missing parameter text');
		const file = await gfx2({
			text,
			text2
		});
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

router.post('/gfx3', async (req, res) => {
	try {
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		const text = req.body.text;
		const text2 = req.body.text2;
		if (!text && !text2) return errorMsg(res, 'missing parameter text');
		const file = await gfx3({
			text,
			text2
		});
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

router.post('/gfx4', async (req, res) => {
	try {
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		const text = req.body.text;
		const text2 = req.body.text2;
		if (!text && !text2) return errorMsg(res, 'missing parameter text');
		const file = await gfx4({
			text,
			text2
		});
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

router.post('/gfx5', async (req, res) => {
	try {
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		const text = req.body.text;
		const text2 = req.body.text2;
		const text3 = req.body.text3;
		if (!text && !text2 && !text3) return errorMsg(res, 'missing parameter text');
		const file = await gfx5({
			text,
			text2,
			text3
		});
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

router.post('/gfx6', async (req, res) => {
	try {
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		const text = req.body.text;
		const text2 = req.body.text2;
		const text3 = req.body.text3;
		if (!text && !text2 && !text3) return errorMsg(res, 'missing parameter text');
		const file = await gfx6({
			text,
			text2,
			text3
		});
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

router.post('/gfx7', async (req, res) => {
	try {
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		const path = req.body.path;
		const text = req.body.text;
		const style = req.body.style;
		const color = req.body.color;
		const border = req.body.border;
		const text2 = req.body.text2;
		if (!path || !text || !color || !border || !style) return error503(res);
		const file = await gfx7({
			path,
			text,
			color,
			border,
			style,
			text2
		});
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

router.post('/gfx8', async (req, res) => {
	try {
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		const path = req.body.path;
		const text = req.body.text;
		const style = req.body.style;
		const color = req.body.color;
		const border = req.body.border;
		const text2 = req.body.text2;
		if (!path || !text || !color || !border || !style) return error503(res);
		const file = await gfx8({
			path,
			text,
			color,
			border,
			style,
			text2
		});
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
router.post('/gfx9', async (req, res) => {
	try {
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		const text = req.body.text;
		if (!text) return errorMsg(res, 'missing parameter text');
		const file = await gfx9(text);
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
router.post('/gfx10', async (req, res) => {
	try {
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		const text = req.body.text;
		if (!text) return errorMsg(res, 'missing parameter text');
		const file = await gfx10(text);
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
router.post('/gfx11', async (req, res) => {
	try {
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		const text = req.body.text;
		if (!text) return errorMsg(res, 'missing parameter text');
		const file = await gfx11(text);
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
router.post('/gfx12', async (req, res) => {
	try {
		const apikey = req.body.apikey;
		if (!apikey) return errorMsg(res, 'no apikey provided');
		const limits = await addLimit(apikey);
		if (!limits.status) return errorMsg(res, limits.message);
		const text = req.body.text;
		if (!text) return errorMsg(res, 'missing parameter text');
		const file = await gfx12(text);
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

module.exports = router
