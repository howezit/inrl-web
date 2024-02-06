let express = require('express');
let router = express.Router();
const {getBuffer,device,generateRandomString} = require('../../lib');
const urls = ["https://i.imgur.com/qyvmAzS.jpeg"];
const wagrp = "https://chat.whatsapp.com/F6VWuK677vB1kxXbV8m5II";
const koyeb = "https://app.koyeb.com/apps/deploy?type=git&repository=github.com/inrl-official/inrl-bot-md&branch=master&name=inrl-md&builder=dockerfile&env[REACT]=command&env[SESSION_ID]=&env[DATABASE_URL]=&env[BOT_INFO]=inrl;md;https://graph.org/file/f23f574f13baaf790f250.jpg&env[PREFIX]=!&env[KOYEB_API]=&env[AUDIO_DATA]=INRL;MD;https://graph.org/file/76a1d2fe74ba5e5643e16.jpg&env[WARN_COUNT]=3&env[STATUS_VIEW]=false&env[STICKER_DATA]=INRL;MD&env[WORK_TYPE]=private&env[CHATBOT]=pm&env[SUDO]=";
const  parsePhoneNumber  = require("awesome-phonenumber");
const axios = require("axios");
const railway = "https://railway.app/template/FJf4CM?referralCode=eA6k0O";

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
