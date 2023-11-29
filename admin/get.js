require('../settings');
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const {getUser,saveUser} = require('../lib');


router.get('/get_block', async (req, res) => {
    try {
    const {content} = await getUser('block');
    const msg = { status: true, creator, data: content }
    return res.json(msg);
    } catch (e) {
        console.log(e);
       return res.json({status: false, data: e.response.data});
    }
});
router.get('/get_scanners', async (req, res) => {
    try {
    const {content} = await getUser('scanners');
    const msg = { status: true, creator, data: content.split(',').map(aa=>aa+"@s.whatsapp.net")}
    return res.json(msg);
    } catch (e) {
        console.log(e);
       return res.json({status: false, data: e.response.data});
    }
});
router.get('/set_block', async (req, res) => {
  const key = req.query.key, data = req.query.data;
const {sha} = await getUser('block');
  if(!key || !tokens.includes(key)) return res.json({status:false});
    await saveUser('block', {c:data, sha});
        return res.json({status:true});
});

router.get('/get_start_msg', async (req, res) => {
    try {
    const {content} = await getUser('start');
    const msg = { status: true, creator, data: content }
    return res.json(msg);
    } catch (e) {
        console.log(e);
       return res.json({status: false, data: e.response.data});
    }
});
router.get('/set_start_msg', async (req, res) => {
  const key = req.query.key, data = req.query.data;
  const {sha} = await getUser('start');
  if(!key || !tokens.includes(key)) return res.json({status:false});
  await saveUser('start', {c:data, sha});
  return res.json({status:true});
});


router.get('/block', async (req, res, next) => {
   res.sendFile(__path + `/admin/block.html`)
});
router.get('/start', async (req, res) => {
    return res.sendFile(__path + `/admin/start.html`)
});
module.exports = router
