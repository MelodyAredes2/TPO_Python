document.getElementById('toggleBtn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('menu-hamburguesa');
  });

function desactivarclase(){
    var menu = document.getElementById('menu');
    var windowWidth = window.innerWidth;

    if (windowWidth > 769) {
        menu.classList.remove('menu-hamburguesa');
      }
      else {
        menu.classList.toggle('menu-hamburguesa');
      }
}
window.addEventListener('resize', desactivarclase);