const {
	Innertube,
	UniversalCache,
	YTNodes
} = require('youtubei.js');
const axios = require('axios');
const cheerio = require('cheerio');

async function igstalk(name) {
	try {
		const {
			data
		} = await axios.get(`https://dumpoir.com/v/${name}`, {
			headers: {
				"cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
				"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
			}
		})
		const $ = cheerio.load(data)
		const result = {
			status: true,
			profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style')?.replace(/(background-image: url\(\'|\'\);)/gi, ''),
			fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
			username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
			post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts', ''),
			followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers', ''),
			following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following', ''),
			bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
		}
		return result;
	} catch (e) {
		return {
			status: false,
			message: 'not found!'
		}
	}
}
async function ytChannel(q) {
	const yt = await Innertube.create({
		cache: new UniversalCache(false),
		generate_session_locally: true
	});
	const channel = await yt.search(q, {
		type: 'channel'
	});

	const channel_id = channel.results.map(a => a.id);
	const results = [];
	for (const i of channel_id) {
		const channel = await yt.getChannel(i);
		results.push({
			name: channel.metadata.title,
			thumbnail: channel.metadata.avatar,
			verified: channel.header.author.is_verified,
			url: channel.metadata.url,
			subscribers: channel.header.subscribers?.text || 'unavailable',
			total_video: channel.header.videos_count?.text,
			description: channel.metadata.description,
			family_safe: channel.metadata.is_family_safe,
			keywords: channel.metadata.keywords
		});
	}
	return results
}

async gitUser(id) {
	const {
		data
	} = await axios(`https://api.github.com/users/${id}`);
	return data;
}
module.exports = {
	igstalk,
	ytChannel,
	gitUser
}
