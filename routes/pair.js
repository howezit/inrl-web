require('../settings');
const axios = require('axios');
const {
    encrypt,
    makeid
} = require('../encrypt');
const {getUser,saveUser} = require('../lib');
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
    delay,
    makeCacheableSignalKeyStore
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    const files = fs.readdirSync‎(FilePath);
    files.map(a=>fs.unlinkSync(FilePath+'/'+a));
 }; 
const {readFile} = require("node:fs/promises")
router.get('/code', async (req, res) => {
    const id = file();
    let num = req.query.number;
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let session = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)","",""],
             });
             if(!session.authState.creds.registered) {
                await delay(2500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await session.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.json({code});
                     }
                 }
	     console.log('😶😶'+fs.existsSync('./temp/'+id))
            session.ev.on('creds.update', saveCreds)
            session.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
			const {key} = await session.sendMessage(session.user.id, {
				text: 'successfully established a connection'
                        });
			console.log('Connection Opened');
                    const users = await getUser('scanners');
					const total = users.content.split(',') || [users];
					if(!total.includes(jidNormalizedUser(session.user.id).split('@')[0])) {
					total.push(jidNormalizedUser(session.user.id).split('@')[0])
					await saveUser('scanners', {c:total.join(','), sha: users.sha});
                    }
                await delay(12000);
                    let data = await readFile('./temp/'+id+'/creds.json','utf-8')
                    let a = await octokit.request("POST /gists", {
                        files: {
                            'test': {
                                content: data
                           },
                        },
                    });
                    await session.sendMessage(session.user.id,
 { text: "*Hello, dear*\n```These bots can be designed to provide information, answer questions, perform tasks, or even entertain users.\nSo please Not use This Bot for any Illegal Activities, and not try to affiliate whatsapp Terms & Conditions,\nwe are not response for your offensive activities```\n_*any error, dout, feature, suggests?*_\n```join our official support group```\n*want to be get our interesting plugins?! _https://github.com/inrl-official/externel-plugins_*\n*star repo if you like inrl-md! _https://github.com/inrl-official/inrl-bot-md_*\n*follow for my updates?! _https://github.com/inrl-official?tab=repositories_*\n*web: _https://inrl-web.onrender.com/_*\n*support by something?! _https://www.buymeacoffee.com/inrl_*",
 contextInfo:{
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `total scan: ${total.length}`,
 "previewType": "PHOTO",
"thumbnailUrl": `https://i.ibb.co/HzVR1sb/74d4f9fcee38.png`,
"sourceUrl": `https://chat.whatsapp.com/F6VWuK677vB1kxXbV8m5II`}}})
                     await session.sendMessage(session.user.id, {
                            text: 'inrl~' + await encrypt(a.data.url.replace('https://api.github.com/gists/', '')), edit: key
                        })
        await delay(100);
        await session.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
			await removeFile('./temp/'+id);
         if(!res.headersSent){
            return await res.send({code:"Service Unavailable"});
	 }
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            return await res.send({code:"Service Unavailable"});
         }
     }
});
module.exports = router
