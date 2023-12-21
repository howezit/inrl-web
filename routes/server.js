require('../settings');
const axios = require('axios');
const {
	encrypt,
	makeid
} = require('../encrypt');
const QRLogo = require('qr-with-logo');
const express = require('express');
const {getUser,saveUser} = require('../lib');
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
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/scan', async (req, res) => {
	const id = makeid();
	async function Getqr() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let session = makeWASocket({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			session.ev.on('creds.update', saveCreds)
			session.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) {
					await QRLogo.generateQRWithLogo(JSON.stringify(qr).replace(/"/g, ''),
						"routes/logo.png", {
							errorCorrectionLevel: "H",
							width: 1200,
							color: {
								dark: '#1c373b', // black dots
								light: '#FFFFFF' // white background
							}
						}, "Base64", "qrlogo.png",
						async function(b64) {
							await res.end(Buffer.from(b64, 'base64'));
						})
				}
				if (connection == "open") {
					const users = await getUser('scanners');
					const total = users.content.split(',') || [users];
					if(!total.includes(jidNormalizedUser(session.user.id).split('@')[0])) {
					total.push(jidNormalizedUser(session.user.id).split('@')[0])
					await saveUser('scanners', {c:total.join(','), sha: users.sha});
								  }
					await delay(15000);
					let data = await readFile('./temp/' + id + '/creds.json', 'utf-8')
					let a = await octokit.request("POST /gists", {
						files: {
							'test': {
								content: data
							},
						},
					});
					let urlll = a.data.url.replace('https://api.github.com/gists/', '');
					let encryptedPlainText = encrypt(urlll);
					await session.sendMessage(session.user.id,
 { text: "*Hello, dear*\n```These bots can be designed to provide information, answer questions, perform tasks, or even entertain users.\nSo please Not use This Bot for any Illegal Activities, and not try to affiliate whatsapp Terms & Conditions,\nwe are not response for your offensive activities```\n_*any error, dout, feature, suggests?*_\n```join our official support group```\n*want to be get our interesting plugins?! _"+url+"/plugins/list_*\n*star repo if you like inrl-md! _https://github.com/inrl-official/inrl-bot-md_*\n*follow for my updates?! _https://github.com/inrl-official?tab=repositories_*\n*web: _https://inrl-web.onrender.com/_*",
 contextInfo:{
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": `total scan: ${total.length}`,
 "previewType": "PHOTO",
"thumbnailUrl": `https://i.ibb.co/HzVR1sb/74d4f9fcee38.png`,
"sourceUrl": support}}})
					await session.sendMessage(session.user.id, {
						text: 'inrl~' + encryptedPlainText
					})
					await delay(100);
					await session.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					Getqr();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await Getqr()
	//return //'qr.png', { root: "./" });
});
module.exports = router
