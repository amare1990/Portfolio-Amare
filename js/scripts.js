const hamburger = document.querySelector('.navbar');
const wrapperMain = document.querySelector('.wrapper');
const mobileMenuContainer = document.querySelector('.mobile-menu-wrapper');
const mobileMenuItem = document.querySelectorAll('.mobile-menu-item');
const closeButton = document.querySelector('.closeBtn');
const icon = document.querySelector('.fa-bars');
const iconTimes = document.querySelector('.fa-times');
const homepage = document.querySelector('.container-homepage');

//mobileMenuContainer.style.display = 'none';


function mobileMenuDisplay(){

  if(icon.classList.contains('fa-bars')){
    icon.classList.replace('fa-bars', 'fa-times');
    mobileMenuContainer.style.display = 'block';
    homepage.style.filter = 'blur(2px)';
  }
  else {
      mobileMenuContainer.style.display = 'none';
      icon.classList.replace('fa-times', 'fa-bars');
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

document.querySelector('.contact_mobile').addEventListener('click',() =>{
    const menu = document.querySelector('.mobile-menu-wrapper');
    menu.style.display = 'none';
    window.scroll({
      top: 5450,
      behavior: 'smooth'
      });
    });

 