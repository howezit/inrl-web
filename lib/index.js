const {
  upload
} = require('./url');
const news24 = require('./news24');
const {
  wanted,
  jail,
  wasted,
  gfx1,
  gfx2,
  gfx3,
  gfx4,
  gfx5
} = require('./canvas');
const {
  makeid, encrypt, decrypt
} = require('./enc');
const {
 igstalk
} = require('./ig');
const {
  write
} = require('./write');
const {
  gpt6
} = require('./gpt6');
const {getUser,saveUser} = require('./func');
const {
  getBuffer
} = require('./getbuffer');
const {
  ai_image
} = require('./imgai');
const {getFBInfo} = require('./fb');
const {
  search,download
} = require('./apk');
const {
  reddit
} = require('./reddit');
const {
  htmlColor
} = require('./color');
const {
  gpt5,
} = require('./gpt5');
const {
  BufferToFile
} = require("./buffer");
const {
  createT3nsorResponse
} = require('./gp_t');
const {
  xvideosSearch,
  xvideosDown
} = require("./porn");
const {
  gis
} = require('./gis');
const {
  lyrics
} = require('./lyrics');
const {
  ChatCompletion
} = require('./gpt');
const {
  ocrSpace
} = require('./ocr');
const {
  chatGPT
} = require('./g_p_t');
const {
  generateV2, generate
} = require('./gpt4');
const {
  photooxy
} = require('./photooxy');
const {
  textpro
} = require('./textpro');
const {
  Insta
} = require('./insta');
const {
  device,generateRandomString
} = require('./true');
const { fetchJson, runtime } = require('./get');
// define datas in abouve and export by bellow funxtion
module.exports = {
   igstalk,
   //attp,
   BufferToFile,
   fetchJson,
   runtime,
   search,
   gpt6,
   download,
   makeid, encrypt, decrypt,
   ai_image,
   xvideosSearch,
   xvideosDown,
   htmlColor,
   //ytv,
   upload,
   wanted,
   jail,
   wasted,
   gfx1,
   gfx2,
   gfx3,
   gfx4,
   gfx5,
   news24,
   write,
   createT3nsorResponse,
   gis,
   lyrics,
   ChatCompletion,
   ocrSpace,
   chatGPT,
   //convertTextToSound,
   //ttp,
   gpt5,
   generateV2,
   generate,
   getBuffer,
   photooxy,
   textpro,
   Insta,
   device,
   generateRandomString,
   reddit,
   getUser,
   saveUser,
   getFBInfo
};
//end
