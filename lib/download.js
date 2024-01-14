const axios = require('axios');
const {JSDOM} = require('jsdom');
const cheerio = require('cheerio');


async function Insta(url){
const { data: first, headers } = await axios.request({
				baseURL: 'https://indown.io',
				method: "GET",
				headers: {
					"User-Agent": "okhttp/4.20.0"
				}
			}).catch((e) => e.response)
			const _$ = cheerio.load(first)
			const _opts = {
				referer: _$("input[name='referer']").attr("value"),
				locale: _$("input[name='locale']").attr("value"),
				_token: _$("input[name='_token']").attr("value"),
				link: url
			}
			const { data } = await axios.request({
				baseURL: 'https://indown.io',
				url: "/download",
				method: "POST",
				headers: {
					"User-Agent": "okhttp/4.20.0",
					cookie: headers["set-cookie"]
				},
				data: new URLSearchParams({ ..._opts })
			}).catch((e) => e.response)
			const $ = cheerio.load(data)
			const _temp= []
			$("#result")
				.find("a[target='_blank']")
				.each((i, e) => {
					const url = $(e).attr("href")
					_temp.push({ url })
				})
			if (_temp.length) {
				return _temp
			} else {
				return [];
            }
}
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

module.exports = {Insta, PinDL};
