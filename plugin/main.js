const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');


router.get('/ack', async (req, res, next) => {
    if(!req.query.code && !fs.existsSync(__path + '/plugin/external.html')) {
    res.sendFile(__path + '/plugin/login.html')
    } else {
        await fs.writeFileSync(__path + '/plugin/external.html','<html><body>hy</body></html>');
        await new Promise(resolve => setTimeout(resolve, 200));
        return await res.redirect('/plugins/list');
    }
})
router.get('/list', async (req, res, next) => {
    if(!fs.existsSync(__path + '/plugin/external.html')) res.redirect('/plugins/ack');
    res.sendFile(__path + '/plugin/external.html')
});
module.exports = router
