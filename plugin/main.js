let express = require('express');
let router = express.Router();
const path = require('path');

router.get('/login_or_sign', async (req, res, next) => {
    if(!req.query.code) {
    res.sendFile(__path + '/plugin/login.html')
    } else {
    res.json({status:"working on it"});
    }
})
module.exports = router
