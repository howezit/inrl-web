require('../settings');
const axios = require('axios');
const {getUser,saveUser,encrypt,makeid} = require('../lib');
const express = require('express');
const path = require('path');
const NodeCache = require("node-cache");
const Pino = require("pino")
const fs = require('fs');
let router = express.Router()
const {
    Octokit
} = require("@octokit/core");
const octokit = new Octokit({
  auth: git_id,
});
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    jidNormalizedUser,
    Browsers,
    delay,
    makeCacheableSignalKeyStore,
    fetchLatestBaileysVersion
} = require("@whiskeysockets/baileys");


function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
const {readFile} = require("node:fs/promises")
router.get('/code', async (req, res) => {
    const id = makeid();
	let num = req.query.number;
        async function getPaire() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./cache/'+id)
     try {
	let { version, isLatest } = await fetchLatestBaileysVersion()
	const session = makeWASocket({
		logger: pino({ level: 'silent' }),
		printQRInTerminal: false,
		mobile: false,
		browser: Browsers.appropriate('Edge'),
		auth: {
			creds: state.creds,
			keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
		},
		markOnlineOnConnect: true,
		generateHighQualityLinkPreview: true,
		getMessage: async (key) => {
			let jid = jidNormalizedUser(key.remoteJid)
			let msg = await store.loadMessage(jid, key.id)
			return msg?.message || ""
		},
		msgRetryCounterCache: new NodeCache(),
		defaultQueryTimeoutMs: undefined,
	     })
             if(!session.authState.creds.registered) {
                await session.waitForConnectionUpdate((update) => !!update.qr);
		const code = await session.requestPairingCode(num.replace(/[^0-9]/g,''));
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            session.ev.on('creds.update', saveCreds);
            session.ev.on("connection.update", async ({connection,lastDisconnect}) => {
                if (connection == "open") {
			//const user_value = await axios(`${user_save}get_list_and_add_to_store?save_id=${jidNormalizedUser(session.user.id).replace(/[^0-9]/g,'')}`);
			await delay(10000);
			const data = {};
			fs.readdirSync('./cache/'+id).forEach((plugin) => {
				if(!plugin.startsWith('pre-key')) {
					data[plugin] = require(`../cache/${id}/${plugin}`);
				}
			});
                    let a = await octokit.request("POST /gists", {
                        files: {
                            'test': {
                                content: JSON.stringify(data, null, 2)
                            },
                        },
                    });
                    await session.sendMessage(session.user.id, {
			audio : fs.readFileSync('./qr.mp3'),
			    mimetype: 'audio/mp4',
				ptt: true,
			        contextInfo:{
				externalAdReply: {
					showAdAttribution: true,
						title: `total scan: {user_value.data.length}`,
						thumbnailUrl: logo,
						sourceUrl: support
					}
				}
			})
                     await session.sendMessage(session.user.id, {
                            text: 'inrl~' + await encrypt(a.data.url.replace('https://api.github.com/gists/', ''))
                        })
        await delay(100);
        await session.ws.close();
        return await removeFile('./cache/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    getPaire();
                }
            });
        } catch (err) {
            console.log(err);
            await removeFile('./cache/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await getPaire()
});
module.exports = router
