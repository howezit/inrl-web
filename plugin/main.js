let express = require('express');
let router = express.Router();
const path = require('path');
const fs = require('fs');


router.get('/login_or_sign', async (req, res, next) => {
    if(!req.query.code) {
    res.sendFile(__path + '/plugin/login.html')
    } else {
        await fs.writeFileSync(__path + '/plugin/external.html','<html><body>hy</body></html>');
        res.sendFile(__path + '/plugin/external.html')
    }
})
module.exports = router
