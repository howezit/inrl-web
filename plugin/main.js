const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const {getUser,saveUser} = require('./func');

router.get('/ack', async (req, res, next) => {
    if(!req.query.code) {
    res.sendFile(__path + '/plugin/login.html')
    } else {
        const code = req.query.code;
        const d = await axios.post(`https://github.com/login/oauth/access_token?client_secret=6d987ce364013759ce444100dbc6fab87526a400&client_id=57cbea1b63398c7c37c0&code=${code}`);
        if(!d.data.access_token) return res.send(d.data);
        //const token = await axios.get('https://api.github.com/user', { 'Authorization': `Bearer ${d.data.access_token}` });
        //if(!token.data.) return res.send(token.data);
        const msg = await saveUser('sessions', d.data.access_token);
        return await res.redirect('/plugins/list');
    }
})
router.get('/list', async (req, res, next) => {
    await fs.writeFileSync(__path + '/plugin/external.html','<html><body>hy</body></html>');
    res.sendFile(__path + '/plugin/test.html')
});
module.exports = router
