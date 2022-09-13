const hamburger = document.querySelector('.navbar');
const wrapperMain = document.querySelector('.wrapper');
const mobileMenuContainer = document.querySelector('.mobile-menu-wrapper');
const mobileMenuItem = document.querySelectorAll('.mobile-menu-item');
const closeButton = document.querySelector('.closeBtn');
const icon = document.querySelector('.fa-bars');

//mobileMenuContainer.style.display = 'none';

function mobileMenuDisplay(){

  if(icon.classList.contains('fa-bars')){
    icon.classList.replace('fa-bars', 'fa-times');
    mobileMenuContainer.style.display = 'block';
  }
  else {
      icon.classList.replace('fa-times', 'fa-bars');
      mobileMenuContainer.style.display = 'none';
  }

  //wrapperMain.style.display = 'none';
  
}

hamburger.addEventListener('click', mobileMenuDisplay);
closeButton.addEventListener('click', mobileMenuDisplay);