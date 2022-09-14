const hamburger = document.querySelector('.navbar');
const wrapperMain = document.querySelector('.wrapper');
const mobileMenuContainer = document.querySelector('.mobile-menu-wrapper');
const mobileMenuItem = document.querySelectorAll('.mobile-menu-item');
const closeButton = document.querySelector('.closeBtn');
const icon = document.querySelector('.fa-bars');
const iconTimes = document.querySelector('.fa-times');
const headerAndHomepage = document.querySelector('.header-and-homepage-container');
const deviceStatusNormal = document.querySelector('.status-bar');

//mobileMenuContainer.style.display = 'none';


function mobileMenuDisplay(){

  if(icon.classList.contains('fa-bars')){
    icon.classList.replace('fa-bars', 'fa-times');
    //deviceStatusNormal.style.display = 'none';
    mobileMenuContainer.style.display = 'block';
    //mobileMenuContainer.style.marginTop = '0';
    headerAndHomepage.style.filter = 'blur(7px)';
    //deviceStatus.classList.add('brightness');
    //deviceStatusNormal.toggle('hamburger-clicked');
    
    //headerAndHomepage.style.backgroundColor = red;
  }
  else {
      mobileMenuContainer.style.display = 'none';
      icon.classList.replace('fa-times', 'fa-bars');
      headerAndHomepage.style.filter = '1';
      //headerAndHomepage.style.filter = '100%';
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
headerAndHomepage.style.filter = 'none';
icon.classList.replace('fa-times', 'fa-bars');
menu.style.display = 'none';
window.scroll({
  top: 875,
  behavior: 'smooth'
  });
});
document.querySelector('.about_mobile').addEventListener('click',() =>{
  const menu = document.querySelector('.mobile-menu-wrapper');
  menu.style.display = 'none';
  headerAndHomepage.style.filter = 'none';
  icon.classList.replace('fa-times', 'fa-bars');
  window.scroll({
    top: 4300,
    behavior: 'smooth'
    });
  });

document.querySelector('.contact_mobile').addEventListener('click',() =>{
    const menu = document.querySelector('.mobile-menu-wrapper');
    menu.style.display = 'none';
    headerAndHomepage.style.filter = 'none';
    icon.classList.replace('fa-times', 'fa-bars');
    window.scroll({
      top: 5450,
      behavior: 'smooth'
      });
});

// Details popup windows starts here

let projects = [
  {
    project1: {
      title: 'Tonic',
      experience: ['Canopy', 'Back End Dev', './images/Counter.png', '2015'],
      featuredImage: './images/SnapshootPortfolio.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent", 
      linkToLiveVersion: '',
      linkToSource: ''
    },
    project2: {
      title: 'Multi-Post Stories',
      experience: ['Canopy', './images/Counter.png', 'Back End Dev', './images/Counter.png', '2015'],
      featuredImage: './images/Snapshoot-Portfolio-2.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent", 
      linkToLiveVersion: '',
      linkToSource: ''
    },
    project3: {
      title: 'Tonic 2',
      experience: ['Canopy', 'Back End Dev', './images/Counter.png', '2015'],
      featuredImage: './images/Snapshoot-Portfolio-3.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent", 
      linkToLiveVersion: '',
      linkToSource: ''
    },
    project4: {
      title: 'Multi-Post Stories 2',
      experience: ['Canopy', 'Back End Dev', './images/Counter.png', '2015'],
      featuredImage: './images/Snapshoot-Portfolio-4.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent", 
      linkToLiveVersion: '',
      linkToSource: ''
    }
  }
]