require('../settings');
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const {getUser,saveUser,decrypt} = require('../lib');

router.get('/ads', async (req, res) => {
    const key = req.query.key, type = req.query.type, wa = req.query.wa, msg = req.query.msg, git = req.query.git;
    if(!type) return error400(res);
    const typ = type == 'add' ? 'add' : 'get';
    let data = await getUser('ads');
    if(typ == 'get') {
        if(!key || !tokens.includes(key)) return error400(res);
    return res.json({ status: true, creator, data: data.content.split(',,').map(a=>JSON.parse(a)) });
    } else {
        if(!wa ||!git ||!msg) return error400(res);
    data.content = data.content.split(',,');
    data.content.push(JSON.stringify({wa, git, msg}));
    await saveUser('ads', {c:data.content.join(',,'), sha: data.sha});
    return res.json({status:true});
    }
});

router.get('/get_update', async (req, res) => {
    const key = req.query.key
    if(!key || !tokens.includes(key)) return error400(res);
    const msg = { status: true, creator, data: update }
    return res.json(msg);
});
router.post('/session', async (req, res) => {
   const key = req.body.key, id = req.body.id;
    if(!id || !key || !tokens.includes(key)) return error400(res);
    try {
        const {
            data
        } = await axios(session+decrypt(id)+'/raw')
        return res.json(data);
    } catch (e) {
	console.log(`/POST ${session+decrypt(id)}/raw`);
        return error503(res);
    }
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
	console.log(`/GET ${session+decrypt(id)}/raw`);
        return error503(res);
    }
});
router.get('/get_scanners', async (req, res) => {
    const key = req.query.key
    if(!key || !tokens.includes(key)) return error400(res);
    try {
    const user_value = await axios(`${user_save}get_list_of_users`);
	const msg = { status: true, creator, data: user_value.data }
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
    const msg = { status: true, creator, data: block }
    return res.json(msg);
    } catch (e) {
        console.log(e);
        return error503(res);
    }
});

router.get('/get_start_msg', async (req, res) => {
    const key = req.query.key
    if(!key || !tokens.includes(key)) return error400(res);
    try {
    const msg = { status: true, creator, data: start }
    return res.json(msg);
    } catch (e) {
        console.log(e);
        return error503(res);
    }
});
router.get('/rent', async (req, res) => {
        const array = []
	return res.send(array);
});


module.exports = router
