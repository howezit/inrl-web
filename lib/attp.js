const { createCanvas, loadImage, registerFont } = require('canvas');
const GIFEncoder = require('gifencoder');
const fs = require('fs');
const {stream2buffer} = require('./stream');

function attp(text){
  const frameDuration = 40;
  const gifDuration = 1000; 
  const encoder = new GIFEncoder(300, 300);
  encoder.start();
  encoder.setRepeat(0); // 0 for repeat indefinitely
  encoder.setDelay(frameDuration);
  encoder.setQuality(10); // Adjust as needed

  const canvas = createCanvas(300, 300);
  const ctx = canvas.getContext('2d');
  ctx.font = '40px Arial';
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const colors = [
    [255, 0, 0],    // Red
    [0, 255, 0],    // Green
    [0, 0, 255]     // Blue
  ];
  const numFrames = Math.ceil(gifDuration / frameDuration);
  const colorIndexStep = Math.ceil(numFrames / colors.length);
  for (let frameIndex = 0; frameIndex < numFrames; frameIndex++) {
    const colorIndex = Math.floor(frameIndex / colorIndexStep);
    const currentColor = colors[colorIndex % colors.length];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `rgb(${currentColor.join(',')})`;
    const words = text.split(' ');
    const maxLineWidth = 180; // Maximum width allowed for text in pixels
    let line = '';
    let lines = [];
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > maxLineWidth && i > 0) {
        lines.push(line);
        line = words[i] + ' ';
      } else {  line = testLine;}
    }
    lines.push(line);
    const lineHeight = 40; // Height of each line in pixels
    const textHeight = lines.length * lineHeight;
    const startY = centerY - textHeight / 2;

    for (let i = 0; i < lines.length; i++) {
      const lineY = startY + i * lineHeight;
      ctx.fillText(lines[i], centerX, lineY);
    }
    encoder.addFrame(ctx);
  }

  encoder.finish();
  return encoder.out.getData();
  }

async function ttp(text){
    const canvas = createCanvas(300, 300);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Set text properties
    const fontSize = 30;
    const fontFamily = 'Flick Bold Hollow';
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = 'white';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const words = text.split(' ');
    const maxWidth = canvas.width * 0.8;
    let lines = [];
    let line = '';
    let y = centerY;
    for (const word of words) {
      const testLine = line + word + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth) {
        lines.push(line.trim());
        line = word + ' ';
      } else { line = testLine; }
    }
    lines.push(line.trim());
    const totalTextHeight = lines.length * fontSize;
    const firstLineY = centerY - totalTextHeight / 2;
    lines.forEach((line, index) => {
      const lineY = firstLineY + index * fontSize;
      ctx.fillText(line, centerX, lineY);
    });
    const stream = canvas.createPNGStream();
return await stream2buffer(stream)
}
module.exports = {attp, ttp}
