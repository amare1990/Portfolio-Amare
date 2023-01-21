const hamburger = document.querySelector('.navbar');
const wrapperMain = document.querySelector('.wrapper');
const mobileMenuContainer = document.querySelector('.mobile-menu-wrapper');
// const mobileMenuItem = document.querySelectorAll('.mobile-menu-item');
const closeButton = document.querySelector('.closeBtn');
const icon = document.querySelector('.fa-bars');
// const iconTimes = document.querySelector('.fa-times');
const headerAndHomepage = document.querySelector('.header-and-homepage-container');
// const deviceStatusNormal = document.querySelector('.status-bar');

// mobileMenuContainer.style.display = 'none';

function mobileMenuDisplay() {
  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-times');
    // deviceStatusNormal.style.display = 'none';
    mobileMenuContainer.style.display = 'block';
    // mobileMenuContainer.style.marginTop = '0';
    headerAndHomepage.style.filter = 'blur(7px)';
    // deviceStatus.classList.add('brightness');
    // deviceStatusNormal.toggle('hamburger-clicked');

    // headerAndHomepage.style.backgroundColor = red;
  } else {
    mobileMenuContainer.style.display = 'none';
    icon.classList.replace('fa-times', 'fa-bars');
    headerAndHomepage.style.filter = '1';
    // headerAndHomepage.style.filter = '100%';
  }
  // wrapperMain.style.display = 'none';
}

hamburger.addEventListener('click', mobileMenuDisplay);
closeButton.addEventListener('click', mobileMenuDisplay);

const closeWindow = document.querySelector('.mobile-menu-close').addEventListener('click', () => {
  closeWindow.style.display = 'none';
});

document.querySelector('.mobile-menu-close').addEventListener('click', () => {
  const menu = document.querySelector('.mobile-menu-wrapper');
  menu.style.display = 'none';
  window.onscroll = () => { };
});

document.querySelector('.portfolio_mobile').addEventListener('click', () => {
  const menu = document.querySelector('.mobile-menu-wrapper');
  headerAndHomepage.style.filter = 'none';
  icon.classList.replace('fa-times', 'fa-bars');
  menu.style.display = 'none';
  window.scroll({
    top: 875,
    behavior: 'smooth',
  });
});
document.querySelector('.about_mobile').addEventListener('click', () => {
  const menu = document.querySelector('.mobile-menu-wrapper');
  menu.style.display = 'none';
  headerAndHomepage.style.filter = 'none';
  icon.classList.replace('fa-times', 'fa-bars');
  window.scroll({
    top: 4300,
    behavior: 'smooth',
  });
});

document.querySelector('.contact_mobile').addEventListener('click', () => {
  const menu = document.querySelector('.mobile-menu-wrapper');
  menu.style.display = 'none';
  headerAndHomepage.style.filter = 'none';
  icon.classList.replace('fa-times', 'fa-bars');
  window.scroll({
    top: 5450,
    behavior: 'smooth',
  });
});

// Values initially for mobile version
const projects = [
  {
    title: 'Todos List',
    experiences: ['Microverse Inc', 'Front End Dev', '2022'],
    featuredImage: './images/ictd4a-images/todos-mob.png',
    description: 'Developed with HTML, CSS and JavaScript, this web application allows customers to add tasks to be completed today, edit the tasks, and interactively delete completed tasks both on the screen and in the localStorage object.',
    technologies: ['', 'html', 'css', 'javascript'],
    linkToLiveVersion: 'https://magical-eclair-b90bd7.netlify.app/',
    linkToSource: 'https://github.com/amare1990/To-do-List',
  },
  {
    title: 'LeaderBoard',
    experiences: ['Microverse Inc', 'Front End Dev', '2022'],
    featuredImage: './images/ictd4a-images/leaderboard-mob.png',
    description: 'LeaderBoard is a web application project that allows people to submit score of the player and see the score on the screen. It stores and fetches score result fom the remore API. HTML, CSS, and mainly JavaScript is used to implement this project.',
    technologies: ['', 'html', 'css', 'javascript'],
    linkToLiveVersion: 'https://friendly-croquembouche-2faf30.netlify.app/',
    linkToSource: 'https://github.com/amare1990/LeaderBoard',
  },
  {
  title: 'Awesome Books',
  counterImge: './images/Counter.png',
  experiences: ['Microverse Inc', 'Front End Dev', '2022'],
  featuredImage: './images/ictd4a-images/awesomebook-mob.png',
  description: 'This project is a web application project that allows the client to add a book and dynamically display all the added books.',
  technologies: ['', 'html', 'css', 'javascript'],
  linkToLiveVersion: '',
  linkToSource: 'https://github.com/amare1990/AwesomeBooks',
},
{
  title: 'Math Magicians',
  counterImge: './images/Counter.png',
  experiences: ['Microverse Inc', 'Front End Dev', '2022'],
  featuredImage: './images/ictd4a-images/math-magician-mob.png',
  description: 'This project is a claculator web application created by React JavaScript library.  It allowers users to calculate basic mathematics. The objective of this project is to practice how to create react components, use react props and states.',
  technologies: ['', 'html', 'css', 'javascript'],
  linkToLiveVersion: '',
  linkToSource: 'https://github.com/amare1990/math-magicians',
}
];

// Details popup windows starts here

function mobileVersion() {
  const gridsContainer = document.querySelector('.grids-wrapper');
  for (let i = 0; i < projects.length; i += 1) {
    const gridDiv = document.createElement('div');
    gridDiv.className = `grid grid${i + 1}`;
    let li1 = '';
    let li2 = '';
    // const project = projects[i];
    const { experiences } = projects[i];
    const techs = projects[i].technologies;
    for (let j = 0; j < experiences.length; j += 1) {
      li1 += `<li class="experience-item">${experiences[j]}</li>`;
    }

    for (let k = 0; k < techs.length; k += 1) {
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
    gridsContainer.append(gridDiv);
  }

  // Popup window for mobile version starts here
  const popupWindow = document.querySelector('.popup-card-wrapper');
  function showPopupWindow() {
    const btn = document.querySelectorAll('.action-grid-btn');
    btn.forEach((e) => {
      e.addEventListener('click', () => {
        const index = e.getAttribute('whichProjectBtn');
        popupWindow.classList.toggle('hide');
        const experiencePopup = projects[index].experiences;
        const techpopup = projects[index].technologies;
        let li1 = '';
        for (let i = 0; i < experiencePopup.length; i += 1) {
          li1 += `
              <li class="popup-exp-name">${experiencePopup[i]}</li>
            `;
        }
        let li2 = '';
        for (let j = 0; j < techpopup.length; j += 1) {
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
            <img class = "main-image" src="${projects[index].featuredImage}" alt="Tonic Image">
            <p class = "popup-card-text">${projects[index].description}</p>
            <ul class="popup-technologies">
              ${li2}
            </ul>
            <div class="popup-button-group">
              <div class="popup-knowBtns">
                <button type="button" class="popup-btn-text"> <a href = '${projects[index].linkToLiveVersion}'> See live </a> </button>
                <img src="./images/popup/Icon-Export-btn1.png" alt="">
              </div>
              <div class="popup-knowBtns">
                <button type="button" class="popup-btn-text"> <a href = '${projects[index].linkToSource}'>See source </a> </button>
                <img src="./images/popup/Icon-GitHub-popbt2.png " width="24px" height="24px" alt="">
              </div>
            </div>
          </div> `;

        /* const popupCardWrapper = document.querySelector('.popup-card-wrapper');
               const popupCard = document.querySelector('.popup-card');
               popupWindow.append(popupCard);
            */

        wrapperMain.style.display = 'none';
        const closePopup = document.querySelector('.closePopup');
        closePopup.addEventListener('click', () => {
          popupWindow.classList.toggle('hide');
          wrapperMain.style.display = 'block';
        });
      }); // button event
    }); // end of foreach tracking for each button
  } // end of the popup main function

  showPopupWindow();
} // end of for mobile version

// if screen size is greater than 768px
function desktopVersion() {
  projects[0].title = 'ICTD4A';
  projects[1].title = 'JavaScript Capstone Project';
  projects[2].title = 'Todos List';
  projects[3].title = 'LeaderBoard';

  projects[0].experiences = ['Microverse Inc', 'Front-end Dev', '2022'];
  projects[1].experiences = ['Microverse Inc', 'Front-end Dev Dev', '2022'];
  projects[2].experiences = ['Microverse Inc', 'Front-end Dev', '2022'];
  projects[3].experiences = ['Microverse Inc', 'Front-end Dev', '2022'];

  projects[0].technologies = ['', 'html', 'css', 'javascript'];
  projects[1].technologies = ['', 'html', 'css', 'javascript'];
  projects[2].technologies = ['', 'html', 'css', 'javascript'];
  projects[3].technologies = ['', 'html', 'css', 'javascript'];

  projects[0].featuredImage = './images/ictd4a-images/ictd4a-desk.png';
  projects[1].featuredImage = './images/ictd4a-images/canadian-food.png';
  projects[2].featuredImage = './images/ictd4a-images/todos.png';
  projects[3].featuredImage = './images/ictd4a-images/leaderboard.png';

  projects[0].description = 'This is a web application project for the Research Conference Call for Paper. It is developed as a Microverse Capstone project for Module 1. It is developed using HTML, CSS, and JavaSript. It is a two page web application that is interactive and dynamic as it is developed using JavaScript.';
  projects[1].description = 'This project is a JavaScript capstone project from Microverse for Module 2. As a capstone project, it requires the previous advanced four weeks JavaScript intensive learning and some web development background. this project is very dynamic web application that fetches meal from the Canadian meal API. It allows customers to like and comment the meal ';
  projects[2].description = 'Developed with HTML, CSS and JavaScript, this web application allows customers to add tasks to be completed today, edit the tasks, and interactively delete completed tasks both on the screen and in the localStorage object.';
  projects[3].description = 'LeaderBoard is a web application project that allows people to submit score of the player and see the score on the screen. It stores and fetches score result fom the remore API. HTML, CSS, and mainly JavaScript is used to implement this project.';

  projects[0].linkToLiveVersion = 'https://amare1990.github.io/ICT4DA/';
  projects[0].linkToSource = 'https://github.com/amare1990/ICT4DA';

  projects[1].linkToLiveVersion = 'https://www.loom.com/share/2e5639ffe4904400ad7a9baaba57e9f7';
  projects[1].linkToSource = 'https://github.com/amare1990/JavaScript-Capstone-Project';

  projects[2].linkToLiveVersion = 'https://magical-eclair-b90bd7.netlify.app/';
  projects[2].linkToSource = 'https://github.com/amare1990/To-do-List';

  projects[3].linkToLiveVersion = 'https://friendly-croquembouche-2faf30.netlify.app/';
  projects[3].linkToSource = 'https://github.com/amare1990/LeaderBoard';

  for (let i = 0; i < projects.length; i += 1) {
    const gridsContainer = document.querySelector('.grids-wrapper');
    const gridDiv = document.createElement('div');
    gridDiv.className = `grid grid${i + 1}`;

    const gridBody = document.createElement('div');
    gridBody.className = `grid-body grid-body${i + 1}`;
    // console.log('grid body created');
    const gridTitle = document.createElement('h2');
    gridTitle.className = 'grid-title';
    // const techs = document.createElement('tech');
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
    // const project = projects[i];
    const { experiences } = projects[i];
    const techs = projects[i].technologies;
    for (let j = 0; j < experiences.length; j += 1) {
      li1 += `<li class="experience-item">${experiences[j]}</li>`;
      /* if(experiences[j] == 'Counter'){
        let sr = ${projects[i].counterImge};
        let im = <img src = ${sr} alt=''>;
        li1 += '<li class='experience-item' > ${im}</li>';
      } */
    }

    for (let k = 0; k < techs.length; k += 1) {
      li2 += `<li class="tech tech${k}">${techs[k]}</li>`;
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
    // gridDiv.append(gridBody);
    gridBody.append(gridTitle);
    gridBody.append(expContainer);
    gridBody.append(description);
    gridBody.append(techsContainer);
    gridBody.append(actionGrid);
  }

  // Popup window starts here
  projects[0].description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.";
  projects[1].description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.";
  projects[2].description = 'Developed with HTML, CSS and JavaScript, this web application allows customers to add tasks to be completed today, edit the tasks, and interactively delete completed tasks both on the screen and in the localStorage object.';
  projects[3].description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.";

  const popupWindow = document.querySelector('.popup-card-wrapper');
  function showPopupWindow() {
    const btn = document.querySelectorAll('.action-grid-btn');
    btn.forEach((e) => {
      e.addEventListener('click', () => {
        const index = e.getAttribute('whichProjectBtn');
        popupWindow.classList.toggle('hide');
        const experiencePopup = projects[index].experiences;
        const techpopup = projects[index].technologies;
        let li1 = '';
        for (let i = 0; i < experiencePopup.length; i += 1) {
          li1 += `
            <li class="popup-exp-name">${experiencePopup[i]}</li>
          `;
        }
        let li2 = '';
        for (let j = 0; j < techpopup.length; j += 1) {
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
                  <button type="button" class="popup-btn-text">
                  <a href = "${projects[index].linkToLiveVersion}"> See live  </a> </button>
                  <img src="./images/popup/Icon-Export-btn1.png" alt="">
                </div>
                <div class="popup-knowBtns">
                  <button type="button" class="popup-btn-text">   <a href = "${projects[index].linkToSource}">See source </a> </button>

                  <img src="./images/popup/Icon-GitHub-popbt2.png " alt="">
                </div>
              </div>
            </div>
          </div>

        </div> `;
        wrapperMain.style.display = 'none';
        const closePopup = document.querySelector('.closePopup');
        closePopup.addEventListener('click', () => {
          popupWindow.classList.toggle('hide');
          wrapperMain.style.display = 'block';
        });
      }); // button event
    }); // end of foreach tracking for each button
  } // end of the popup main function

  showPopupWindow();
} // end of for desktop version

if ((window.matchMedia('(max-width: 767.98px')).matches) {
  mobileVersion();
} else {
  // console.log('Greater than 768px');
  desktopVersion();
}
