require('../settings');
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const {getUser,saveUser} = require('./func');
const block = `https://raw.githubusercontent.com/inrl-md/session/main/block.js?token=GHSAT0AAAAAACKP3FSKT5PSA7X4AR3G4U2AZK6K4AQ`; ; 


router.get('/get_block', async (req, res) => {
    const {data} = await axios(block);
    const msg = { status: true, creator, data }
    return res.json(msg);
});
router.get('/set_block', async (req, res) => {
  const key = req.query.key, data = req.query.data;
const {sha} = await getUser('block');
  if(!key || !tokens.includes(key)) return res.json({status:false});
    await saveUser('block', {c:data, sha});
        return res.json({status:true});
});


router.get('/block', async (req, res, next) => {
   res.sendFile(__path + `/admin/block.html`)
});
router.get('/plugins', async (req, res) => {
    return res.sendFile(__path + `/public/likes.html`)
});
module.exports = router
