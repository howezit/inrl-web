const axios = require('axios');
async function search(args) {
    let res = await axios('http://ws75.aptoide.com/api/7/apps/search?query='+args);
    let ress = {}
    ress = res.data.datalist.list.map(v => {
      return {
        name: v.name,
        id: v.package
      }
    })
    return ress
  }
 async function download(id) {
    let res = await axios('http://ws75.aptoide.com/api/7/apps/search?query='+id+"&limit=1");
    return {
      icon: res.data.datalist.list[0].icon,
      dev: res.data.datalist.list[0].store.name,
      name: res.data.datalist.list[0].name,
      link: res.data.datalist.list[0].file.path
    }
  }
module.exports={search,download};
