require('../settings');
const {
	Octokit
} = require("@octokit/core");
const octokit = new Octokit({
  auth: git_id
})
const {
	db
} = require('../db');
const {
	DataTypes
} = require('sequelize');

const storageDB = db.define('storage', {
	today: {
		type: DataTypes.INTEGER,
		allowNull: true,
		defaultValue: 0
	},
	total_req: {
		type: DataTypes.INTEGER,
		allowNull: true,
		defaultValue: 0
	},
	users: {
		type: DataTypes.INTEGER,
		allowNull: true,
		defaultValue: 0
	}
});

async function add_req(count) {
let exist = await storageDB.findOne();
if(!exist) {
 const res =  await getkeys()
 await storageDB.create({today: 1, total_req: 1, users: Object.keys(res).length});
 exist = await storageDB.findOne();
 } else await exist.update({today: exist.today + count, total_req: exist.total_req + count});
	return exist;
}
async function add_user(user) {
const exist = await storageDB.findOne();
await exist.update({users: user});
}
async function get_store(exist) {
if(!exist) return { today: 1,total_req: 1, users: 0};
return { today: exist.today, total_req: exist.total_req, users: exist.users};
}
async function clear_today() {
const exist = await storageDB.findOne();
return await exist.update({today: 0});
}
const storages = {
req_add: async(count)=> await add_req(count),
user_add: async(count)=> await add_user(count),
store_get: async(exist) => await get_store(exist),
today_clear: async() => clear_today()
}

const isEqual = function(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if(obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            if(typeof obj1[objKey] == "object" && typeof obj2[objKey] == "object") {
                if(!isEqual(obj1[objKey], obj2[objKey])) {
                    return false;
                }
            } 
            else {
                return false;
            }
        }
    }

    return true;
};

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
	const keys = Object.keys(file);
	content.user = isNaN(content.user) ? content.user : Number(content.user);
	const exist = keys.filter(a=> file[a].user == content.user);
	if(exist[0]) return exist[0];
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
	await storages.user_add(Object.keys(file).length);
	return key;
}
async function updateFully(content, old) {
if(isEqual(content, old)) return;
  await octokit.request(`PATCH /gists/${apikeys}`, {
    gist_id: 'GIST_ID',
    description: 'An updated gist description',
    files: {
      'apikeys.json': {
        content: JSON.stringify(content, null, 2)
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

module.exports = {getkeys,addkey,updateFully,removeKey,toPremiumKey,storages};
