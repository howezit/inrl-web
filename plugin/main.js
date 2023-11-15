let express = require('express');
let router = express.Router();
const path = require('path');
const fs = require('fs');


router.get('/ack', async (req, res, next) => {
    if(!req.query.code) {
    res.sendFile(__path + '/plugin/login.html')
    } else {
        await fs.writeFileSync(__path + '/plugin/external.html','<html><body>hy</body></html>');
        res.redirect('/plugins/list');
    }
})
router.get('/list', async (req, res, next) => {
    res.sendFile(__path + '/plugin/external.html')
});
module.exports = router
