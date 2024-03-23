require('../settings');
__path = process.cwd()
const express = require('express');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router()
const {mailTransporter} = require('../lib');


router.get('/signup', async (req, res, next) => {
	res.sendFile(__path + '/view/loginapi.html')
})
router.get('/dashboard', async (req, res, next) => {
res.sendFile(__path + '/view/apidashboard.html')
})

router.post('/mail', async (req, res)=>{
	const {mail, host} = req.body;
	if(!mail || !host) return error400(res);
	
mailTransporter.sendMail({
      from: 'inrlwabots@gmail.com',
      to: mail,
      subject: 'VERIFICATION',
      html: `<html>
        <body>
            <h4 align="center">Verification</h4>
            <p>The 6 digit number given below is your verification code, after copying this you can go to the bot number and use verify cmd to verify it, but you can give a limit to the primimum cmds.</p>
            <h3 align="center">copy the Below code</h2><br>
            <a size="30" href="https://${host}/${otp} align="center">Login</font>
        </body>
    </html>`},async(err, data) => {
	if (err) return await res.json({
            status: false,
            creator,
            message: err
        });
	return await res.json({
            status: true,
            creator,
            message: 'tried'
        });
});
});
router.get('/phone', async (req, res, next) => {
    let id = req.query.number;
    if (!id) return await res.json({
        status: false,
        creator: `${creator}`,
        message: "need  text  to get ttp"
    });
    try {
        const perfix = phone("+" + id);
        return await res.json({
            status: true,
            creator: `${creator}`,
            result: perfix.countryIso2.toString()
        });
    } catch (e) {
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need undefined erro found"
        });
    }
});
router.get('/zone', async (req, res, next) => {
    let id = req.query.code;
    if (!id) return await res.json({
        status: false,
        creator: `${creator}`,
        message: "need  text  to get ttp"
    });
    try {
        const country = ct.getCountry(id);
        return await res.json({
            status: true,
            creator: `${creator}`,
            result: country.timezones[0].toString()
        });
    } catch (e) {
        return await res.json({
            status: false,
            creator: `${creator}`,
            message: "need undefined erro found"
        });
    }
});


module.exports = router
