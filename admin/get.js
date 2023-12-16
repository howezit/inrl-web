require('../settings');
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const {decrypt} = require('../encrypt');
const {getUser,saveUser} = require('../lib');

router.get('/ads', async (req, res) => {
    const key = req.query.key, type = req.query.key, phone = req.query.phone, msg = req.query.msg, git = req.query.git;
    if(!type) return error400(res);
    const typ = type == 'add' ? 'add' : 'get';
    if(typ == 'get' && (!key || !tokens.includes(key))) return error400(res);
    let data = await getUser('ads');
    if(typ == 'get') {
    return res.json({ status: true, creator, data: data.content.split(',,').map(a=>JSON.parse(a)) });
    } else {
        if(!phone ||!git ||!msg) return error400(res);
    data.content = data.content.split(',,');
    data.content.push(JSON.stringify({phone, git, msg}));
    await saveUser('ads', {c:data.content.join(',,'), sha: data.sha});
    return res.json({status:true});
    }
});

router.get('/get_update', async (req, res) => {
    const key = req.query.key
    if(!key || !tokens.includes(key)) return error400(res);
    const data = await getUser('update');
    const msg = { status: true, creator, data: JSON.parse(data.content) }
    return res.json(msg);
});
router.get('/session', async (req, res) => {
    const key = req.query.key, id = req.query.id;
    if(!id || !key || !tokens.includes(key)) return error400(res);
    try {
        const {
            data
        } = await axios(session+decrypt(id)+'/raw')
        return res.json(data);
    } catch (e) {
        return error503(res);
    }
});
router.get('/get_scanners', async (req, res) => {
    const key = req.query.key
    if(!key || !tokens.includes(key)) return error400(res);
    try {
    const {content} = await getUser('scanners');
    const msg = { status: true, creator, data: content.split(',').map(aa=>aa+"@s.whatsapp.net")}
    return res.json(msg);
    } catch (e) {
        console.log(e);
        return error503(res);
    }
});
router.get('/get_block', async (req, res) => {
    const key = req.query.key
    if(!key || !tokens.includes(key)) return error400(res);
    try {
    const {content} = await getUser('block');
    const msg = { status: true, creator, data: content.split(',') }
    return res.json(msg);
    } catch (e) {
        console.log(e);
        return error503(res);
    }
});
router.get('/set_block', async (req, res) => {
  const key = req.query.key, data = req.query.data;
    if(!key || !tokens.includes(key)) return error400(res);
    const {sha} = await getUser('block');
    await saveUser('block', {c:data, sha});
        return res.json({status:true});
});

router.get('/get_start_msg', async (req, res) => {
    const key = req.query.key
    if(!key || !tokens.includes(key)) return error400(res);
    try {
    const {content} = await getUser('start');
    const msg = { status: true, creator, data: content }
    return res.json(msg);
    } catch (e) {
        console.log(e);
        return error503(res);
    }
});
router.get('/set_start_msg', async (req, res) => {
  const key = req.query.key, data = req.query.data;
  if(!key || !tokens.includes(key)) return error400(res);
  const {sha} = await getUser('start');
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
