require('../settings');
const axios = require('axios');
const QRCode = require('qrcode');
const express = require('express');
const {getUser,saveUser,encrypt,makeid} = require('../lib');
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
					await res.end(await QRCode.toBuffer(qr, {
							errorCorrectionLevel: "H",
							width: 1200,
							color: {
								dark: '#1c373b', // black dots
								light: '#FFFFFF' // white background
							}}));
				}
				if (connection == "open") {
					await delay(15000);
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
					let urlll = a.data.url.replace('https://api.github.com/gists/', '');
					let encryptedPlainText = encrypt(urlll);
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
