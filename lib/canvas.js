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

module.exports = {wanted,jail};
