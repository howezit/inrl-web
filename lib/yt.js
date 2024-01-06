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
		a.creator = {
			logo: a.author?.thumbnails,
			name: a.author?.name,
			verified: a.author?.is_verified,
			url: a.author?.url
		};
		a.uploaded = a.published?.text;
		a.viewers = a.view_count?.text;
		a.duration = a.duration?.text;
		delete a.endpoint;
		delete a.view_count;
		delete a.author;
		delete a.snippets;
		delete a.published;
		delete a.expandable_metadata;
		delete a.thumbnail_overlays;
		delete a.menu;
		delete a.badges;
		delete a.rich_thumbnail;
		delete a.endpoint;
		delete a.badges;
		delete a.short_view_count;
		delete a.show_action_menu;
		delete a.is_watched;
		delete a.search_video_result_entity_key;
	});
	return search.results;
}
module.exports = {ytsearch};
