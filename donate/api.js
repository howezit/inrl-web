const express = require('express');
const router = express.Router();
router.get('/generate_upi_qr', async (req, res) => {
	const mony = req.query.id;
if(!mony) return res
});
module.exports = router
