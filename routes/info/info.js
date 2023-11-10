let express = require('express');
let router = express.Router();
const {getBuffer,device,generateRandomString} = require('../../lib');
const urls = ["https://i.imgur.com/qyvmAzS.jpeg"];
const wagrp = "https://chat.whatsapp.com/F6VWuK677vB1kxXbV8m5II";
const koyeb = "https://app.koyeb.com/apps/deploy?type=docker&image=quay.io/inrlwabot/inrl-bot:latest&name=inrl-md&ports=3000;http;/&env[KOYEB_API_KEY]=&env[SESSION_ID]=your_session_here&env[PORT]=3000&env[MONGO_URL]=";
const  parsePhoneNumber  = require("awesome-phonenumber");
const axios = require("axios");
const t = require('truecallerjs');
const railway = "https://railway.app/template/yfpKNM?referralCode=ERZ4-2";

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
router.get('/truecaller/login', async (req, res, next) => {
if(!req.query.number) return res.json({message : false})   
t.login("+"+req.query.number).then(t=>{
	if(t.requestId) {
  return res.json({message :t.requestId}) 
	} else {
		return res.json({message : false})
	}}).catch(e=>{return res.json({message : false})});
})

router.get('/truecaller/otp', async (req, res, next) => {
	let number = req.query.number,
		otp = req.query.otp,
		key = req.query.key;
	if (!number || !otp || !key) return res.json({
		message: false
	})
	const pn = parsePhoneNumber("+"+number);
	t.verifyOtp("+"+number, {requestId:key}, otp).then(t=>{
if (!t.installationId) return res.json({
	message: false
})
return res.json({
	message: `${t.installationId}`
})
}).catch((e) =>{
	console.log(e);
	return res.json({
		message: false
	})
    })
})
module.exports = router
