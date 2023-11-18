const a = document.getElementById("like");

async function u(p, n) {
      alert(p+",,, "+n);
      await axios(`https://inrl-web-fkns.onrender.com/plugins/save?p=${p}&id=${n}`);
      a.innerHTML = 'okkk';
}
