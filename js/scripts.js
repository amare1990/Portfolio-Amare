const humburger = document.querySelector('.navbar');
wrapperMain = document.querySelector('.wrapper');

function mobileMenuDisplay(){
  wrapperMain.style.display = 'none';

}

humburger.addEventListener('click', mobileMenuDisplay);