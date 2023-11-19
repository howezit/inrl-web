function genHtml(output,json){
return `<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Age Calculator</title>
  <script crossorigin="anonymous" src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0-alpha.1/axios.min.js"></script>
  <link rel="stylesheet" href="/nstyle.css">
  </head>
  <body>
    <p>${output.data.login}</p>
    <br>
    <img src="${output.data.avatar_url}">
    <br>
    <br>${json}<br>
    <p id="like">clicked</p>
    <script>`+
      async function u(p, n) {
        const {data} = await axios(`https://inrl-web-fkns.onrender.com/plugins/save?p=${p}&id=${n}`);
        document.getElementById(p).innerText = data.status;
      }
    +`</script>
  </body>
</html>`
}

module.exports = genHtml;
