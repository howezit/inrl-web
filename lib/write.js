const Jimp = require('jimp');

async function write(buff, options) {
	const image = await Jimp.read(buff);
	const textImage = new Jimp(1000, 1000, 0x0);
	const font = await Jimp.loadFont(Jimp[options.size]);
	textImage.print(font, 0, 0, {
			text: options.text,
			alignmentX: Jimp[options.x],
			alignmentY: Jimp[options.y]
		},
		image.getWidth(),
		image.getHeight()
	)
	textImage.color([{
		apply: options.apply,
		params: [`${options.color}`]
	}]);
	await image.blit(textImage, 0, 0)
	return await image.getBufferAsync(Jimp.MIME_JPEG)
}
module.exports = {
	write
};
