const { fromJSON } = require("flatted");

const hamburger = document.querySelector('.navbar');
const wrapperMain = document.querySelector('.wrapper');
const mobileMenuContainer = document.querySelector('.mobile-menu-wrapper');
const mobileMenuItem = document.querySelectorAll('.mobile-menu-item');
const closeButton = document.querySelector('.closeBtn');
const icon = document.querySelector('.fa-bars');
const iconTimes = document.querySelector('.fa-times');
const headerAndHomepage = document.querySelector('.header-and-homepage-container');
const deviceStatusNormal = document.querySelector('.status-bar');
function mobileMenuDisplay(){
  if(icon.classList.contains('fa-bars')){
    icon.classList.replace('fa-bars', 'fa-times');
    mobileMenuContainer.style.display = 'block';
    headerAndHomepage.style.filter = 'blur(7px)';
  }
  else {
      mobileMenuContainer.style.display = 'none';
      icon.classList.replace('fa-times', 'fa-bars');
      headerAndHomepage.style.filter = '1';
  }
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

// Details popup windows for mobile version starts here
const projects = [
  {
      title: 'Tonic',
      counterImge: './images/Counter.png',
      experiences: ['Canopy', 'Back End Dev', 'Counter', '2015'],
      featuredImage: './images/SnapshootPortfolio.png',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      technologies: ['', 'html', 'css', 'javascript'],
      linkToLiveVersion: '',
      linkToSource: 'https://github.com/amare1990/Portfolio-Amare'
    },
    {
    title: 'Multi-Post Stories',
    counterImge: './images/Counter.png',
    experiences: ['Canopy', 'Back End Dev', '2015'],
    featuredImage: './images/Snapshoot-Portfolio-2.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ['', 'html', 'css', 'javascript'],
    linkToLiveVersion: '',
    linkToSource: ''
    },
    {
    title: 'Tonic 2',
    experiences: ['Canopy', 'Back End Dev', '2015'],
    featuredImage: './images/Snapshoot-Portfolio-3.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ['', 'html', 'css', 'javascript'],
    linkToLiveVersion: '',
    linkToSource: ''
    },
    {
      title: 'Multi-Post Stories',
      experiences: ['Canopy', 'Back End Dev', '2015'],
      featuredImage: './images/Snapshoot-Portfolio-4.png',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      technologies: ['', 'html', 'css', 'javascript'],
      linkToLiveVersion: '',
      linkToSource: ''
    }
]
if((window.matchMedia('(max-width: 767.98px')).matches) {
  const gridsContainer = document.querySelector('.grids-wrapper');
  for(let i = 0; i < projects.length; i++) {
    let gridDiv = document.createElement('div');
    gridDiv.className = `grid grid${i + 1}`;
    let li1 = '';
    let li2 = '';
    const experiences = projects[i].experiences;
    const techs = projects[i].technologies;
    for (let j = 0; j < experiences.length; j++) {
      li1 += `<li class="experience-item">${experiences[j]}</li>`;
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
              <div class="action-grid">
                <button whichProjectBtn = ${i} class="action-grid-btn" type = "button">
                  See Project
                </button>
              </div>
          </div>`;
    gridsContainer.append(gridDiv);  }

  // Popup card for mobile version ends here
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
            <li class="popup-exp-name">${experiencePopup[i]}
            </li>`;
        }
        let li2 = '';
        for (let j = 0; j < techpopup.length; j++) {
          li2 += `
            <li class="popup-exp-name">${techpopup[j]}
            </li>`;
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
          <img class = "main-image" src="${projects[index].featuredImage}" alt="Tonic Image">
          <p class = "popup-card-text">${projects[index].description}</p>
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
      }); 
    });  
  } // end of the popup main function

  showPopupWindow(); 

} //end of for mobile version

//if screen size is greater than 768px. desktop version
else {
 projects[0].title = 'Tonic';
 projects[1].title = 'Multi-Post Stories';
 projects[2].title = 'Facebook 360';
 projects[3].title = 'Uber Navigation';
 projects[0].experiences = ['Canopy', 'Back End Dev', '2015'];
 projects[1].experiences = ['Facebook', 'Full Stack Dev', '2015'];
 projects[2].experiences = ['Facebook 360', 'Full Stack Dev', '2015'];
 projects[3].experiences = ['Uber Navigation', 'Lead Developer', '2018'];
 projects[0].technologies = ['', 'Shtml', 'css', 'javascript'];
 projects[1].technologies = ['', 'html', 'Ruby on rails' ,'css', 'javascript'];
 projects[2].technologies = ['', 'html', 'Ruby on rails' ,'css', 'javascript'];
 projects[3].technologies = ['', 'html', 'Ruby on rails' ,'css', 'javascript'];
 projects[0].featuredImage = './images/Snapshoot-Portfolio-desk-1.png';
 projects[1].featuredImage = './images/Snapshoot-Portfolio-4.png';
 projects[2].featuredImage = './images/SnapshootPortfolio.png';
 projects[3].featuredImage = './images/Snapshoot-Portfolio-2.png';
 projects[0].description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
 projects[1].description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
 projects[2].description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
 projects[3].description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
for(let i = 0; i < projects.length; i++) {
  const gridsContainer = document.querySelector('.grids-wrapper');
  let gridDiv = document.createElement('div');
  gridDiv.className = `grid grid${i + 1}`;
  let gridBody = document.createElement('div');
  gridBody.className = `grid-body grid-body${i + 1}`;
  const gridTitle = document.createElement('h2');
  gridTitle.className = 'grid-title';
  const expContainer = document.createElement('ul');
  expContainer.className = 'experience-container';
  const description = document.createElement('p');
  description.className = 'project-description';
  const techsContainer = document.createElement('div');
  techsContainer.className = 'technologies';
  const actionGrid = document.createElement('button');
  actionGrid.className = 'action-grid';
  let li1 = '';
  let li2 = '';
  const experiences = projects[i].experiences;
  const techs = projects[i].technologies;
  for (let j = 0; j < experiences.length; j++) {
    li1 += `<li class="experience-item">${experiences[j]}
    </li>`;
  }
  for (let k = 0; k < techs.length; k++) {
    li2 += `<li class="tech ${techs[i]}">${techs[k]}</li>`;
  }
  gridDiv.innerHTML = `
          <div class="grid-image image${i + 1}">
            <img src="${projects[i].featuredImage}" alt="">
          </div>
          <div class = "grid-body grid-body${i + 1}">
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
              <div class="action-grid">
                <button whichProjectBtn = ${i} class="action-grid-btn" type = "button">
                  See Project
                </button>
             </div>
          </div>        
        </div>`;
  gridsContainer.append(gridDiv);
  gridBody.append(gridTitle);
  gridBody.append(expContainer);
  gridBody.append(description);
  gridBody.append(techsContainer);
  gridBody.append(actionGrid);
}

// Details popup window for desktop starts here
projects[0].description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.";
projects[1].description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.";
projects[2].description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.";
projects[3].description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.";
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
          <li class="popup-exp-name">${experiencePopup[i]}
          </li>`;
      }
      let li2 = '';
      for (let j = 0; j < techpopup.length; j++) {
        li2 += `
          <li class="popup-exp-name">${techpopup[j]}
          </li> `;
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
        <div class = "main-mage">
          <img class = "main-image-im" src="${projects[index].featuredImage}" alt="Tonic Image">
        </div>
        <div class = "popup-body">
          <p class = "popup-body-text">${projects[index].description}</p>
          <div class = "popup-techs-and-button-group">
            <ul class="popup-technologies">
              ${li2}
            </ul>
            <div class="popup-button-group">
              <div class="popup-knowBtns">
                <button type="button" class="popup-btn-text">See live</button>
                <img src="./images/popup/Icon-Export-btn1.png" alt="">
              </div>
              <div class="popup-knowBtns">
                <button type="button" class="popup-btn-text">   <a href = "https://github.com/amare1990/Portfolio-Amare">See source </a> </button>
                <img src="./images/popup/Icon-GitHub-popbt2.png " alt="">
              </div>
            </div>
          </div>
        </div>
      </div> `;
      wrapperMain.style.display = 'none';
      const closePopup = document.querySelector('.closePopup');
      closePopup.addEventListener('click', function() {
      popupWindow.classList.toggle('hide');
      wrapperMain.style.display = 'block';
      }); 
    }); 
  });  
} // end of the popup main function

showPopupWindow();  //function call
} //end of Details popup window for both version ends here

// Contact Form Validation
const emailInput = document.getElementById('email-input');
let emailPattern =  /^[a-z0-9-]+@[a-z0-9]+\.[a-z0-9.]+$/;
const btnContact = document.querySelector('.get-me-btn');
btnContact.addEventListener('click', (event) => {
  if (!emailPattern.test(emailInput.value)) {
    const error = document.querySelector('.error-message');
    error.style.display = 'block';
    event.preventDefault();
    if (emailInput.value === '') {
      error.style.display = 'none';
    }
  }
});
emailInput.addEventListener('input', () => {
  if (emailPattern.test(emailInput.value)) {
    const error = document.querySelector('.error-message');
    error.style.display = 'none';
  }
});

//Local Storage
const nameKey = document.querySelector('.name');
const emailKey = document.querySelector('.email');
const textKey = document.querySelector('.message');
const formKeyArrays = [nameKey, emailKey, textKey];


formKeyArrays.forEach((e) => {
  e.addEventListener('change', () => {
    const formObject = {
      name: formKeyArrays[0].value,
      email: formKeyArrays[1].value,
      message: formKeyArrays[2].value,
    };
    const formJSON = JSON.stringify(formObject);
    localStorage.setItem('formValues', formJSON);
  });
});