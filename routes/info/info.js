let express = require('express');
let router = express.Router();
const {getBuffer,device,generateRandomString} = require('../../lib');
const urls = ["https://i.imgur.com/qyvmAzS.jpeg"];
const wagrp = "https://chat.whatsapp.com/F6VWuK677vB1kxXbV8m5II";
const koyeb = "https://app.koyeb.com/apps/deploy?type=docker&image=quay.io/inrlwabot/inrl-bot:latest&name=inrl-md&ports=3000;http;/&env[KOYEB_API_KEY]=&env[SESSION_ID]=your_session_here&env[PORT]=3000&env[DATABASE_URL]=";
const  parsePhoneNumber  = require("awesome-phonenumber");
const axios = require("axios");
const railway = "https://github.com/inrl-official/inrl-bot-md";

router.get('/bot/status.jpeg', async (req, res, next) => {
let url = urls[Math.floor(Math.random() * urls.length)]
const buffer = await getBuffer(url);
res.set({'Content-Type': 'image/jpeg'})
return await res.send(buffer)
})
router.get('/wagroup', async (req, res, next) => {
return await res.redirect(wagrp);
})
router.get('/deploy/koyeb', async (req, res, next) => {
return await res.redirect(koyeb);
})
router.get('/deploy/railway', async (req, res, next) => {
return await res.redirect(railway);
})

module.exports = router
