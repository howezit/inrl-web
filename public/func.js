const a = document.getElementById("like");

async function u(p, n) {
      await axios(`/plugins/save?p=${p}&id=${n}`);
      a.innerHTML = 'okkk';
}
