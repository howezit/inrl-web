const axios = require('axios')
const cheerio = require('cheerio')


async function lyrics(search) {
  const searchUrl = `https://www.musixmatch.com/search/${search}`;
  const searchResponse = await axios.get(searchUrl);
  const searchHtml = searchResponse.data;
  const $ = cheerio.load(searchHtml);

  const link = $('div.media-card-body > div > h2').find('a').attr('href');
  const lyricsUrl = `https://www.musixmatch.com${link}`;
  const lyricsResponse = await axios.get(lyricsUrl);
  const lyricsHtml = lyricsResponse.data;
  const $$ = cheerio.load(lyricsHtml);

  const thumb = $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src');
  const lyrics1 = $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics > span > p > span').text().trim();
  const lyrics2 = $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics > span > div > p > span').text().trim();
  const title = $$('#site > div > div > div > main > div > div > div.mxm-track-banner.top > div > div > div').find('div.col-sm-10.col-md-8.col-ml-9.col-lg-9.static-position > div.track-title-header > div.mxm-track-title > h1').text().trim().replace('Lyrics','')
  const artist = $$('#site > div > div > div > main > div > div > div > div > div > div > div> div > div > h2 > span').text().trim();
  if (!thumb || (!lyrics1 && !lyrics2)) {
    throw new Error('No se encontraron letras para la canción');
  }
  const lyrics = `${lyrics1}\n${lyrics2}`;
  return { thumb: `https:${thumb}`, lyrics, title, artist };
}

const pinterest = async(query) => {
let {data} = await axios(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
data = data.resource_response.data.results.map(a => a.images.orig)
return data;
}

async function reddit(options){
let page = `https://www.reddit.com/r/${options.replace(/ /gi,'+')}.json?sort=top&t=daily`;
    let {data} = await axios({
                    method:"get",
                    url:page
                })
                    let basic = data.data.children
                    let counting = basic.length;
                    
                    let paket = []
                    for(let i = 0;i < counting; i++){
                        let allData = data.data.children[i].data
                        let title = allData.title
                        let img = allData.url
                        let link = 'https://www.reddit.com' + allData.permalink
                        let thumbsup = allData.ups
                        let thumbsdown = allData.downs
                        let nsfw = allData.over_18
                        let comment = allData.num_comments
                        let linkFrom = allData.subreddit_name_prefixed
                        let authorUser = allData.author
                        let timeCreate = allData.created_utc;
                        let subreddit = allData.subreddit
                        let id = allData.id
                        let voteRatio = allData.upvote_ratio
                        let kerangka = {
                            "title":title,
                            "image":img,
                            "link":link,
                            "like":thumbsup,
                            "dislike":thumbsdown,
                            "comment":comment,
                            "subredditName":linkFrom,
                            "author":authorUser,
                            "dateCreated_UTC":timeCreate,
                            "subreddit":subreddit,
                            "id":id,
                            "voteRatio":voteRatio,
                            "nsfw":nsfw
                        }
                        paket.push(kerangka)
                    }
                    return paket;
}

module.exports = {lyrics,pinterest,reddit};
