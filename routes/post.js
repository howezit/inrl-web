require('../settings');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const {write,htmlColor} = require('../lib');
const x_possible = ['HORIZONTAL_ALIGN_CENTER', 'HORIZONTAL_ALIGN_LEFT', 'HORIZONTAL_ALIGN_RIGHT'];
const y_possible = ['VERTICAL_ALIGN_BOTTOM', 'VERTICAL_ALIGN_MIDDLE', 'VERTICAL_ALIGN_TOP'];
router.post('/writer', function(req, res) {
  const buff = req.files.file.data;
  const size = req.body.size ? `FONT_SANS_${req.body.size}_BLACK` : null;
  const text = req.body.text;
  const x = req.body.x ? `HORIZONTAL_ALIGN_${req.body.x.toUpperCase()}`: null;
  const y = req.body.y ? `VERTICAL_ALIGN_${req.body.x.toUpperCase()}`: null;
  const color = req.body.color;
  if(!buff || !size || !text || !x || !y || !color) return error503(res);
  if(!x_possible.includes(x)) return res.json({status: false, creator,message: 'x position must be center, left, right'});
  if(!y_possible.includes(y)) return res.json({status: false, creator,message: 'y position must be bottom, middle, top'});
  if(!htmlColor(color.toLowerCase())) return res.json({status: false, creator,message: 'inavlid color provided'});
  const file = await write(buff, {size, text, x, y, color: color.toLowerCase()});
  return await res.end(file);
});

router.post('/ocr', async (req, res, next) => {
try {
	return res.send({data:require('util').format(req.files)});
const data = req.files.data;
console.log(data);

const file = "./ocrimg.jpeg";
fs.writeFileSync(file, data);
const ress = await ocrSpace(file);
const a = JSON.parse(JSON.stringify(ress))
if (!a.ParsedResults[0].ParsedText) return await res.json({ status : false, creator : `${creator}`, message : "request Failed with StatusCode 403!" });
return await res.json({
                       status : true,
                       creator : `${creator}`,
	               result : a.ParsedResults[0].ParsedText
             });
} catch (e) {
     return await res.json({ status : false, creator : `${creator}`, message : "request Failed with StatusCode 401!" });
  }
})

module.exports = router
