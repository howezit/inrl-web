require('../settings');
const express = require('express');
const router = express.Router();
const fs = require('fs');

const {write, htmlColor, ocrSpace, wanted, jail, wasted, gfx1, gfx2, gfx3, gfx4, gfx5, upload} = require('../lib');
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

router.post('/ocr', async(req, res) => {
  const buff = req.files.file;
  const apiKey = req.body.key;
  if(!buff || !apiKey) return error503(res);
  const p = `./temp/${req.files.file.name}`;
  fs.writeFileSync(p, buff.data);
  const ocr = await ocrSpace(p, {apiKey});
  return await res.json(ocr);
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

router.post('/gfx1', async(req, res) => {
  const path = req.body.path;
  const text = req.body.text;
  const color = req.body.color;
  const border = req.body.border;
  if(!path || !text || !color || !border) return error503(res);
  const file = await gfx1({path, text, color, border});
  return await res.json({url: 'https://' + req.hostname + file});
});

router.post('/gfx2', async(req, res) => {
  const path = req.body.path;
  const text = req.body.text;
  const color = req.body.color;
  const border = req.body.border;
  if(!path || !text || !color || !border) return error503(res);
  const file = await gfx2({path, text, color, border});
  return await res.json({url: 'https://' + req.hostname + file});
});

router.post('/gfx3', async(req, res) => {
  const path = req.body.path;
  const text = req.body.text;
  const color = req.body.color;
  const border = req.body.border;
  if(!path || !text || !color || !border) return error503(res);
  const file = await gfx3({path, text, color, border});
  return await res.json({url: 'https://' + req.hostname + file});
});

router.post('/gfx4', async(req, res) => {
  const path = req.body.path;
  const text = req.body.text;
  const bg = req.body.bg;
  const color = req.body.color;
  const border = req.body.border;
  if(!path || !text || !color || !border  || !bg) return error503(res);
  const file = await gfx4({path, text, color, border, bg});
  return await res.json({url: 'https://' + req.hostname + file});
});

router.post('/gfx5', async(req, res) => {
  const path = req.body.path;
  const text = req.body.text;
  const bg = req.body.bg;
  const color = req.body.color;
  const border = req.body.border;
  if(!path || !text || !color || !border || !bg) return error503(res);
  const file = await gfx5({path, text, color, border, bg});
  return await res.json({url: 'https://' + req.hostname + file});
});

router.post('/url', async(req, res) => {
  const buff = req.files.file;
  if(!buff) return error503(res);
  const p = `./temp/${req.files.file.name}`;
  fs.writeFileSync(p, buff.data);
  const url = await upload({path:req.files.file.name});
  if(!url.status) return res.json({status: false, message: 'rejected'});
  return await res.json(url);
});

module.exports = router
