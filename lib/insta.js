const snapsave = require("snapsave-downloader-itj")


async function Insta(url) {
 const {data} = await snapsave(url);
  return data;
}

module.exports = {Insta};
