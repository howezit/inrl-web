require('../settings');
const {getLimit} = require('../lib');
const express = require('express');
const router = express.Router();
router.get('/', async (req, res, next) => {
	res.sendFile(__path + '/routes/html/tokens.html')
})

router.get('/limit', async (req, res) => {
    let id = req.query.apikey;
    if (!id) return errorMsg(res, 'no apikey provided');
    const {status, message, limit} = await getLimit(id);
    return res.json({
        status,
        message,
        creator: `${creator}`,
        result: limit
    })
})


module.exports = router
