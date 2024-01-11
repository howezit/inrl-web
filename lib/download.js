const snapsave = require("snapsave-downloader-itj")
const axios = require('axios');
const {JSDOM} = require('jsdom');


async function PinDL(url){
const { hostname, pathname } = new URL(url);
    const path = pathname.replace("/sent/", "");
    const finalUrl = `https://${hostname}${path}`;
const {data} = await axios(finalUrl);
  let outUrl;
    let type = "video";
    try {
        const video = new JSDOM(data).window.document.getElementsByTagName(
            "video"
        )[0].src;
        outUrl = video.replace("/hls/", "/720p/").replace(".m3u8", ".mp4");
    } catch (_) {
        outUrl = new JSDOM(data).window.document.getElementsByTagName(
            "img"
        )[0].src;
        type = "image";
    }

    const title = new JSDOM(data).window.document.querySelector('div[data-test-id="pinTitle"] h1').innerHTML;
    var desc;
    try {
        // Description may not be available
        desc = new JSDOM(body).window.document.querySelector('div[data-test-id="truncated-description"] div div span').innerHTML;
    } catch (_) {}
  return({
        url: outUrl,
        title: url.match("pin.it") ? "Pinterest shorten url" : "Pinterest full url",
        type: type,
        titleURL: title,
        decsURL: desc
  })
}

async function Insta(url) {
 const {data} = await snapsave(url);
  return data;
}

module.exports = {Insta, PinDL};
