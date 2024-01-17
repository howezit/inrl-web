const fs = require('fs')
const {
    loadImage,
    createCanvas,
    registerFont
} = require('canvas')

async function gfx1({
    text,
    text2
}) {
    registerFont('./media/BADABB__.TTF', {
        family: 'Sora',
    });
    const canvas = createCanvas(1600, 1600)
    const img = await loadImage('./temp/gfx1.jpg');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 1600, 1600)
    context.font = '330px Sora'
    context.strokeStyle = 'black';
    context.fillStyle = "white";
    context.lineWidth = 30;
    context.shadowBlur = 1;
    context.shadowColor = "black";
    context.shadowOffsetX = 6;
    context.shadowOffsetY = 10;
    context.strokeText(text, (420 * text.length) / text.length, 1500, (660 * text.length) / text.length);
    context.stroke();
    context.fillText(text, (420 * text.length) / text.length, 1500, (660 * text.length) / text.length);
    if (text2) {
        context.font = '100px Sora'
        context.lineWidth = 25;
        context.shadowBlur = 1;
        context.shadowColor = "black";
        context.shadowOffsetX = 6;
        context.shadowOffsetY = 10;
        context.strokeText(text2, (400 * text.length) / text.length, 1220, (660 * text.length) / text.length);
        context.stroke();
        context.fillText(text2, (400 * text.length) / text.length, 1220, (660 * text.length) / text.length);
    }
    return canvas.toBuffer('image/png');
}


async function gfx2({
    text,
    text2
}) {
    registerFont('./media/BADABB__.TTF', {
        family: 'Sora',
    });
    const canvas = createCanvas(1280, 1280)
    const img = await loadImage('./temp/gfx2.jpg');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 1280, 1280)
    context.font = '270px Sora'
    context.strokeStyle = 'black';
    context.fillStyle = "white";
    context.lineWidth = 30;
    context.shadowBlur = 1;
    context.shadowColor = "black";
    context.shadowOffsetX = 6;
    context.shadowOffsetY = 10;
    context.strokeText(text, (360 * text.length) / text.length, 1200, (620 * text.length) / text.length);
    context.stroke();
    context.fillText(text, (360 * text.length) / text.length, 1200, (620 * text.length) / text.length);
    if (text2) {
        context.font = '100px Sora'
        context.lineWidth = 25;
        context.shadowBlur = 1;
        context.shadowColor = "black";
        context.shadowOffsetX = 6;
        context.shadowOffsetY = 10;
        context.strokeText(text2, (340 * text.length) / text.length, 960, (660 * text.length) / text.length);
        context.stroke();
        context.fillText(text2, (340 * text.length) / text.length, 960, (660 * text.length) / text.length);
    }
    return canvas.toDataURL();
}

async function gfx3({
    text,
    text2
}) {
    registerFont('./media/BADABB__.TTF', {
        family: 'Sora',
    });
    const canvas = createCanvas(1600, 1600)
    const img = await loadImage('./temp/gfx3.jpg');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 1600, 1600)
    context.font = '340px Sora'
    context.strokeStyle = 'black';
    context.fillStyle = "white";
    context.lineWidth = 30;
    context.shadowBlur = 1;
    context.shadowColor = "black";
    context.shadowOffsetX = 6;
    context.shadowOffsetY = 10;
    context.strokeText(text, (430 * text.length) / text.length, 1500, (680 * text.length) / text.length);
    context.stroke();
    context.fillText(text, (430 * text.length) / text.length, 1500, (680 * text.length) / text.length);
    if (text2) {
        context.font = '100px Sora'
        context.lineWidth = 25;
        context.shadowBlur = 1;
        context.shadowColor = "black";
        context.shadowOffsetX = 6;
        context.shadowOffsetY = 10;
        context.strokeText(text2, (400 * text.length) / text.length, 1200, (670 * text.length) / text.length);
        context.stroke();
        context.fillText(text2, (400 * text.length) / text.length, 1200, (670 * text.length) / text.length);
    }
    return canvas.toDataURL();
}

async function gfx4({
    text,
    text2
}) {
    registerFont('./media/SpeedBeast FREE.ttf', {
        family: 'Sora',
    });
    registerFont('./media/BADABB__.TTF', {
        family: 'curve',
    });
    const canvas = createCanvas(1280, 1280)
    const img = await loadImage('./temp/gfx4/1.jpg');
    const f2 = await loadImage('./temp/gfx4/2.png');
    const f3 = await loadImage('./temp/gfx4/3.png')
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 1280, 1280)
    context.font = '290px curve'
    context.strokeStyle = 'white';
    context.lineWidth = 1;
    context.save();
    context.translate((650 * text.length) / (text.length - (text.length / 20)), (580 * text.length) / (text.length - (text.length / 20)));
    context.rotate(-1 * 4 / 2);
    context.rotate(-1 * (1 / 10) / 2);
    for (var n = 0; n < text.length; n++) {
        context.rotate(2 / 7);
        context.save();
        context.translate(0, -1 * text.length * 50);
        context.fillStyle = '#87DDDA'
        context.fillText(text[n], 0, 0);
        context.strokeText(text[n], 0, 0);
        context.fillStyle = '#272624'
        context.fillText(text[n], 15, -15);
        context.strokeText(text[n], 15, -15);
        context.restore();
    }
    context.restore();
    context.drawImage(f2, 0, 0, 1280, 1280)
    context.drawImage(f3, 0, 0, 1280, 1280);
    context.font = '350px Sora'
    context.fillStyle = "#8BAFAB"
    context.rotate(-Math.PI / 32);
    context.fillText(text, (240 * text.length) / text.length, 1120, (690 * text.length) / text.length);
    context.lineWidth = 7;
    context.shadowBlur = 40;
    context.shadowColor = "black";
    context.strokeStyle = 'black';
    context.strokeText(text, (240 * text.length) / text.length, 1120, (690 * text.length) / text.length);
    if (text2) {
        context.font = '180px Sora';
        context.fillStyle = '#919193'
        context.strokeStyle = 'black';
        context.fillText(text2, (410 * text2.length) / text2.length, 1180, (270 * text2.length) / text2.length);
        context.lineWidth = 15;
        context.shadowBlur = 40;
        context.shadowColor = "black";
        context.strokeText(text2, (410 * text2.length) / text2.length, 1180, (270 * text2.length) / text2.length);
    }
    return canvas.toDataURL();
}

async function gfx5({
    text,
    text2,
    text3
}) {
    registerFont('./media/BADABB__.TTF', {
        family: 'Sora',
    });
    const canvas = createCanvas(1280, 1280)
    const img = await loadImage('./temp/gfx5.jpg');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 1280, 1280)
    context.font = '290px Sora'
    context.strokeStyle = 'black';
    context.fillStyle = "white";
    context.lineWidth = 30;
    context.shadowBlur = 1;
    context.shadowColor = "black";
    context.shadowOffsetX = 6;
    context.shadowOffsetY = 10;
    context.strokeText(text, (360 * text.length) / text.length, 1180, (620 * text.length) / text.length);
    context.stroke();
    context.fillText(text, (360 * text.length) / text.length, 1180, (620 * text.length) / text.length);
    if (text2) {
        context.font = '100px Sora'
        context.lineWidth = 25;
        context.shadowBlur = 1;
        context.shadowColor = "black";
        context.shadowOffsetX = 6;
        context.shadowOffsetY = 10;
        context.strokeText(text2, (340 * text2.length) / text2.length, 970, (660 * text2.length) / text2.length);
        context.stroke();
        context.fillText(text2, (340 * text2.length) / text2.length, 970, (660 * text2.length) / text2.length);
    }
    if (text3) {
        context.font = '100px Sora'
        context.lineWidth = 25;
        context.shadowBlur = 1;
        context.shadowColor = "black";
        context.shadowOffsetX = 6;
        context.shadowOffsetY = 10;
        context.strokeText(text3, (800 * text3.length) / text3.length, 1230, (660 * text3.length) / text3.length);
        context.stroke();
        context.fillText(text3, (800 * text3.length) / text3.length, 1230, (660 * text3.length) / text3.length);
    }
    return canvas.toDataURL();
}

async function gfx6({
    text,
    text2,
    text3
}) {
    registerFont('./media/Vampire Wars.ttf', {
        family: 'Sora',
    });
    const canvas = createCanvas(1280, 1280)
    const img = await loadImage('./temp/gfx6.jpg');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 1280, 1280)
    context.font = '290px Sora'
    context.strokeStyle = 'black';
    context.rotate(-Math.PI / 32);
    context.fillStyle = "#FF0050";
    context.lineWidth = 30;
    context.shadowBlur = 1;
    context.shadowColor = "black";
    context.shadowOffsetX = 6;
    context.shadowOffsetY = 10;
    context.strokeText(text, (250 * text.length) / text.length, 1180, (620 * text.length) / text.length);
    context.stroke();
    context.fillText(text, (250 * text.length) / text.length, 1180, (620 * text.length) / text.length);
    if (text2) {
        context.font = '100px Sora'
        context.lineWidth = 25;
        context.shadowBlur = 1;
        context.shadowColor = "black";
        context.shadowOffsetX = 6;
        context.shadowOffsetY = 10;
        context.strokeText(text2, (240 * text2.length) / text2.length, 970, (660 * text2.length) / text2.length);
        context.stroke();
        context.fillText(text2, (240 * text2.length) / text2.length, 970, (660 * text2.length) / text2.length);
    }
    if (text3) {
        context.font = '100px Sora'
        context.lineWidth = 25;
        context.shadowBlur = 1;
        context.shadowColor = "black";
        context.shadowOffsetX = 6;
        context.shadowOffsetY = 10;
        context.strokeText(text3, (720 * text3.length) / text3.length, 1230, (660 * text3.length) / text3.length);
        context.stroke();
        context.fillText(text3, (720 * text3.length) / text3.length, 1230, (660 * text3.length) / text3.length);
    }
    return canvas.toDataURL();
}
async function gfx7(options) {
    const frst = (options.text.split(' ')[0] || text).toUpperCase();
    const a = frst.length > 7 ? 13 : frst.length > 5 ? 17 : 20;
    const canvas = createCanvas(600, 600)
    const context = canvas.getContext('2d');
    const jpg = await loadImage('./temp/gfx7.jpg');
    const png = await loadImage('./temp/gfx7.png');
    context.drawImage(jpg, 0, 0, 600, 600)
    context.font = `bold italic ${frst.length * a}px fangsong`;
    context.fillStyle = options.style;
    context.fillText(frst, 15, 350, 250);
    context.globalAlpha = 0.9;
    context.fillText(frst, 15, 450, 250);
    context.globalAlpha = 0.8;
    context.fillText(frst, 15, 550, 250);
    context.globalAlpha = 1;
    context.drawImage(png, 0, 0, 600, 600)
    context.font = `bold italic ${options.text.length *12}px fangsong`
    context.textAlign = 'center'
    context.textBaseline = 'bottom';
    context.fillStyle = options.color;
    context.strokeStyle = options.border;
    context.rotate(-3 * Math.PI / 180);
    context.fillText(options.text, 280, 580, options.text.length * 30);
    context.lineWidth = 1;
    context.strokeText(options.text, 280, 580, options.text.length * 30);
    context.stroke();
    if (options.text2) {
        context.font = `bold italic ${options.text2.length * 10}px fangsong`;
        context.fillText(options.text2, options.text2.length * 130, 580, options.text2.length * 20);
        context.strokeText(options.text2, options.text2.length * 130, 580, options.text2.length * 20);
        context.stroke();
    }
    return canvas.toDataURL();
}

async function gfx8(options) {
    const frst = (options.text.split(' ')[0] || text).toUpperCase();
    const a = frst.length > 7 ? 13 : frst.length > 5 ? 17 : 20;
    const canvas = createCanvas(600, 600)
    const context = canvas.getContext('2d');
    const jpg = await loadImage('./temp/gfx8.jpg');
    const png = await loadImage('./temp/gfx8.png');
    context.drawImage(jpg, 0, 0, 600, 600)
    context.font = `bold italic ${frst.length * a}px fangsong`;
    context.fillStyle = options.style;
    context.globalAlpha = 0.8;
    context.fillText(frst, 15, 320, 250);
    context.globalAlpha = 0.7;
    context.fillText(frst, 15, 440, 250);
    context.globalAlpha = 0.6;
    context.fillText(frst, 15, 550, 250);
    context.globalAlpha = 1;
    context.drawImage(png, 0, 0, 600, 600)
    context.font = `bold italic ${options.text.length *12}px fangsong`
    context.textAlign = 'center'
    context.textBaseline = 'bottom';
    context.fillStyle = options.color;
    context.strokeStyle = options.border;
    context.rotate(-3 * Math.PI / 180);
    context.fillText(options.text, 280, 620, options.text.length * 30);
    context.lineWidth = 1;
    context.strokeText(options.text, 280, 620, options.text.length * 30);
    context.stroke();
    if (options.text2) {
        context.font = `bold italic ${options.text2.length * 10}px fangsong`;
        context.fillText(options.text2, options.text2.length * 130, 620, options.text2.length * 20);
        context.strokeText(options.text2, options.text2.length * 130, 620, options.text2.length * 20);
        context.stroke();
    }
    return canvas.toDataURL();
}
async function gfx9(text) {
    registerFont('./media/AVENGEANCE HEROIC AVENGER.ttf', {
        family: 'Sora',
    });
    const canvas = createCanvas(840, 840)
    const img = await loadImage('./temp/gfx9.jpg');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 840, 840)
    context.font = '130px Sora';
    context.shadowBlur = 10;
    context.shadowColor = "#fc4cae";
    context.fillRect();
    context.fillStyle = "#4063C1";
    context.strokeStyle = "#EA5D91";
    context.fillText(text, (220 * text.length) / text.length, 770, (420 * text.length) / text.length);
    context.lineWidth = 3;
    context.strokeText(text, (220 * text.length) / text.length, 770, (420 * text.length) / text.length);
    context.stroke();
    return canvas.toDataURL();
}

async function gfx10(text) {
    registerFont('./media/AVENGEANCE HEROIC AVENGER.ttf', {
        family: 'Sora',
    });
    const canvas = createCanvas(840, 840)
    const img = await loadImage('./temp/gfx10.jpg');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 840, 840)
    context.font = '130px Sora';
    context.shadowBlur = 20;
    context.shadowColor = "#FA1915";
    context.fillRect();
    context.fillStyle = "";
    context.strokeStyle = "#F3657C";
    context.fillText(text, (220 * text.length) / text.length, 770, (420 * text.length) / text.length);
    context.lineWidth = 3;
    context.strokeText(text, (220 * text.length) / text.length, 770, (420 * text.length) / text.length);
    context.stroke();
    return canvas.toDataURL();
}
async function gfx11(text) {
    registerFont('./media/AVENGEANCE HEROIC AVENGER.ttf', {
        family: 'Sora',
    });
    const canvas = createCanvas(840, 840)
    const img = await loadImage('./temp/gfx11.jpg');
    const png = await loadImage('./temp/gfx11.png');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 840, 840)
    context.font = '130px Sora';
    context.shadowBlur = 20;
    context.shadowColor = "#FA1915";
    context.fillRect();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.strokeText(text, 20, 180, 500);
    context.strokeText(text, 20, 370, 300);
    context.strokeText(text, 20, 560, 300);
    context.strokeText(text, 20, 750, 300);
    context.stroke();
    context.fillStyle = "black";
    context.strokeStyle = "#F3657C";
    context.drawImage(png, 0, 0, 840, 840)
    context.fillText(text, (220 * text.length) / text.length, 770, (420 * text.length) / text.length);
    context.lineWidth = 3;
    context.strokeText(text, (220 * text.length) / text.length, 770, (420 * text.length) / text.length);
    context.stroke();
    return canvas.toDataURL();
}
async function gfx12(text) {
    registerFont('./media/AVENGEANCE HEROIC AVENGER.ttf', {
        family: 'Sora',
    });
    const canvas = createCanvas(840, 840)
    const img = await loadImage('./temp/gfx12.jpg');
    const png = await loadImage('./temp/gfx12.png');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 840, 840)
    context.font = '130px Sora';
    context.shadowBlur = 20;
    context.shadowColor = "#FA1915";
    context.fillRect();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.strokeText(text, 20, 220, 500);
    context.strokeText(text, 20, 440, 300);
    context.strokeText(text, 20, 660, 300);
    context.stroke();
    context.fillStyle = "black";
    context.strokeStyle = "#F10615";
    context.drawImage(png, 0, 0, 840, 840)
    context.fillText(text, (220 * text.length) / text.length, 770, (420 * text.length) / text.length);
    context.lineWidth = 3;
    context.strokeText(text, (220 * text.length) / text.length, 770, (420 * text.length) / text.length);
    context.stroke();
    return canvas.toDataURL();
}

module.exports = {
    gfx1,
    gfx2,
    gfx3,
    gfx4,
    gfx5,
    gfx6,
    gfx7,
    gfx8,
    gfx9,
    gfx10,
    gfx11,
    gfx12
};
