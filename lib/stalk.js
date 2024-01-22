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
		} = await axios.post(`https://instastalker.net/api/data`, {username:name});
		data.result = true;
		return data;
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

	const channel_id = channel.results.map(a => a.id).splice(0,5);
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

async function gitUser(id) {
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
