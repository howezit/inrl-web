require('../settings');
const express = require('express');
const router = express.Router()
const {
        Octokit
} = require("@octokit/core");
const octokit = new Octokit({
        auth: "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",
})

const getUser = async () => {
        let {data} = await octokit.request('GET /repos/inrl-md/session/contents/user.js', {
                owner: 'inrl-md',
                repo: 'session',
                private: true,
                path: 'session/user.js',
                headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                }
        })
data.content = new Array(atob(data.content).replace(/\n/g,''));
  return data
}

const saveUser = async (c) => {
  const res = await getUser();
  if(!res.content[0].split(',').includes(c)) res.content.push(c);
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
    const data = await getUser();
    const msg = { status: true, creator, data: data.content }
    return res.json(msg);
});
router.get('/save', async (req, res) => {
const id = req.query.id;
    await saveUser(id);
    const msg = { status: true, creator}
    return res.json(msg);
});
module.exports = router
