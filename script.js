let navBar = document.querySelector("nav");
let body = document.querySelector("body");
let openNavBarBtn = document.querySelector(".open-btn");


  if (screen.width <= 767 ) {

   navBar.style.left = "-100%"
   body.style.width = 100 + "%";
     openNavBarBtn.classList.remove("hide");
}
function closeNavBar() {
  navBar.style.left = -100 + "%";
  body.style.width = 100 + "%";
  openNavBarBtn.classList.remove("hide");
}

let mouse = document.querySelector(".mouse");
// body.style.width = 100+"%"
// window.addEventListener('mousemove',(e)=>{
//    mouse.style.top = e.pageY+"px";
//      mouse.style.left = e.pageX +"px";
// })

let projects = {
  data: [
    {
      num: 0,
      name: "Wooster",
      img: "./photo/css project.png",
      language: "CSS",
      link: "https://shahdahmed55.github.io/2-second-HTML_CSS-template/",
    },
    // 2
    {
      num: 1,
      name: "Lugx",
      img: "./photo/css project2.png",
      language: "SCSS",
      link: "https://shahdahmed55.github.io/3-third-HTML_CSS-template/",
    },
    // 3
    {
      num: 2,
      name: "Anime",
      img: "./photo/css project3.png",
      language: "JS",
      link: "https://shahdahmed55.github.io/4-fourth-HTML_CSS-template/",
    },
    // 4
    {
      num: 3,
      name: "FoodFunday",
      img: "./photo/sass project.png",
      language: "CSS",
      link: "https://shahdahmed55.github.io/1-first-project-sass/",
    },
    // 5
    {
      num: 4,
      name: "Parista",
      img: "./photo/sass project2.png",
      language: "SCSS",
      link: "https://shahdahmed55.github.io/second-sass-template/",
    },
  ],
};

let projectContainer = document.querySelector(".projects .boxes");

function createBox() {
  let projectContent = `
       <div class="box All ${project.language}">
            <div class="img">
                <img src="${project.img}" alt="">
            </div>

            <div class="project-infos">
                <div class="project-name">
                    <h4>${project.name}</h4>
                </div>
                <div class="open-project-btn">
                  <a href="${project.link}">
                           <img  src="./photo/icons8-open-link.svg" alt="">
                    </a>
                </div>
            </div>
        </div>
   `;

  projectContainer.innerHTML += projectContent;
  // projectContent.classList.add("hide")
}
for (project of projects.data) {
  createBox();
}
let boxes = document.querySelectorAll(".box");
function findBox(filterBtn) {
  boxes.forEach((box) => {
    if (box.className.includes(filterBtn.getAttribute("id"))) {
      box.classList.remove("hide");
    } else {
      box.classList.add("hide");
    }
  });
}

let filterBtns = document.querySelectorAll(".filterBtn");
filterBtns.forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    activeBtn();
    projectContainer.style.transform = "translateY(-50px)";
    filterBtn.classList.add("active");
    if (!document.startViewTransition) {
      findBox(filterBtn);
    }
    document.startViewTransition(() => {
      findBox(filterBtn);
      setTimeout(() => {
        projectContainer.style.transform = "translateX(0%)";
      }, 100);
    });
  });
});
filterBtns[0].classList.add("active");
function activeBtn() {
  filterBtns.forEach((el) => {
    el.classList.remove("active");
    el.addEventListener("click", () => {
      el.classList.add("active");
    });
  });
}

let projectPage = document.querySelector("#projects-page");
let title = projectPage.querySelector(".title");
let filterBar = projectPage.querySelector(".filter-bar");
console.log(projectPage);

let sections = document.querySelectorAll("section");
let lis = document.querySelectorAll("li a");

let pagesTitles = document.querySelectorAll(".title")
// console.log(projectTitle)
           pagesTitles.forEach(projectTitle=>{
              projectTitle.style.transform="translateX(-400%)";

      })
      if(screen.width>=767){
    activeLiWhilescroll();
  }

window.onscroll = () => {

  // openNavBarBtn.style.top = "10px"

  


  if (window.scrollY >= projectPage.offsetTop - 300) {
    // projectTitle.style.transform = "translateX(0%)";
    // title.style.opacity = 1;
    // filterBar.style.opacity = 1;
    filterBar.style.transform = "translateX(0%)";
    projectContainer.style.transform = "translateX(0%)";
  } else {
    // projectTitle.style.transform = "translateX(-400%)";
    filterBar.style.transform = "translateY(800%)";
    // title.style.opacity = 0;
    // filterBar.style.opacity = 0
    projectContainer.style.transform = "translateY(400%)";
  
  }
  if(screen.width>=767){
    activeLiWhilescroll();
  }
  sections.forEach((sec) => {
     if (window.scrollY >= sec.offsetTop -400 && window.screenY < sec.offsetTop  +sec.offsetHeight ) {





      pagesTitles.forEach((projectTitle,i)=>{
          // projectTitle.style.transform="translateX(-400%)";
        if(pagesTitles[i].className.includes( sec.getAttribute("id"))){
 pagesTitles[i].style.transform="translateX(0%)";
        }
      })
     }
  })
    
    


//   if (screen.width <= 767 ) {

//     // showBoxesWhileScroll();
    
 
// }

      //  pagesTitles.forEach(projectTitle=>{
      //         projectTitle.style.transform="translateX(0%)";

      // })


};
function activeLiWhilescroll() {
  
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 290;
    let Height = section.offsetHeight;
    let id = section.querySelector("id");
    
    
    //  projectTitle.style.transform = "translateY(400%)";
    
    console.log(top)
    
    
    
    if (top >= offset && top < offset + Height) {
      // console.log(section)
      
      // projectTitle.style.transform = "translateX(0%)";
      
      lis.forEach((li) => {
       
        li.classList.remove("activeNavLi");
        let sliceEnd = li.getAttribute("href").length;
        if (
          li.getAttribute("href").slice(1, sliceEnd) ===
          section.getAttribute("id")
        ) {
          li.parentElement.style.backgroundColor = "rgb(53, 0, 18)";
        } else {
          li.parentElement.style.backgroundColor = "rgb(196, 14, 74)";  
          
        }
      });
      
    }
    
    // if(top > offset + Height){
      //   projectTitle.style.transform = "translateY(400%)";
      //   console.log("yes")
      
      // }
      
      
      
    });
    
  }



  lis.forEach((li)=>{
      if (screen.width <= 767 ) {
        li.parentElement.style.textAlign ="center";
          li.addEventListener("click" , ()=>{
            navBar.style.left = "-100%"
            openNavBarBtn.classList.remove("hide");
          })
         }
  })
  
  // function showBoxesWhileScroll() {
  //   const triggerBottom = window.innerHeight * (4 / 5);
  //   boxes.forEach((box) => {
  //     const boxTop = box.getBoundingClientRect().top-350;
  //     if (triggerBottom > boxTop) {
  //       box.style.transform = "translateX(0%)";
  //     } else {
  //       box.style.transform = "translateX(-400%)";
  //     }
  //   });
  // }
  
  // findHideBox()
  
  
  
  // projectTitle.style.transform = "translateX(400%)";


// const options={}

// const observer = new IntersectionObserver((enteries)=>{
//     // console.log(enteries)
// },options)

// boxes.forEach((box)=>{
//   observer.observe(box)
// })


 ScrollReveal(
  
  {
    distance :'80px',
    duration:2000,
    delay:200,

   });


   ScrollReveal().reveal('.name' ,'.my-career' , {origin : "top"});
    //  ScrollReveal().reveal('.boxes' , {origin : "top"});


    function openNavBar() {


          if (screen.width <= 767 ) {

   navBar.style.left = "-0%"
   body.style.width = 100 + "%";
     openNavBarBtn.classList.add("hide");
     navBar.style.width  ="100%"
}
else{
  
  body.style.width = 70 + "%";
  navBar.style.left = 0;
  console.log(navBar);
  openNavBarBtn.classList.add("hide");


}
//   if(body.innerWidth === "70%" ){
//   console.log(55555555555555555555555555)
// }
pagesTitles.forEach((pt)=>{
  pt.style.fontSize = "15px"
})

}


// let emailBtn = document.getElementById("email-submit-btn");
// emailBtn.onclick = ()=>{
//   window.open("https://google.com")
// }




Email.send({
    Host : "s1.maildns.net",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);