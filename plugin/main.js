const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const {getUser,saveUser} = require('./func');
const {Octokit} = require("@octokit/core");
const {makeid} = require('../encrypt');


router.get('/ack', async (req, res, next) => {
    if(!req.query.code) {
    res.sendFile(__path + '/plugin/login.html')
    } else {
        const id = makeid();
        const code = req.query.code;
        const d = await axios.post(`https://github.com/login/oauth/access_token?client_secret=6d987ce364013759ce444100dbc6fab87526a400&client_id=57cbea1b63398c7c37c0&code=${code}`);
        if(!d.data.toString().includes('access_token')) return res.json({msg:d.data});
        const data = d.data.toString().replace('access_token=','').split('&');
        const outp = await getUser('sessions');
        const octokit = new Octokit({auth: data[0]});
        const output = await octokit.request('GET /user', {});
        await fs.writeFileSync(__path + `/plugin/store/${id}.html`,`<html><body><p>${output.data.login}</p><br><img src="${output.data.avatar_url}"></body></html>`);
        const msg = await saveUser('sessions', {code: data[0], sha: outp.sha});
        return await res.redirect(`/plugins/list?id=${id}`);
    }
})
router.get('/list', async (req, res, next) => {
    if(!req.query.id) return await res.redirect('/plugins/ack');
    if(!fs.existsSync(`./plugin/store/${req.query.id}.html`)) return await res.redirect('/plugins/ack');
    res.sendFile(__path + `/plugin/store/${req.query.id}.html`)
});
module.exports = router
