function genHtml(output,json){
return `<html>
  <head></head>
  <title>Age Calculator</title>
  <script crossorigin="anonymous" src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0-alpha.1/axios.min.js"></script>
  <script type="module" crossorigin src="/func.js"></script>
  <link rel="stylesheet" href="/style.css">
  <body>
    <p>${output.data.login}</p>
    <br>
    <img src="${output.data.avatar_url}">
    <br>
    <br>${json}<br>
    <p id="like">clicked</p>
  </body>
</html>`
}

module.exports = genHtml;
