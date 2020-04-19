const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");



hamburger.addEventListener("click", function() {
  navLinks.classList.toggle("open");
  // links.forEach(function link() {
  //   link.classList.toggle("fade");
  // });
  for (var link in links) {
    link.classList.toggle("open");
  }
});



// masked input tel

$(function() {
  $("#phone").mask("+7(999) 999-99-99");
});



// let btnServe = document.querySelector('#btnServe');
// let btnGal = document.querySelector('#btnGal');
// let ourServe = document.querySelector('.sec1');
// let gal = document.querySelector('.gal');
// console.log(btnServe);



// btnServe.addEventListener('click', function() {
//   document.body.scrollTop = ourServe.scrollIntoView(top);
// });

// btnGal.addEventListener('click', function() {
//   document.body.scrollTop = btnGal.scrollIntoView(top);
// });