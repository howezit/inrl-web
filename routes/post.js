require('../settings');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const {write} = require('../lib');

router.post('/writer', function(req, res) {
  const buff = req.files.file.data;
  const size = req.body.size ? `FONT_SANS_${req.body.size}_BLACK` : null;
  const text = req.body.text;
  const x = req.body.x;
  const y = req.body.y;
  const color = req.body.color;
  if(!buff || !size || !text || !x || !y || !color) return error503(res);
  const file = await write(buff, {size, text, x, y, color});
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
