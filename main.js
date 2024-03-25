const nav = document.getElementById('nav');
const dropdown = document.getElementById('dropdown');
const dropdown_menu = document.getElementById('dropdown-menu');
const dropdonw_links = document.getElementById('dropdown-links');
let windowWidth = window.innerWidth;

window.addEventListener('resize', function() {
  const newWidth = window.innerWidth;

  if (newWidth !== windowWidth) {
    windowWidth = newWidth;

    if(windowWidth < 900){
        dropdown.style.display = 'flex';
        nav.style.display = 'none';
    }
    else{
        dropdown.style.display = 'none';
        nav.style.display = 'flex';
    }
  }
});

let isVisible = false;

if ( window.innerWidth < 1260 ) {
  dropdown.style.display = 'flex';
  nav.style.display = 'none';
}

dropdown_menu.onclick = function scale(){
    if(isVisible == false){
        dropdonw_links.style.transform = "scale(1)";
        isVisible = true
    }
    else if(isVisible == true){
        dropdonw_links.style.transform = "scale(0)";
        isVisible = false
    }
};
