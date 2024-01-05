const {
  upload
} = require('./url');
const {
  birthDetails
} = require('./age');
const {ephoto, textpro, photooxy} = require("mumaker")
const news24 = require('./news24');
const {
  wanted,
  jail,
  wasted,
  gfx1,
  gfx2,
  gfx3,
  gfx4,
  gfx5,
  gfx6,
  gfx7,
  gfx8
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
const {
  apikey,addLimit,checkkey,getLimit
} = require('./auth');
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
  gis,
  googleIt
} = require('./google');
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
  generateV2, generate
} = require('./gpt4');
const {
  Insta
} = require('./insta');
const {
  device,generateRandomString
} = require('./true');
const { fetchJson, runtime } = require('./get');
const {attp, ttp} = require('./attp');
// define datas in abouve and export by bellow funxtion
module.exports = {
   igstalk,
   attp,
   ttp,
   BufferToFile,
   fetchJson,
   runtime,
   search,
   gpt6,
   download,
   makeid, encrypt, decrypt,
   ai_image,
   ephoto,
   textpro,
   photooxy,
   xvideosSearch,
   xvideosDown,
   birthDetails,
   htmlColor,
   apikey,addLimit,checkkey,getLimit,
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
   gfx6,
   gfx7,
   gfx8,
   news24,
   write,
   createT3nsorResponse,
   gis,
   googleIt,
   lyrics,
   ChatCompletion,
   ocrSpace,
   generateV2,
   generate,
   getBuffer,
   device,
   generateRandomString,
   reddit,
   getUser,
   saveUser,
   getFBInfo
};
//end
