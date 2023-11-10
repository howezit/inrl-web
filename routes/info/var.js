let express = require('express');
let router = express.Router();
const path = require('path');

router.get('/alive', async (req, res, next) => {
    res.sendFile(__path + '/routes/info/bot/alive.html')
})
router.get('/antilink', async (req, res, next) => {
    res.sendFile(__path + '/routes/info/bot/antilink.html')
})
router.get('/pdm', async (req, res, next) => {
    res.sendFile(__path + '/routes/info/bot/antilink.html')
})
router.get('/goodbye', async (req, res, next) => {
    res.sendFile(__path + '/routes/info/bot/goodbye.html')
})
router.get('/mention', async (req, res, next) => {
    res.sendFile(__path + '/routes/info/bot/mention.html')
})
router.get('/welcome', async (req, res, next) => {
    res.sendFile(__path + '/routes/info/bot/welcome.html')
})
module.exports = router
