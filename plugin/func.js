require('../settings');
const {
        Octokit
} = require("@octokit/core");
const octokit = new Octokit({
        auth: git_id,
})

const getUser = async (p) => {
        let {data} = await octokit.request(`GET /repos/inrl-md/session/contents/${p}.js`, {
                owner: 'inrl-md',
                repo: 'session',
                private: true,
                path: `session/${p}.js`,
                headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                }
        })
  data.content = atob(data.content).replace(/\n/g,'')
  return data
}

const saveUser = async (p,c = {}) => {
        const data = await octokit.request(`PUT /repos/inrl-md/session/contents/${p}.js`, {
                owner: 'inrl-md',
                repo: 'session',
                private: true,
                path: `session/${p}.js`,
                message: 'my commit message',
                committer: {
                        name: 'inrl-md',
                        email: 'inrlofc@github.com'
                },
                content: btoa(c.c),
                sha: c.sha,
                headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                }
        })
        return 'saved'
}

module.exports = {getUser,saveUser};
