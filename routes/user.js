require('../settings');
const express = require('express');
const router = express.Router()
const {getUser,saveUser} = require('../lib');

const saveUser = async (c) => {
  const res = await getUser();
  if(res.content[0].split(',').includes(c)) return true;
        res.content.push(c);
        const data = await octokit.request('PUT /repos/inrl-md/session/contents/user.js', {
                owner: 'inrl-md',
                repo: 'session',
                private: true,
                path: 'session/user.js',
                message: 'my commit message',
                committer: {
                        name: 'inrl-md',
                        email: 'inrlofc@github.com'
                },
                content: btoa(res.content.toString()),
                sha: res.sha,
                headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                }
        })
        return 'saved'
}

router.get('/get', async (req, res) => {
    const data = await getUser('user');
    const msg = { status: true, creator, data: data.content }
    return res.json(msg);
});
router.get('/save', async (req, res) => {
        const id = req.query.id;
        const data = await getUser('user');
    await saveUser('user', {c:id, sha:data.sha});
    const msg = { status: true, creator}
    return res.json(msg);
});
module.exports = router
