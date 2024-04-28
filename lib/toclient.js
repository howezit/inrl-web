require('../settings');
const pricingList = `publishing soon🫠`;
const fs = require("fs");
const sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}
const EventEmitter = require("events");
const {
  default: WASocket,
  useMultiFileAuthState,
  Browsers
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const nodemailer = require('nodemailer');
const mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'inrlwabots@gmail.com',
		pass: email_pass
	}
});
async function sendMail(id, otp) {
let mailDetails = {
	from: 'inrlwabots@gmail.com',
	to: id,
	subject: 'VERIFICATION',
	html: `<html>
    <body>
        <h4 align="center">Verification</h4>
        <p>The 6 digit number given below is your verification code, after copying this you can go to the bot number and use verify cmd to verify it, but you can give a limit to the primimum cmds.</p>
        <h3 align="center">copy the Below code</h2><br>
        <font size="30" align="center">${otp}</font>
    </body>
</html>`
};
mailTransporter.sendMail(mailDetails, function(err, data) {
	if (err) return console.log(err);
	return true;
});
}
async function sendApiKeyMail(id, key) {
let mailDetails = {
	from: 'inrlwabots@gmail.com',
	to: id,
	subject: 'APIKEY',
	html: `<html>
    <body>
        <h4 align="center">thanks for using oue service</h4>
        <p>The code below is your apikey, please don't share it with anyone else. The maximum limit of this apikey is 20/day, if you want to update this apikey (send more requests), please contact the <a href="https://wa.me/${api_number}?text=I+need+more+request,+can+you+provide+your+pricing?">admin</a>. *thanks*</p>
        <h3 align="center">copy the Below key</h2><br>
        <font size="30" align="center">${key}</font>
    </body>
</html>`
};
mailTransporter.sendMail(mailDetails, function(err, data) {
	if (err) return false;
	return true;
});
}
class forOtp extends EventEmitter {
    constructor() {
        super();
        //WhatsBotConnect().catch(e => console.log(e));
    }
}
const sendWa = new forOtp();

async function WhatsBotConnect() {
    const {
      state,
      saveCreds
    } = await useMultiFileAuthState('./lib/img/session');
    const logger = pino({
      level: "silent"
    });
    let conn = await WASocket({
      logger,
      browser: Browsers.macOS("Desktop"),
      auth: state,
      generateHighQualityLinkPreview: true
    });
    conn.ev.on("creds.update", saveCreds);
    conn.ev.on("connection.update", async ({connection,lastDisconnect}) => {
      if (connection == "connecting") console.log("– Connecting to WhatsApp...");
      else if (connection == "open") {
	      console.log('connected to whatsapp bot');
	      await conn.sendMessage(conn.user.id, {text:'connected'});
	conn.ev.on("messages.upsert", async (chatUpdate) => {
	const msgs = chatUpdate.messages[0].message?.conversation || chatUpdate.messages[0].message?.extendedTextMessage?.text
	const jid = chatUpdate.messages[0].key.remoteJid;
	if(!msgs || !msgs.includes('I need more request, can you provide your pricing?')) return;
	return await conn.sendMessage(jid,{text: pricingList });
	});
	      sendWa.on('inrl', async ({id,otp}) => {
		      await conn.sendMessage(id, {
			      text: `This is your code *${otp}*, please do not share it with anyone else`
		      })
	      });
	sendWa.on('apikey', async ({id,key}) => {
		      await conn.sendMessage(id, {
			      text: `The code below is your apikey, please don't share it with anyone else. The maximum limit of this apikey is 20/day, if you want to update this apikey (send more requests), please contact the admin. *thanks*`,
			contextInfo:{
				externalAdReply: {
						title: `inrl-api-bot`,
						thumbnailUrl: logo,
						sourceUrl: `https://wa.me/${api_number}?text=I+need+more+request,+can+you+provide+your+pricing?`
					}
				}
		      })
		await conn.sendMessage(id, {
			      text: key
		      })
	      });
      } else if (connection === "close") {
        console.log('disconnected');
        await sleep(10000)
        WhatsBotConnect();
      }
    });
      conn.ws.on('CB:call', async (json) => {
            await conn.rejectCall(call_id, callfrom).catch(e => console.log(e));
    });
    return conn
}
module.exports = {sendMail,sendApiKeyMail,sendWa,mailTransporter};
