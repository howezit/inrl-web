let express = require('express');
let router = express.Router();
const path = require('path');
const fs = require('fs');


router.get('/ack', async (req, res, next) => {
    if(!req.query.code && !fs.existsSync(__path + '/plugin/external.html')) {
    res.sendFile(__path + '/plugin/login.html')
    } else {
        return res.render('index', function (err, html) {
            res.send(html)
        })
        await fs.writeFileSync(__path + '/plugin/external.html','<html><body>hy</body></html>');
        res.redirect('/plugins/list');
    }
})
router.get('/list', async (req, res, next) => {
    if(!fs.existsSync(__path + '/plugin/external.html')) res.redirect('/ack');
    res.sendFile(__path + '/plugin/external.html')
});
module.exports = router
