require('../settings');
const fs = require("fs");
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
	if (err) return false;
	return true;
});
}
class forOtp extends EventEmitter {
    constructor() {
        super();
        WhatsBotConnect().catch(e => console.log(e));
    }
}
const sendWa = new forOtp();

async function WhatsBotConnect() {
    const {
      state,
      saveCreds
    } = await useMultiFileAuthState('./session');
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
    conn.ev.on("connection.update", async ({
      connection
    }) => {
      if (connection == "connecting") console.log("– Connecting to WhatsApp...");
      else if (connection == "open") {
        sendWa.on("inrl", async ({msg, id}) => {
        await conn.sendMessage(id, {
              text: msg
            })
        });
      } else if (connection === "close") {
        console.log("Connection closed with bot. Please put New Session ID again.");
        await sleep(3000)
        WhatsBotConnect();
      }
    });
      conn.ws.on('CB:call', async (json) => {
            await conn.rejectCall(call_id, callfrom).catch(e => console.log(e));
    });
    return conn
}
module.exports = {sendMail,sendWa};
