function genHtml(output,json){
return `<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EXTERNAL pluginS</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script crossorigin="anonymous" src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0-alpha.1/axios.min.js"></script>
  <link rel="stylesheet" href="/style.css">
<script>`+
  function copyText(link, key) {
    let textArea = document.createElement("textarea");
    textArea.value = link;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    document.querySelector(`#${key} .copy-button`).innerText = 'Copied!';
  }+
  async function ulike(boxId, name) {
    let likeIcon = document.querySelector(`#${boxId} .like-icon`);
    let likeCounter = document.querySelector(`#${boxId} .like-count`);
    const {data} = await axios(`https://inrl-web-fkns.onrender.com/plugins/save?p=${boxId}&id=${name}`).catch(e=>console.log(e));
    likeIcon.onclick = null;
    likeIcon.style.color = likeIcon.style.color == 'white'?'red':'white';
    if (data.status.includes('disliked')) {
      likeCounter.innerText = parseInt(likeCounter.innerText) - 1;
    } else {
      likeCounter.innerText = parseInt(likeCounter.innerText) + 1;
    }
  }+`
</script>
</head>
<body>
<header>
  <div class="header-content">
    <div class="profile-icon" onclick="window.location.href='/plugins';">
<img src="${output.data.avatar_url}" alt="Profile" style="width: 30px; height: 30px;">
 </div>
    </div>
    <div class="external-plugins-text">External Plugins</div>
  </div>
</header>
<br><br>
${json}
</body>
</html>`
}

module.exports = genHtml;
