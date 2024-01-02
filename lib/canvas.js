const fs = require('fs')
const { loadImage, createCanvas } = require('canvas')

async function wanted(buff, options){
const canvas = createCanvas(429,581)
const over = await loadImage(buff); 
const img = await loadImage('./temp/wanted.png');
const context = canvas.getContext('2d');
context.drawImage(img, 0,0,429,581)
context.drawImage(over,66,192,298,220);
  const imgBuffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./temp/${options.path}`,imgBuffer)
  return `/temp/${options.path}`;
}
async function wasted(buff, options){
const canvas = createCanvas(450,450)
const over = await loadImage(buff); 
const img = await loadImage('./temp/wasted.png');
const context = canvas.getContext('2d');
context.drawImage(over,0,0, 450,450);
context.drawImage(img, 0,220,450,250)
  const imgBuffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./temp/${options.path}`,imgBuffer)
  return `/temp/${options.path}`;
}

async function jail(buff, options){
const t = options.options.text.split(' ');
const canvas = createCanvas(480,480)
const x = canvas.width / 2;
const over = await loadImage('./temp/jail.png');
const img = await loadImage(buff);
const context = canvas.getContext('2d');
context.drawImage(img, 0,0,480,480)
context.drawImage(over,0,0,480,480);
context.font = `${options.style} ${options.size}px arial`;
context.textAlign = 'center'
context.textBaseline = 'bottom';
context.fillStyle = options.color;
context.strokeStyle = options.border;
  let n = 10
 for (let i = 0;i < t.length; i+=3) { 
  const three = (t[i] +' ' + t[i+1] + ' ' + t[i+2]).replace(/undefined/g,'')
  const y = (canvas.height / 12)*n++;
   context.fillText(three, x, y)
   context.strokeText(three, x, y);
 }
  context.stroke();
  const imgBuffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./temp/${options.path}`,imgBuffer)
  return `/temp/${options.path}`;
}

async function gfx1(options){
const canvas = createCanvas(1024,1024)
const img = await loadImage('./temp/gfx1.jpeg');
const context = canvas.getContext('2d');
context.drawImage(img, 0,0,1024,1024)
context.font = `bold italic ${options.text.length *15}px fangsong`
context.textAlign = 'center'
context.textBaseline = 'bottom';
context.fillStyle = options.color;
context.strokeStyle = options.border;
context.rotate(-4 * Math.PI / 180);
context.fillText(options.text , 420, 1060,options.text.length *60);
context.lineWidth = 7;
context.strokeText(options.text, 420, 1060,options.text.length *60);
context.stroke();
  const imgBuffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./temp/${options.path}`,imgBuffer)
  return `/temp/${options.path}`;
}

async function gfx2(options) {
const canvas = createCanvas(495,620)
const img = await loadImage('./temp/gfx2.jpeg');
const context = canvas.getContext('2d');
context.drawImage(img, 0,0,495,620)
context.font = `bold italic ${options.text.length *8}px fangsong`
context.textAlign = 'center'
context.textBaseline = 'bottom';
context.fillStyle = options.color;
context.strokeStyle = options.border;
context.rotate(-4 * Math.PI / 180);
context.fillText(options.text , 200, 635,options.text.length *28);
context.lineWidth = 6;
context.strokeText(options.text, 200, 635,options.text.length *28);
context.stroke();
  const imgBuffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./temp/${options.path}`,imgBuffer)
  return `/temp/${options.path}`;
}


async function gfx3(options) {
const canvas = createCanvas(555,555)
const img = await loadImage('./temp/gfx3.jpeg');
const context = canvas.getContext('2d');
context.drawImage(img, 0,0,555,555)
context.font = `bold ${options.text.length *7}px fangsong`
context.textAlign = 'center'
context.textBaseline = 'bottom';
context.fillStyle = options.color;
context.strokeStyle = options.border;
context.fillText(options.text , 275, 545,options.text.length *30);
context.lineWidth = 4;
context.strokeText(options.text, 275, 545,options.text.length *30);
context.stroke();
  const imgBuffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./temp/${options.path}`,imgBuffer)
  return `/temp/${options.path}`;
}


async function gfx4(options) {
const frst = options.text.split(' ')[0] || text;
const canvas = createCanvas(448,685)
const img = await loadImage('./temp/gfx4.png');
const context = canvas.getContext('2d');
context.fillStyle = options.bg
context.fillRect(0,0,canvas.width,canvas.height);
context.font = "bold italic 48px fangsong";
context.strokeStyle = 'black';
context.lineWidth = 2;
context.strokeText(frst, 15, 150,300);
context.strokeText(frst, 15, 200,300);
context.strokeText(frst, 15, 250,300);
context.strokeText(frst, 15, 300,300);
context.strokeText(frst, 15, 350,300);
context.strokeText(frst, 15, 400,300);
context.strokeText(frst, 15, 450,300);
context.strokeText(frst, 15, 500,300);
context.stroke();
context.drawImage(img, 0,0,448,685)
context.font = `bold italic ${options.text.length *7}px fangsong`
context.textAlign = 'center'
context.textBaseline = 'bottom';
context.fillStyle = options.color;
context.strokeStyle = options.border;
context.fillText(options.text , 200, 650,options.text.length *27);
context.lineWidth = 4;
context.strokeText(options.text, 200, 650,options.text.length *27);
context.stroke();
  const imgBuffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./temp/${options.path}`,imgBuffer)
  return `/temp/${options.path}`;
}


async function gfx5(options) {
const canvas = createCanvas(435,575)
const img = await loadImage('./temp/gfx5.png');
const context = canvas.getContext('2d');
context.fillStyle = options.bg
context.fillRect(0,0,canvas.width,canvas.height);
context.drawImage(img, 0,0,435, 575)
context.font = `bold ${options.text.length *7}px fangsong`
context.textAlign = 'center'
context.textBaseline = 'bottom';
context.fillStyle = options.color;
context.strokeStyle = options.border;
context.fillText(options.text , 220, 570,options.text.length *27);
context.lineWidth = 4;
context.strokeText(options.text, 220, 570,options.text.length *27);
context.stroke();
  const imgBuffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./temp/${options.path}`,imgBuffer)
  return `/temp/${options.path}`;
}

async function gfx6(options) {
const frst = (options.text.split(' ')[0] || text).toUpperCase();
const a = frst.length > 7 ? 15 : frst.length > 5 ? 18 : 20;
const canvas = createCanvas(600,600)
const context = canvas.getContext('2d');
const jpg = await loadImage('./temp/gfx6.jpg');
const png = await loadImage('./temp/gfx6.png');
context.drawImage(jpg, 0,0,600,600)
context.font = `bold italic ${frst.length * a}px fangsong`;
context.fillStyle = options.style;
context.fillText(frst, 15, 250,250);
context.globalAlpha = 0.9;
context.fillText(frst, 15, 350,250);
context.globalAlpha = 0.8;
context.fillText(frst, 15, 450,250);
context.globalAlpha = 0.7;
context.fillText(frst, 15, 550,250);
context.globalAlpha = 1;
context.drawImage(png, 0,0,600,600)
context.font = `bold italic ${options.text.length *12}px fangsong`
context.textAlign = 'center'
context.textBaseline = 'bottom';
context.fillStyle = options.color;
context.strokeStyle = options.border;
context.fillText(options.text , 300, 600,options.text.length *30);
context.lineWidth = 4;
context.strokeText(options.text, 300, 600,options.text.length *30);
context.stroke();
  const imgBuffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./temp/${options.path}`,imgBuffer)
  return `/temp/${options.path}`;
}


async function gfx7(options) {
const frst = (options.text.split(' ')[0] || text).toUpperCase();
const a = frst.length > 7 ? 15 : frst.length > 5 ? 18 : 20;
const canvas = createCanvas(600,600)
const context = canvas.getContext('2d');
const jpg = await loadImage('./temp/gfx7.jpg');
const png = await loadImage('./temp/gfx7.png');
context.drawImage(jpg, 0,0,600,600)
context.font = `bold italic ${frst.length * a}px fangsong`;
context.fillStyle = options.style;
context.fillText(frst, 15, 350,250);
context.globalAlpha = 0.9;
context.fillText(frst, 15, 450,250);
context.globalAlpha = 0.8;
context.fillText(frst, 15, 550,250);
context.globalAlpha = 1;
context.drawImage(png, 0,0,600,600)
context.font = `bold italic ${options.text.length *12}px fangsong`
context.textAlign = 'center'
context.textBaseline = 'bottom';
context.fillStyle = options.color;
context.strokeStyle = options.border;
context.rotate(-3 * Math.PI / 180);
context.fillText(options.text , 280, 580,options.text.length *30);
context.lineWidth = 1;
context.strokeText(options.text, 280, 580,options.text.length *30);
context.stroke();
if(options.text2) {
context.font = `bold italic ${options.text2.length * 10}px fangsong`;
context.fillText(options.text2 , options.text2.length *130, 580,options.text2.length *20);
context.strokeText(options.text2, options.text2.length*130, 580,options.text2.length *20);
context.stroke();
}
  const imgBuffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./temp/${options.path}`,imgBuffer)
  return `/temp/${options.path}`;
}

async function gfx8(options) {
const frst = (options.text.split(' ')[0] || text).toUpperCase();
const a = frst.length > 7 ? 15 : frst.length > 5 ? 18 : 20;
const canvas = createCanvas(600,600)
const context = canvas.getContext('2d');
const jpg = await loadImage('./temp/gfx8.jpg');
const png = await loadImage('./temp/gfx8.png');
context.drawImage(jpg, 0,0,600,600)
context.font = `bold italic ${frst.length * a}px fangsong`;
context.fillStyle = options.style;
context.globalAlpha = 0.8;
context.fillText(frst, 15, 320,250);
context.globalAlpha = 0.7;
context.fillText(frst, 15, 440,250);
context.globalAlpha = 0.6;
context.fillText(frst, 15, 550,250);
context.globalAlpha = 1;
context.drawImage(png, 0,0,600,600)
context.font = `bold italic ${options.text.length *12}px fangsong`
context.textAlign = 'center'
context.textBaseline = 'bottom';
context.fillStyle = options.color;
context.strokeStyle = options.border;
context.rotate(-3 * Math.PI / 180);
context.fillText(options.text , 280, 620,options.text.length *30);
context.lineWidth = 1;
context.strokeText(options.text, 280, 620,options.text.length *30);
context.stroke();
if(options.text2) {
context.font = `bold italic ${options.text2.length * 10}px fangsong`;
context.fillText(options.text2 , options.text2.length *130, 620,options.text2.length *20);
context.strokeText(options.text2, options.text2.length*130, 620,options.text2.length *20);
context.stroke();
}
  const imgBuffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./temp/${options.path}`,imgBuffer)
  return `/temp/${options.path}`;
}

module.exports = {wanted,jail,wasted, gfx1,gfx2,gfx3,gfx4,gfx5,gfx6,gfx7,gfx8};
