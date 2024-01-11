require('../settings');
const FormData = require('form-data');
const axios = require('axios');
const imgbbUploader = require("imgbb-uploader");
const fs = require('fs');

async function upload(options) {
	const isSticker = options.path.endsWith('webp');
	try {
		if (isSticker) {
			const webp = await imgbbUploader(imgbb, '.' + options.path);
			fs.unlinkSync('.'+options.path);
			return {
				status: true,
				url: webp.url
			}
		}
		const data = new FormData();
		data.append('image', fs.createReadStream('.' + options.path));
		const headers = {
			'Authorization': `Client-ID ${imgur}`,
			...data.getHeaders()
		};
		const config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'https://api.imgur.com/3/upload',
			headers: headers,
			data: data
		};
		const response = await axios(config);
		fs.unlinkSync('.'+options.path);
		return {
			status: true,
			url: response.data.data.link
		}
	} catch (e) {
		return {
			status: false,
			error: 'too many requests'
		};
	}
}
module.exports = {
	upload
};
