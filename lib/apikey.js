require('../settings');
const {
	Octokit
} = require("@octokit/core");
const octokit = new Octokit({
  auth: git_id
})
async function getkeys(){
const {data} = await octokit.request(`GET /gists/${apikeys}`, {
  gist_id: 'GIST_ID',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
  const file = data.files['apikeys.json']
  return JSON.parse(file.content);
}

async function addkey(key,content) {
  const file = await getkeys();
  file[key] = content;
  await octokit.request(`PATCH /gists/${apikeys}`, {
    gist_id: 'GIST_ID',
    description: 'An updated gist description',
    files: {
      'apikeys.json': {
        content: JSON.stringify(file, null, 2)
      }
    },
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}
async function removeKey(key) {
const file = await getkeys();
delete file[key];
  await octokit.request(`PATCH /gists/${apikeys}`, {
    gist_id: 'GIST_ID',
    description: 'An updated gist description',
    files: {
      'apikeys.json': {
        content: JSON.stringify(file, null, 2)
      }
    },
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}
async function toPremiumKey(key) {
const file = await getkeys();
file[key].premium = true;
  await octokit.request(`PATCH /gists/${apikeys}`, {
    gist_id: 'GIST_ID',
    description: 'An updated gist description',
    files: {
      'apikeys.json': {
        content: JSON.stringify(file, null, 2)
      }
    },
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}

module.exports = {getkeys,addkey,removeKey,toPremiumKey};
