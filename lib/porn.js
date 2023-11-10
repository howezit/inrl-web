const { default: axios, isAxiosError } = require("axios");
const cheerio = require("cheerio");

function xvideosSearch(query) {
		return new Promise(async (resolve, reject) => {
			await axios.request(`https://www.xvideos.com/?k=${query}&p=${Math.floor(Math.random() * 9) + 1}`, {
				method: "GET"
			}).then(async result => {
				if (isAxiosError()) throw ('axios error');
				const $ = cheerio.load(result.data, {
					xmlMode: false
				});
				let title = new Array();
				let duration = new Array();
				let quality = new Array();
				let url = new Array();
				let thumb = new Array();
				let hasil = new Array();

				$("div.mozaique > div > div.thumb-under > p.title").each(function (a, b) {
					title.push($(this).find("a").attr("title"));
					duration.push($(this).find("span.duration").text());
					url.push("https://www.xvideos.com" + $(this).find("a").attr("href"));
				});
				$("div.mozaique > div > div.thumb-under").each(function (a, b) {
					quality.push($(this).find("span.video-hd-mark").text());
				});
				$("div.mozaique > div > div > div.thumb > a").each(function (a, b) {
					thumb.push($(this).find("img").attr("data-src"));
				});
				for (let i = 0; i < title.length; i++) {
					hasil.push({
						title: title[i],
						duration: duration[i],
						quality: quality[i],
						thumb: thumb[i],
						url: url[i]
					});
				}
				resolve(hasil);
			}).catch(reject);
		});
	}

function xvideosDown(url) {
		return new Promise(async (resolve, reject) => {
			await axios.request(url, {
				method: "GET"
			}).then(async result => {
				if (isAxiosError()) throw ('axios error');
				const $ = cheerio.load(result.data, {
					xmlMode: false
				});
				const hasil = {
					title: $("meta[property='og:title']").attr("content"),
					keyword: $("meta[name='keywords']").attr("content"),
					views: $("div#video-tabs > div > div > div > div > strong.mobile-hide").text() + " views",
					vote: $("div.rate-infos > span.rating-total-txt").text(),
					like_count: $("span.rating-good-nbr").text(),
					dislike_count: $("span.rating-bad-nbr").text(),
					thumb: $("meta[property='og:image']").attr("content"),
					url: $("#html5video > #html5video_base > div > a").attr("href")
				};
				resolve(hasil);
			}).catch(reject);
		});
	}
module.exports = {xvideosSearch,xvideosDown}
