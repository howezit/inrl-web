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
const t = options.text.split(' ');
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
context.font = `bold italic ${text.length *15}px fangsong`
context.textAlign = 'center'
context.textBaseline = 'bottom';
context.fillStyle = options.color;
context.strokeStyle = options.border;
context.rotate(-5 * Math.PI / 180);
context.fillText(options.text , 420, 1070,text.length *60);
context.lineWidth = 7;
context.strokeText(text, 420, 1070,text.length *60);
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
context.font = `bold italic ${text.length *7}px fangsong`
context.textAlign = 'center'
context.textBaseline = 'bottom';
context.fillStyle = options.color;
context.strokeStyle = options.border;
context.rotate(-4 * Math.PI / 180);
context.fillText(options.text , 200, 635,text.length *27);
context.lineWidth = 6;
context.strokeText(text, 200, 635,text.length *27);
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
context.font = `bold ${text.length *6}px fangsong`
context.textAlign = 'center'
context.textBaseline = 'bottom';
context.fillStyle = options.color;
context.strokeStyle = options.border;
context.fillText(options.text , 275, 555,text.length *29);
context.lineWidth = 4;
context.strokeText(text, 275, 555,text.length *29);
context.stroke();
  const imgBuffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./temp/${options.path}`,imgBuffer)
  return `/temp/${options.path}`;
}


async function gfx4(options) {
const frst = text.split(' ')[0] || text;
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
context.font = `bold ${text.length *6}px fangsong`
context.textAlign = 'center'
context.textBaseline = 'bottom';
context.fillStyle = options.color;
context.strokeStyle = options.border;
context.rotate(-3 * Math.PI / 180);
context.fillText(options.text , 200, 650,text.length *25);
context.lineWidth = 4;
context.strokeText(text, 200, 650,text.length *25);
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
context.font = `bold ${text.length *5}px fangsong`
context.textAlign = 'center'
context.textBaseline = 'bottom';
context.fillStyle = options.color;
context.strokeStyle = options.border;
context.fillText(options.text , 220, 580,text.length *25);
context.lineWidth = 4;
context.strokeText(text, 220, 580,text.length *25);
context.stroke();
  const imgBuffer = canvas.toBuffer('image/png')
  fs.writeFileSync(`./temp/${options.path}`,imgBuffer)
  return `/temp/${options.path}`;
}

module.exports = {wanted,jail,wasted, gfx1,gfx2,gfx3,gfx4,gfx5};
