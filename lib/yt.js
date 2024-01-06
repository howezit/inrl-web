const {
	Innertube,
	UniversalCache,
	Utils
} = require('youtubei.js');

async function ytsearch(text) {
	const yt = await Innertube.create({
		cache: new UniversalCache(false),
		generate_session_locally: true
	});
	const search = await yt.search(text, {
		type: 'video'
	});

	search.results.map(a => {
		a.title = a.title?.text;
		delete a.snippets;
		delete a.expandable_metadata;
		delete a.thumbnail_overlays;
		a.creator = {
			logo: a.author?.thumbnails,
			name: a.author?.name,
			verified: a.author?.is_verified,
			url: a.author?.url
		};
		delete a.author;
		a.uploaded = a.published?.text;
		delete a.published;
		a.viewers = a.view_count?.text;
		delete a.view_count;
		a.duration = a.duration?.text;
		delete a.duration;
		delete a.menu;
		delete a.search_video_result_entity_key;
	});
	return search.results;
}
module.exports = {ytsearch};
