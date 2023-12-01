require('../settings');
const express = require('express');
const router = express.Router()
const {getUser,saveUser} = require('../lib');

router.get('/get', async (req, res) => {
    const data = await getUser('user');
    const msg = { status: true, creator, data: data.content }
    return res.json(msg);
});
router.get('/save', async (req, res) => {
        const id = req.query.id;
        const data = await getUser('user');
    if(data.content[0].split(',').includes(id)) return res.json({status:false});
    data.content.push(id);
    await saveUser('user', {c: data.content, sha:data.sha});
    const msg = { status: true, creator}
    return res.json(msg);
});
module.exports = router
