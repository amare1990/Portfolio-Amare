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
      title: 'Tonic',
      experience: ['Canopy', 'Back End Dev', './images/Counter.png', '2015'],
      featuredImage: './images/SnapshootPortfolio.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent", 
      linkToLiveVersion: '',
      linkToSource: ''
    },
    {
    title: 'Multi-Post Stories',
    experience: ['Canopy', './images/Counter.png', 'Back End Dev', './images/Counter.png', '2015'],
    featuredImage: './images/Snapshoot-Portfolio-2.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent", 
    linkToLiveVersion: '',
    linkToSource: ''
    },
    {
    title: 'Tonic 2',
    experience: ['Canopy', 'Back End Dev', './images/Counter.png', '2015'],
    featuredImage: './images/Snapshoot-Portfolio-3.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent", 
    linkToLiveVersion: '',
    linkToSource: ''
    },
    {
      title: 'Multi-Post Stories 2',
      experience: ['Canopy', 'Back End Dev', './images/Counter.png', '2015'],
      featuredImage: './images/Snapshoot-Portfolio-4.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent", 
      linkToLiveVersion: '',
      linkToSource: ''
    }
]

for(let i = 0; i < projects.length; i++) {
  let cardWork = document.createElement('div');
  cardWork.className = `card card${i + 1}`;
  let li = '';
  const eachObj = projects[i];
  const tech = projects[i].technologies;
  for (let j = 0; j < tech.length; j += 1) {
    li += `<li class="card-list-item">${tech[j]}</li>`;
  }
  cardWork.innerHTML = `
          <div class="card-image image${i + 1}">
              <img src="${eachObj.featuredImage}" alt="">
            </div>
            <div class="card-body">
              <h3 class="project-title">${eachObj.title}</h3>
              <ul class="card-list">
              ${li}
              </ul>
              <button myIndex=${i} type="button" class="card-btn">
                See this project &rarr;
              </button>
          </div>
`;
  cardContainer.append(cardDiv);
}


//Popup window starts here
const modal = document.querySelector('.modal');

const showModal = () => {
  const btn = document.querySelectorAll('.card-btn');
  btn.forEach((e) => {
    e.addEventListener('click', () => {
      const index = e.getAttribute('myIndex');
      modal.classList.toggle('hidden');
      const tech = projects[index].technologies;
      let li = '';
      for (let i = 0; i < tech.length; i += 1) {
        li += `
 <li class="modal-list-item">${tech[i]}</li>
`;
      }
      modal.innerHTML = `
      <div class="modal-content">
      <div class="modal-header">
        <span class="closeModal"><i class="fa-solid fa-xmark fa-2xl"></i></span>
        <h2>${projects[index].title}</h2>
        <ul class="modal-list">
          ${li}
        </ul>
      </div>
      <div class="modal-body">
        <img src="${projects[index].featured_image}" alt="Project image">
        <p>${projects[index].description}</p>
        <div class="button-wrapper">
          <button type="button" class="modal-button">See live<i class="fa-solid fa-arrow-up-right-from-square"
              data-fa-transform="grow-15 right-100"></i></button><button type="button" class="modal-button">See source<i
              class="modal-icon fa-brands fa-github" data-fa-transform="grow-15 right-90"></i></button>
        </div>
        <div class="projects-navigation">
          <span><i class="fa-solid fa-arrow-left-long"></i> Previous Project </span><span>Next Project <i class="fa-solid fa-arrow-right-long"></i></span>
        </div>
      </div>
    </div>`;
      const close = document.querySelector('.closeModal');
      close.addEventListener('click', () => modal.classList.toggle('hidden'));
    });
  });
};
showModal();

//popup window ends here
