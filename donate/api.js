require('../settings');
const {} = require('./func');
const express = require('express');
const router = express.Router();
router.get('/generate_upi_qr', async (req, res) => {
	const mony = req.query.id;
if(!mony) return error400(res);
});
module.exports = router
