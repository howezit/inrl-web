require('../settings');
__path = process.cwd()
let { runtime, fetchJson } = require('../lib');
let express = require('express');
let router = express.Router();
const path = require('path');


router.get('/', async (req, res, next) => {
res.sendFile(__path + '/view/home.html')
})
router.get('/ads.txt', async (req, res, next) => {
res.sendFile(__path + '/ads.txt')
})
router.get('/git/fork', async (req, res, next) => {
res.redirect("https://github.com/inrl-official/inrl-bot-md/fork")
})

router.get('/select', async (req, res, next) => {
res.sendFile(__path + '/details/select.html')
})
router.get('/session/qr', async (req, res, next) => {
    res.sendFile(__path + '/details/session/qr.html')
})
router.get('/session/code', async (req, res, next) => {
    res.sendFile(__path + '/details/session/code.html')
})
router.get('/session/deploy', async (req, res, next) => {
    res.sendFile(__path + '/details/session/deploy.html')
})
router.get('/docs', (req, res) => {
    res.sendFile(__path + '/view/docs.html')
})
router.get('/support/donate', (req, res) => {
    res.sendFile(__path + '/view/support.html')
})
router.get('/deploy/heroku', (req, res) => {
    res.sendFile(__path + '/view/heroku.html')
})
router.get('/deploy/termux', (req, res) => {
    res.sendFile(__path + '/view/termux.html')
})
router.get('/viwe/friendpage', (req, res) => {
    res.sendFile(__path + '/view/frendpage.html')
})
router.get('/viwe/contact', (req, res) => {
    res.sendFile(__path + '/view/contact.html')
})
router.get('/viwe/getqr', (req, res) => {
    res.sendFile(__path + '/view/getqr.html')
})
router.get('/viwe/service', (req, res) => {
    res.sendFile(__path + '/view/service.html')
})
//file uplad

router.get('/file/upload', (req, res) => {
    res.sendFile('/routes/post/imgur.html',{root:"."})
})
// api detiles
router.get('/details/truecaller', (req, res) => {
    res.sendFile(__path + '/details/truecaller.html')
})
//pair
router.get('/session/pair', (req, res) => {
    res.sendFile(__path + '/details/pair.html')
})
router.get('/info/bot/vars', async (req, res, next) => {
    res.sendFile(__path + '/routes/info/bot/vars.html')
})
/*
router.get('/sendmail', (req, res) => {
const id = req.query.email,
           subject = req.query.subject,
           otp = req.query.otp;
        if(!id||!subject||!otp) return res.json({id, subject, otp});
const nodemailer = require('nodemailer');
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'inrlwabots@gmail.com',
        pass: 'eedcdakinjuwvzcp'
    }
});
let mailDetails = {
    from: 'inrlwabots@gmail.com',
    to: id,
    subject:subject,
    html:`<html>
    <body>
        <h4 align="center">Verification</h4>
        <p>The 6 digit number given below is your verification code, after copying this you can go to the bot number and use verify cmd to verify it, but you can give a limit to the primimum cmds.</p>
        <h3 align="center">copy the Below code</h2><br>
        <font size="30" align="center">${otp}</font>
    </body>
</html>`
};
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs', err);
        return res.json({status:'failed'});
    } else {
        console.log('Email sent successfully');
        return res.json({status:'success'});
    }
});
});
*/
module.exports = router
