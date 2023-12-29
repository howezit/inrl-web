require('../settings');
const express = require('express');
const router = express.Router();
const fs = require('fs');

const {write,htmlColor, makeid} = require('../lib');
const x_possible = ['HORIZONTAL_ALIGN_CENTER', 'HORIZONTAL_ALIGN_LEFT', 'HORIZONTAL_ALIGN_RIGHT'];
const y_possible = ['VERTICAL_ALIGN_BOTTOM', 'VERTICAL_ALIGN_MIDDLE', 'VERTICAL_ALIGN_TOP'];
const allowed_sizes = ['FONT_SANS_8_BLACK', 'FONT_SANS_10_BLACK', 'FONT_SANS_12_BLACK', 'FONT_SANS_14_BLACK', 'FONT_SANS_16_BLACK', 'FONT_SANS_32_BLACK', 'FONT_SANS_64_BLACK', 'FONT_SANS_128_BLACK'];

router.post('/writer', async(req, res) => {
  const id = makeid();
  const dl = req.files.file;
  await dl.mv('./temp/'+id+dl.name);
  return res.end(fs.readFileSync('./temp/'+id+dl.name));
  const size = req.body.size ? `FONT_SANS_${req.body.size}_BLACK` : null;
  const text = req.body.text;
  const x = req.body.x ? `HORIZONTAL_ALIGN_${req.body.x.toUpperCase()}`: null;
  const y = req.body.y ? `VERTICAL_ALIGN_${req.body.y.toUpperCase()}`: null;
  const color = req.body.color;
  if(!buff || !size || !text || !x || !y || !color) return error503(res);
  if(!x_possible.includes(x)) return res.json({status: false, creator,message: 'x position must be center, left, right'});
  if(!y_possible.includes(y)) return res.json({status: false, creator,message: 'y position must be bottom, middle, top'});
  if(!allowed_sizes.includes(size)) return res.json({status: false, creator,message: 'size must be 8,10,12,14,16,32,64,128'});
  const coler = htmlColor(color.toLowerCase());
  if(!coler) return res.json({status: false, creator,message: 'inavlid color provided'});
  const file = await write(fs.readFileSync('./temp/test.jpeg'), {size, text, x, y, color: coler });
  res.set('content-type', 'image/jpeg');
  return await res.send(file);
});

module.exports = router
