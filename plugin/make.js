function genHtml(output,json){
return `<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EXTERNAL pluginS</title>
    <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet"/>
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
    <div class="profile-icon" onclick="window.location.href='/profile-menu.html';">
   <img src="${output.data.avatar_url}" alt="Profile">
 </div>
    </div>
    <div class="empty-center"></div>
    <div class="search-container">
      <input type="text" id="searchInput" placeholder="Search" oninput="performSearch(this.value)">
    </div>
    <div class="filter-container">
      <label for="sortFilter">Sort by:</label>
      <select id="sortFilter" name="sortFilter">
        <option value="all">All</option>
      </select>
    </div>
  </div>
</header>
${json}
</body>
</html>`
}

module.exports = genHtml;
