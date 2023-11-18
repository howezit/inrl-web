function genHtml(output,json, func){
return `<html>
  <head></head>
  <title>Age Calculator</title>
  <script crossorigin="anonymous" src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0-alpha.1/axios.min.js"></script>
  <link rel="stylesheet" href="/style.css">
  <body>
    <p>${output.data.login}</p>
    <br>
    <img src="${output.data.avatar_url}">
    <br>
    <br>${json}<br>
    <p id="like">clicked</p>
    <script>`+
      async function u(p, n) {
        const text = document.getElementById("like").innerText;
        document.getElementById("like").innerText = "COPIED";
      }
    +`</script>
  </body>
</html>`
}

module.exports = genHtml;
