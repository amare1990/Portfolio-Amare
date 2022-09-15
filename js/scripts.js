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

const projects = [
  {
      title: 'Tonic',
      counterImge: './images/Counter.png',
      experiences: ['Canopy', 'Counter', 'Back End Dev', 'Counter', '2015'],
      featuredImage: './images/SnapshootPortfolio.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent", 
      technologies: ['html', 'css', 'javascript'],
      linkToLiveVersion: '',
      linkToSource: ''
    },
    {
    title: 'Multi-Post Stories',
    counterImge: './images/Counter.png',
    experiences: ['Canopy', 'Counter', 'Back End Dev', 'Counter', '2015'],
    featuredImage: './images/Snapshoot-Portfolio-2.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent", 
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '',
    linkToSource: ''
    },
    {
    title: 'Tonic 2',
    experiences: ['Canopy', 'Counter', 'Back End Dev', 'Counter', '2015'],
    featuredImage: './images/Snapshoot-Portfolio-3.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent", 
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '',
    linkToSource: ''
    },
    {
      title: 'Multi-Post Stories 2',
      experiences: ['Canopy', 'Back End Dev', 'Counter', '2015'],
      featuredImage: './images/Snapshoot-Portfolio-4.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent", 
      technologies: ['html', 'css', 'javascript'],
      linkToLiveVersion: '',
      linkToSource: ''
    }
]

const gridsContainer = document.querySelector('.grids-wrapper');
for(let i = 0; i < projects.length; i++) {
  let gridDiv = document.createElement('div');
  gridDiv.className = `grid grid${i + 1}`;
  let li1 = '';
  let li2 = '';
  //const project = projects[i];
  const experiences = projects[i].experiences;
  const techs = projects[i].technologies;
  for (let j = 0; j < experiences.length; j++) {
    li1 += `<li class="experience-item">${experiences[j]}</li>`;
    /* if(experiences[j] == 'Counter'){
      let sr = ${projects[i].counterImge};
      let im = <img src = ${sr} alt=''>;
      li1 += '<li class='experience-item' > ${im}</li>'; 
    } */
  }

  for (let k = 0; k < techs.length; k++) {
    li2 += `<li class="tech">${techs[k]}</li>`;
  }

  gridDiv.innerHTML = `
          <div class="grid-image image${i + 1}">
            <img src="${projects[i].featuredImage}" alt="">
          </div>

          <h2 class="grid-title">${projects[i].title}</h2>
          <ul class="experience-container">
            ${li1}
          </ul>
          <p class ="project-description"> 
             ${projects[i].description}
          </p>
          <div class = "technologies"
            <ul class = "tech-container>
              ${li2}
            </ul>
          </div>
          <div class="action-grid-container"
            <div class="action-grid">
              <button whichProjectBtn = ${i} class="action-grid-btn" type = "button">
                See Project
              </button>
            </div>
          </div> `;
  gridsContainer.append(gridDiv);
}

// Popup window starts here
const popupWindow = document.querySelector('.popup-card-wrapper');
function showPopupWindow() {
  const btn = document.querySelectorAll('.action-grid-btn');
  btn.forEach(function (e) {
    e.addEventListener('click', function() {
      const index = e.getAttribute('whichProjectBtn');
      popupWindow.classList.toggle('hide');
      const experiencePopup = projects[index].experiences;
      const techpopup = projects[index].technologies;
      let li1 = '';
      for (let i = 0; i < experiencePopup.length; i++) {
        li1 += `
          <li class="popup-exp-name">${experiencePopup[i]}</li>
        `;
      }
      let li2 = '';
      for (let j = 0; j < techpopup.length; j++) {
        li2 += `
          <li class="popup-exp-name">${techpopup[j]}</li>
          `;
      }
      popupWindow.innerHTML = `
      <div class=".popup-card">
        <div class="popup-title-and-closeIcon-container">
          <h2 class="popup-project-title"> ${projects[index].title}
          <h2>
          <i class="fa fa-times closePopup"></i> 
        </div>
        <ul class="popup-experience">
          ${li1}
        </ul>
        <img src="${projects[index].featuredImage}" alt="Tonic Image">
        <p>${projects[index].description}</p>
        <ul class="popup-technologies">
          ${li2}
        </ul>
        <div class="popup-button-group">
          <div class="popup-knowBtns">
            <button type="button" class="popup-btn-text">See live</button>
            <img src="./images/popup/Icon-Export-btn1.png" alt="">
          </div>
          <div class="popup-knowBtns">
            <button type="button" class="popup-btn-text">See source</button>
            <img src="./images/popup/Icon-GitHub-popbt2.png " width="24px" height="24px" alt="">
          </div>
        </div>
      </div> `;
      wrapperMain.style.display = 'none';
      const closePopup = document.querySelector('.closePopup');
      closePopup.addEventListener('click', function() {
      popupWindow.classList.toggle('hide');
      wrapperMain.style.display = 'block';
      }); 
    }); //button event
  });  //end of foreach tracking for each button
} // end of the popup main function

showPopupWindow(); 