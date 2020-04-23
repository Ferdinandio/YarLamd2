// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");
// const line = document.querySelectorAll(".line");




// hamburger.addEventListener("click", function() {
//   navLinks.classList.toggle("open");
//   links.forEach(function link() {
//     link.classList.toggle("fade");
//   });
// });



// masked input tel

$(function() {
  $("#phone").mask("+7(999) 999-99-99");
});

// burger

$(document).ready(function(){

  $(document).ready(function() {
    $(".gallery").fancybox();
  }); 

  $('.burgerWrap').click(function() {
    $('.nav-links').toggleClass('open');
    if ($('.burger').hasClass('burger')) {
      $('.burger').removeClass('burger').addClass('active');
      $('.burgerWrap').fadeToggle(0);
      $('.burgerWrap').fadeToggle('slow');
    } else {
      $('.active').removeClass('active').addClass('burger');
    $('.burgerWrap').fadeToggle(0);
    $('.burgerWrap').fadeToggle('fast');
    }
  });

  $('.nav-links').click(function() {
    $(this).removeClass('open');
    $('.active').removeClass('active').addClass('burger');
    $('.burgerWrap').fadeToggle(0);
    $('.burgerWrap').fadeToggle('fast');
  });

  // $(".burgerWrap").click(function() {
    // $(".burger").hide(800);
    // $(".burger").removeClass('burger').addClass("active");
//     $("body").addClass("activ");
//     $(".close-icon").slideToggle(1600);
  // });
  // $(".burgerWrap").click(function() {
    // $(".burger").show(3200);
    // $(".active").removeClass("active").addClass('burger');
//     $(".close-icon").slideToggle(1600);
  // });
  // $(".nav-links").click(function() {
    // $(".burger").show(3200);
    // $(".active").removeClass("active").addClass('burger');
//     $(".close-icon").slideToggle(1600);
  // });
  
});