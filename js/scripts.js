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

// function defines cards for animation; setTimeout is here so the component has a chance to load first

let cards;
setTimeout(()=> {cards = document.querySelectorAll(".card");console.log(cards)}, 210);
// uncomment to check what's getting grabbed


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
  for (var i = 0; i < cards.length; i++) {
    if (isElementInViewport(cards[i])) {
      if(!cards[i].classList.contains("in-view")){
        cards[i].classList.add("in-view");
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








// adding and removing responsive elements from topnav
// function topnav(y) {
//     var x = document.getElementById(y);
//     if (!x.classList.contains('responsive')) {
//         x.className += " responsive";
//     } else {
//         x.className = x.className.replace("responsive", "");
//     }
// }

// adding and removing responsive elements from topnav
// function addRemoveResponsive(y) {
//     var x = document.getElementById(y);
//     if (!x.classList.contains('responsive')) {
//         x.className += " responsive";
//     } else {
//         x.className = x.className.replace("responsive", "");
//     }
// }

