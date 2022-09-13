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

const close_window = document.querySelector('.mobile-menu-close').addEventListener('click', function(){
  close_window.style.display = 'none';
  
});

document.querySelector('.mobile-menu-close').addEventListener('click',() =>{
  const menu = document.querySelector('.mobile-menu-wrapper');
  menu.style.display = 'none';
  window.onscroll = () => { };
});  
document.querySelector('.portfolio_mobile').addEventListener('click',() =>{
const menu = document.querySelector('.mobile-menu-wrapper');
menu.style.display = 'none';
window.scroll({
  top: 875,
  behavior: 'smooth'
  });
});
document.querySelector('.about_mobile').addEventListener('click',() =>{
  const menu = document.querySelector('.mobile-menu-wrapper');
  menu.style.display = 'none';
  window.scroll({
    top: 4300,
    behavior: 'smooth'
    });
  });