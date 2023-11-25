const axios = require("axios");
const cheerio = require("cheerio");

async function news() {
  const {data} = await axios.get("https://www.twentyfournews.com/");
  const $ = cheerio.load(data);
  const result = [];
  $(".row a").each((a, b) => {
    const resp = {
      'url': $(b).parent().find('a').attr('href'),
      'title': $(b).parent().find('a').text().replace(/[\n\t]/g, ''),
      'img': $(b).find("img").attr("data-src")
    };
    if (resp.url && resp.title && resp.img) {
      result.push(resp);
    }
  });
  return JSON.stringify(result, null, 2);
}
module.exports = news;
