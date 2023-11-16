let express = require('express');
let router = express.Router();
const path = require('path');
const fs = require('fs');


router.get('/ack', async (req, res, next) => {
    if(!req.query.code && !fs.existsSync(__path + '/plugin/external.html')) {
    res.sendFile(__path + '/plugin/login.html')
    } else {
        await fs.writeFileSync(__path + '/plugin/external.html','<html><body>hy</body></html>');
        return await res.redirect('/plugins/list');
    }
})
router.get('/list', async (req, res, next) => {
    if(!fs.existsSync(__path + '/plugin/external.html')) {
        return res.render('/plugins/emdi', function (err, html) {
            res.send(html)
        })
        res.redirect('/plugin/ack');
    }   
    res.sendFile(__path + '/plugin/external.html')
});
module.exports = router
