const humburger = document.querySelector('.humburger');

function mobileMenuDisplay(){
  //navbar-desk.style.display=flex;
  navbar-desk.classList.add('t');
}

humburger.addEventListener('click', mobileMenuDisplay());