const fs = require("fs");
const EventEmitter = require("events");
const {
  default: WASocket,
  useMultiFileAuthState,
  Browsers
} = require("@whiskeysockets/baileys");
const pino = require("pino");;
console.log('await few secounds to start Bot');

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
        io.on("inrl", async ({msg, id}) => {
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

module.exports = {sendWa}
