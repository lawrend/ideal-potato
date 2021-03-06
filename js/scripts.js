// TOPNAV
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const bgBasic = document.querySelector(".bg-basic-lg");

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    bgBasic.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);

const navLink = document.querySelectorAll(".nav-link");

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navMenu.classList.remove("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

let movers = document.querySelectorAll(".movable")
// setTimeout(()=> {movers = document.querySelectorAll(".movable");console.log(movers)}, 210);


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < movers.length; i++) {
    if (isElementInViewport(movers[i])) {
      console.log(movers[i])
      if(!movers[i].classList.contains("in-view")){
        movers[i].classList.add("in-view");
      }
    }
    // commented out below so animations fire only on first view
    // else if(items[i].classList.contains("in-view")) {
    //     items[i].classList.remove("in-view");
    // }
  }
}


window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);


