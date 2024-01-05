require('../settings');
const {checkkey,getLimit} = require('../lib');
const express = require('express');
const router = express.Router();

router.get('/limit', async (req, res) => {
    let id = req.query.apikey;
    if (!id) return res.json({
        status: false,
        creator: `${creator}`,
        message: 'no key found'
    })
    if(!checkkey(key)) return res.json({
        status: false,
        creator: `${creator}`,
        message: 'not registered!'
    })
    const {status, message, limit} = await getLimit(id);
    return res.json({
        status,
        creator: `${creator}`,
        result: limit
    })
})

router.get('/check', async (req, res) => {
    let id = req.query.apikey;
    if (!id) return res.json({
        status: false,
        creator: `${creator}`,
        message: 'no key found'
    })
    if(!checkkey(key)) return res.json({
        status: false,
        creator: `${creator}`,
        message: 'not registered!'
    })
    return res.json({
        status: true,
        creator: `${creator}`,
        message: 'active'
    });
})
module.exports = router
