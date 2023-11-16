const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');


router.get('/ack', async (req, res, next) => {
    if(!req.query.code) {
    res.sendFile(__path + '/plugin/login.html')
    } else {
        return await res.redirect('/plugins/list');
    }
})
router.get('/list', async (req, res, next) => {
    //await fs.writeFileSync(__path + '/plugin/external.html','<html><body>hy</body></html>');
    res.sendFile(__path + '/plugin/test.html')
});
module.exports = router
