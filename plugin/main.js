require('../settings');
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const htmlfile = require('./make');
const axios = require('axios');
const {getUser,saveUser,makeid} = require('../lib');
const {Octokit} = require("@octokit/core");


router.get('/get', async (req, res) => {
    const key = req.query.key
    if(!key || !tokens.includes(key)) return error400(res);
    const data = await getUser('plugins');
    const msg = { status: true, creator, data: data.content.split(',,').map(a=>JSON.parse(a)) }
    return res.json(msg);
});
router.get('/save', async (req, res) => {
    const data = await getUser('plugins');
    const id = req.query.id;
    const p = req.query.p;
    const d = data.content.split(',,').map(a=>JSON.parse(a));
       if(!d.filter(a=>a.cmd==p)[0].like.includes(id)) {
           d.filter(a=>a.cmd==p)[0].like.push(id);
           await saveUser('plugins', {c:d.map(a=>JSON.stringify(a,null, 2)).join(',,'), sha:data.sha});
           return res.json({status:'liked'});
       } else {
           d.filter(a=>a.cmd==p)[0].like = d.filter(a=>a.cmd==p)[0].like.filter(a=> a!=id)
           await saveUser('plugins', {c:d.map(a=>JSON.stringify(a,null, 2)).join(',,'), sha:data.sha});
           return res.json({status:'disliked'});
       }
});
router.get('/ack', async (req, res, next) => {
    if(!req.query.code) {
    res.sendFile(__path + '/plugin/login.html')
    } else {
        const id = makeid();
        const code = req.query.code;
        const d = await axios.post(`https://github.com/login/oauth/access_token?client_secret=6d987ce364013759ce444100dbc6fab87526a400&client_id=57cbea1b63398c7c37c0&code=${code}`);
        if(!d.data.toString().includes('access_token')) return res.json({msg:d.data});
        const data = d.data.toString().replace('access_token=','').split('&');
        const octokit = new Octokit({auth: data[0]});
        const output = await octokit.request('GET /user', {});
        const outp = (await axios(`${url}/plugins/get?key=${tokens[0]}`)).data;
        const json = outp.data.map(a => `<div class="text-box" id="${a.cmd}">
  <i class="fa fa-heart like-icon" style="color: ${a.like.includes(output.data.login)?'red':'white'}" onclick="ulike('${a.cmd}','${output.data.login}')"></i>
  <div class="like-count">${a.like.length}</div>
  <div class="text-maker"><span onclick="window.location.href='${a.url}';">${a.cmd}</span><span class="by"> by </span><span class="dev" onclick="window.location.href='${a.creator.u}';">${a.creator.n}</span></div>
  <div id="description">${a.desc}</div>
  <button class="copy-button" onclick="copyText('${a.url}','${a.cmd}')">Copy</button>
</div>`);
        await fs.writeFileSync(__path + `/public/${id}.html`, htmlfile(output,json));
        return await res.redirect(`/plugins/list?id=${id}`);
    }
})
router.get('/list', async (req, res, next) => {
    if(!req.query.id) return await res.redirect('/plugins/ack');
    if(!fs.existsSync(`./public/${req.query.id}.html`)) return await res.redirect('/plugins/ack');
    res.sendFile(__path + `/public/${req.query.id}.html`)
});
router.get('/utf', async (req, res, next) => {
   res.sendFile(__path + `/public/test.html`)
});
router.get('/plugins', async (req, res) => {
    return res.sendFile(__path + `/public/likes.html`)
});
module.exports = router
