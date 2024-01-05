const PDFDocument = require('pdfkit');
const fs = require('fs');
const {
	stream2buffer
} = require('./stream');

async function pdf(buff, {text, path}) {
	const margin = 36;
	const doc = new PDFDocument({
		size: [595.28, 841.89],
		margin
	});
	let currentPage = 1;
	if (text) {
		doc.on('pageAdded', () => {
			currentPage++;
		});
		const lines = doc.font('Helvetica', 12).text(text, margin, margin, {
			align: 'justify'
		});
		let y = margin;
		if (doc.undocumented_lines) {
			y += doc.undocumented_lines.length * 12;
		}
		while (y > doc.page.height - margin) {
			doc.addPage();
			currentPage++;
			y -= doc.page.height - margin;
		}
	}
	if (buff) {
		const files = buff.map(a => a.data);
		files.map(async (file) => {
			if (currentPage == 1) {
				doc.image((file), {
					fit: [500, 500],
					align: 'center',
					valign: 'center'
				});
				currentPage++
			} else {
				doc.addPage().image((file), {
					fit: [500, 500],
					align: 'center',
					valign: 'center'
				});
			}
		});
	}
	doc.end();
        const p = '/temp/'+path;
	fs.writeFileSync('./'+p,await stream2buffer(doc));
	return p;
}
module.exports = {
	pdf
}
