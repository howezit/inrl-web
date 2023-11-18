async function u(p, n) {
      const a = document.getElementById("like");
      a.innerHTML = 'okkk';
      alert(p+",,, "+n);
      await axios(`https://inrl-web-fkns.onrender.com/plugins/save?p=${p}&id=${n}`);
}
