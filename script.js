$(function() {
  $("#phone").mask("+7(999) 999-99-99");
});

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
  
});