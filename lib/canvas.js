const fs = require('fs')
const {
    loadImage,
    createCanvas,
    registerFont
} = require('canvas')
registerFont('./media/BADABB__.TTF', {
        family: 'BADABB',
    });
registerFont('./media/Lemands.ttf', {
        family: 'Lemands',
    });
registerFont('./media/SpeedBeast FREE.ttf', {
        family: 'SpeedBeast',
    });
registerFont('./media/Vampire Wars.ttf', {
        family: 'Vampire',
    });
registerFont('./media/AVENGEANCE HEROIC AVENGER.ttf', {
        family: 'AVENGEANCE',
    });
registerFont('./media/Bells Morten.ttf', {
    family: 'Bells',
  });
registerFont('./media/Castillo.ttf', {
    family: 'Castillo',
  });
registerFont('./media/Mix Doodle.ttf', {
    family: 'Mix',
  });
async function gfx1({
    text,
    text2
}) {
    const canvas = createCanvas(1600, 1600)
    const img = await loadImage('./temp/gfx1.jpg');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 1600, 1600)
    context.font = '330px BADABB'
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
        context.font = '100px BADABB'
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
    const canvas = createCanvas(1280, 1280)
    const img = await loadImage('./temp/gfx2.jpg');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 1280, 1280)
    context.font = '270px BADABB'
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
        context.font = '100px BADABB'
        context.lineWidth = 25;
        context.shadowBlur = 1;
        context.shadowColor = "black";
        context.shadowOffsetX = 6;
        context.shadowOffsetY = 10;
        context.strokeText(text2, (340 * text.length) / text.length, 960, (660 * text.length) / text.length);
        context.stroke();
        context.fillText(text2, (340 * text.length) / text.length, 960, (660 * text.length) / text.length);
    }
    return canvas.toBuffer('image/png');
}

async function gfx3({
    text,
    text2
}) {
    const canvas = createCanvas(1600, 1600)
    const img = await loadImage('./temp/gfx3.jpg');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 1600, 1600)
    context.font = '340px BADABB'
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
        context.font = '100px BADABB'
        context.lineWidth = 25;
        context.shadowBlur = 1;
        context.shadowColor = "black";
        context.shadowOffsetX = 6;
        context.shadowOffsetY = 10;
        context.strokeText(text2, (400 * text.length) / text.length, 1200, (670 * text.length) / text.length);
        context.stroke();
        context.fillText(text2, (400 * text.length) / text.length, 1200, (670 * text.length) / text.length);
    }
    return canvas.toBuffer('image/png');
}

async function gfx4({
    text,
    text2
}) {
    const canvas = createCanvas(1280, 1280)
    const img = await loadImage('./temp/gfx4/1.jpg');
    const f2 = await loadImage('./temp/gfx4/2.png');
    const f3 = await loadImage('./temp/gfx4/3.png')
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 1280, 1280)
    context.font = '290px BADABB'
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
    context.font = '350px SpeedBeast'
    context.fillStyle = "#8BAFAB"
    context.rotate(-Math.PI / 32);
    context.fillText(text, (240 * text.length) / text.length, 1120, (690 * text.length) / text.length);
    context.lineWidth = 7;
    context.shadowBlur = 40;
    context.shadowColor = "black";
    context.strokeStyle = 'black';
    context.strokeText(text, (240 * text.length) / text.length, 1120, (690 * text.length) / text.length);
    if (text2) {
        context.font = '180px SpeedBeast';
        context.fillStyle = '#919193'
        context.strokeStyle = 'black';
        context.fillText(text2, (410 * text2.length) / text2.length, 1180, (270 * text2.length) / text2.length);
        context.lineWidth = 15;
        context.shadowBlur = 40;
        context.shadowColor = "black";
        context.strokeText(text2, (410 * text2.length) / text2.length, 1180, (270 * text2.length) / text2.length);
    }
    return canvas.toBuffer('image/png');
}

async function gfx5({
    text,
    text2,
    text3
}) {
    const canvas = createCanvas(1280, 1280)
    const img = await loadImage('./temp/gfx5.jpg');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 1280, 1280)
    context.font = '290px BADABB'
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
        context.font = '100px BADABB'
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
        context.font = '100px BADABB'
        context.lineWidth = 25;
        context.shadowBlur = 1;
        context.shadowColor = "black";
        context.shadowOffsetX = 6;
        context.shadowOffsetY = 10;
        context.strokeText(text3, (800 * text3.length) / text3.length, 1230, (660 * text3.length) / text3.length);
        context.stroke();
        context.fillText(text3, (800 * text3.length) / text3.length, 1230, (660 * text3.length) / text3.length);
    }
    return canvas.toBuffer('image/png');
}

async function gfx6({
    text,
    text2,
    text3
}) {
    const canvas = createCanvas(1280, 1280)
    const img = await loadImage('./temp/gfx6.jpg');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 1280, 1280)
    context.font = '290px Vampire'
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
        context.font = '100px Vampire'
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
        context.font = '100px Vampire'
        context.lineWidth = 25;
        context.shadowBlur = 1;
        context.shadowColor = "black";
        context.shadowOffsetX = 6;
        context.shadowOffsetY = 10;
        context.strokeText(text3, (720 * text3.length) / text3.length, 1230, (660 * text3.length) / text3.length);
        context.stroke();
        context.fillText(text3, (720 * text3.length) / text3.length, 1230, (660 * text3.length) / text3.length);
    }
    return canvas.toBuffer('image/png');
}
async function gfx8({text,text2}) {
  const canvas = createCanvas(1280, 1280)
  const img = await loadImage('./temp/gfx8.jpg');
  const context = canvas.getContext('2d');
  context.drawImage(img, 0, 0, 1280, 1280)
 context.font = '300px Bells'
  context.strokeStyle = 'black';
  context.fillStyle = "#C8C8C8";
  context.shadowBlur = 40;
  context.lineWidth = 40;
  context.shadowColor = "black";
  context.shadowOffsetX = 30;
  context.shadowOffsetY = 40;
  context.rotate(-Math.PI / 32);
  context.strokeText(text, (230 * text.length) / text.length, 1100, (700 * text.length) / text.length);
  context.fillText(text, (230 * text.length) / text.length, 1100, (700 * text.length) / text.length);
  context.stroke();
  if(text2) {
    context.font = '140px Castillo'
      context.lineWidth = 25;
  context.shadowBlur = 20;
  context.shadowColor = "black";
  context.fillStyle = "#F44336";
  context.shadowOffsetX = 6;
  context.shadowOffsetY = 10;
  context.strokeText(text2, (660 * text.length) / text.length, 1140, (600 * text.length) / text.length);
  context.stroke();
  context.fillText(text2, (660 * text.length) / text.length, 1140, (600 * text.length) / text.length);
  }
  return canvas.toBuffer('image/png');
}

async function gfx7({text,text2}) {
  const canvas = createCanvas(1280, 1280)
  const img = await loadImage('./temp/gfx7.jpg');
  const context = canvas.getContext('2d');
  context.drawImage(img, 0, 0, 1280, 1280)
 context.font = '220px Mix'
  context.rotate(-Math.PI / 32);
  context.strokeStyle = 'black';
  context.fillStyle = "#F44336";
  context.shadowBlur = 70;
  context.lineWidth = 40;
  context.shadowColor = "black";
 context.shadowOffsetX = 20;
 context.shadowOffsetY = 20;
  context.strokeText(text, (170 * text.length) / text.length, 1100, (740 * text.length) / text.length);
  context.lineWidth = 1;
context.fillText(text, (170 * text.length) / text.length, 1100, (740 * text.length) / text.length);
  context.stroke();
  if(text2) {
    context.font = '120px Castillo'
      context.lineWidth = 25;
  context.shadowBlur = 20;
  context.shadowColor = "black";
  context.fillStyle = "#F44336";
  context.shadowOffsetX = 6;
  context.shadowOffsetY = 10;
  context.strokeText(text2, (660 * text.length) / text.length, 1140, (600 * text.length) / text.length);
  context.stroke();
  context.fillText(text2, (660 * text.length) / text.length, 1140, (600 * text.length) / text.length);
  }
  return canvas.toBuffer('image/png')
}
async function gfx9(text) {
    const canvas = createCanvas(840, 840)
    const img = await loadImage('./temp/gfx9.jpg');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 840, 840)
    context.font = '130px AVENGEANCE';
    context.shadowBlur = 10;
    context.shadowColor = "#fc4cae";
    context.fillRect();
    context.fillStyle = "#4063C1";
    context.strokeStyle = "#EA5D91";
    context.fillText(text, (220 * text.length) / text.length, 770, (420 * text.length) / text.length);
    context.lineWidth = 3;
    context.strokeText(text, (220 * text.length) / text.length, 770, (420 * text.length) / text.length);
    context.stroke();
    return canvas.toBuffer('image/png');
}

async function gfx10(text) {
    const canvas = createCanvas(840, 840)
    const img = await loadImage('./temp/gfx10.jpg');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 840, 840)
    context.font = '130px AVENGEANCE';
    context.shadowBlur = 20;
    context.shadowColor = "#FA1915";
    context.fillRect();
    context.fillStyle = "";
    context.strokeStyle = "#F3657C";
    context.fillText(text, (220 * text.length) / text.length, 770, (420 * text.length) / text.length);
    context.lineWidth = 3;
    context.strokeText(text, (220 * text.length) / text.length, 770, (420 * text.length) / text.length);
    context.stroke();
    return canvas.toBuffer('image/png');
}
async function gfx11(text) {
    const canvas = createCanvas(840, 840)
    const img = await loadImage('./temp/gfx11.jpg');
    const png = await loadImage('./temp/gfx11.png');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 840, 840)
    context.font = '130px AVENGEANCE';
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
    return canvas.toBuffer('image/png');
}
async function gfx12(text) {
    const canvas = createCanvas(840, 840)
    const img = await loadImage('./temp/gfx12.jpg');
    const png = await loadImage('./temp/gfx12.png');
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, 840, 840)
    context.font = '130px AVENGEANCE';
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
    return canvas.toBuffer('image/png');
}

async function t_musk(obj) {
    const img = await loadImage('./temp/elon.jpg');
    const canvas = createCanvas(1600, 1180);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, 1600, 1180);
    ctx.fillStyle = 'black'; // Text color
    ctx.font = `55px sans-serif`;
    ctx.textAlign = 'left';
      let words = obj.text.split(' ');
      let line = '';
      let count = 0;
      let y = 300;
      for (let word of words) {
        if (count < 9) {
          line += word + ' ';
          count++;
        } else {
          ctx.fillText(line.trim(), 80,y);
          y += 1.4 * 55;
          line = word + ' ';
          count = 1;
        }
      }
      if (line.trim() !== '') ctx.fillText(line.trim(), 80, y);
  ctx.font = `160px`;
  ctx.fillStyle = 'gray';
  const date = new Date();
  ctx.fillText(new Intl.DateTimeFormat('en-US', {timeZone: obj.tz, hour12: true, hour: 'numeric', minute: 'numeric'}).format(date), 40,910, 260)
  ctx.fillText(date.toLocaleString('default', { month: 'short', day:'numeric', year:'numeric'}), 300,910, 320)

      if(obj.footer) {
        ctx.fillStyle = 'black';
        ctx.font = `70px Lemands`;
        ctx.fillText(obj.footer, 970,915, 320)
      }
    return canvas.toBuffer('image/png');
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
    gfx12,
    t_musk
};
