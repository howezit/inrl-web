require('../settings');
const express = require('express');
const router = express.Router();
const fs = require('fs');

const {write, htmlColor, wanted, jail, wasted, upload} = require('../lib');
const x_possible = ['HORIZONTAL_ALIGN_CENTER', 'HORIZONTAL_ALIGN_LEFT', 'HORIZONTAL_ALIGN_RIGHT'];
const y_possible = ['VERTICAL_ALIGN_BOTTOM', 'VERTICAL_ALIGN_MIDDLE', 'VERTICAL_ALIGN_TOP'];
const allowed_sizes = ['FONT_SANS_8_BLACK', 'FONT_SANS_10_BLACK', 'FONT_SANS_12_BLACK', 'FONT_SANS_14_BLACK', 'FONT_SANS_16_BLACK', 'FONT_SANS_32_BLACK', 'FONT_SANS_64_BLACK', 'FONT_SANS_128_BLACK'];

router.post('/writer', async(req, res) => {
  const buff = req.files.file;
  const size = req.body.size ? `FONT_SANS_${req.body.size}_BLACK` : null;
  const text = req.body.text;
  const x = req.body.x ? `HORIZONTAL_ALIGN_${req.body.x.toUpperCase()}`: null;
  const y = req.body.y ? `VERTICAL_ALIGN_${req.body.y.toUpperCase()}`: null;
  let color = req.body.color;
  const value = req.body.value;
  const apply = (req.body.apply || 'xor').toLowerCase();
  if(!buff || !size || !text || !x || !y || (!color && !value)) return error503(res);
  if(!x_possible.includes(x)) return res.json({status: false, creator,message: 'x position must be center, left, right'});
  if(!y_possible.includes(y)) return res.json({status: false, creator,message: 'y position must be bottom, middle, top'});
  if(!allowed_sizes.includes(size)) return res.json({status: false, creator,message: 'size must be 8,10,12,14,16,32,64,128'});
  if(color) color = htmlColor(color.toLowerCase());
  if(!color && !value) return res.json({status: false, creator,message: 'inavlid color provided'});
  if(!color) color = value;
  const file = await write(buff.data, {size, text, x, y, color, apply });
  const p = `/temp/${req.files.file.name}`;
  fs.writeFileSync('.'+ p, file);
  return await res.json({url: 'https://' + req.hostname + p});
});

router.post('/jail', async(req, res) => {
  const buff = req.files.file;
  const text = req.body.text;
  const style = req.body.style;
  const size = req.body.size;
  const color = req.body.color;
  const border = req.body.border;
  if(!buff || !text || !style|| !size|| !color|| !border) return error503(res);
  if(!text.length > 50) return res.json({status: false, creator,message: 'text limit over, max possible:50,'});
  const file = await jail(buff.data, {path: req.files.file.name, text, style, size, color, border});
  return await res.json({url: 'https://' + req.hostname + file});
});

router.post('/wanted', async(req, res) => {
  const buff = req.files.file;
  if(!buff) return error503(res);
  const file = await wanted(buff.data, {path: req.files.file.name});
  return await res.json({url: 'https://' + req.hostname + file});
});

router.post('/wasted', async(req, res) => {
  const buff = req.files.file;
  if(!buff) return error503(res);
  const file = await wasted(buff.data, {path: req.files.file.name});
  return await res.json({url: 'https://' + req.hostname + file});
});
module.exports = router
