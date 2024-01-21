require('../settings');
const axios = require('axios');
const {getUser,saveUser,encrypt,makeid} = require('../lib');
const express = require('express');
const path = require('path');
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
    delay
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
const {readFile} = require("node:fs/promises")
router.get('/code', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
	if(!num || !num.replace(/[^0-9]/g,'')) return res.send(new Error('Invalid Input Error'));
	console.log(num.replace(/[^0-9]/g,''));
        async function getPaire() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let session = makeWASocket({
                auth: state,
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)","",""],
             });
	     session.ev.on('creds.update', saveCreds)
             if(!session.authState.creds.registered) {
                await delay(3000);
                        const code = await session.requestPairingCode(num.replace(/[^0-9]/g,''))
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            session.ev.on("connection.update", async ({connection,lastDisconnect}) => {
                if (connection == "open") {
			await delay(10000);
			const data = {};
			fs.readdirSync('./temp/'+id).forEach((plugin) => {
				data[plugin] = require(`../temp/${id}/${plugin}`);
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
						title: `total scan: {total.length}`,
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
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    getPaire();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await getPaire()
});
module.exports = router
