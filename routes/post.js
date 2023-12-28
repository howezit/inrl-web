let express = require('express');
let router = express.Router();
const fs = require('fs');
const {ocrSpace} = require('../lib');

router.post('/test', function(req, res) {
  res.send(require('util').format(req.files)); // the uploaded file object
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
