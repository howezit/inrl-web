require('../settings');
const {apikey,addLimit,checkkey,getLimit} = require('../lib');
const express = require('express');
const router = express.Router();

router.get('/limit', async (req, res) => {
    let id = req.query.apikey;
    if (!id) return res.json({
        status: false,
        creator: `${creator}`,
        message: 'no key found'
    })
    const {status, message, limit} = await getLimit(id);
    return res.json({
        creator: `${creator}`,
        result: data
    })
})


module.exports = router
