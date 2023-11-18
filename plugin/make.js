function genHtml(output,json){
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
    <script>
const a = document.getElementById("like");
async function u(${p}, ${n}) {
      alert(${p}",,, "+${n});
      await axios(https://inrl-web-fkns.onrender.com/plugins/save?p=p&id=n);
      a.innerHTML = 'okkk';
}
    </script>
  </body>
</html>`
}

module.exports = genHtml;
