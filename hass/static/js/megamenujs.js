$(document).ready(function() {  

navMenu();
mobMenuToggle1();
});

function navMenu(){
  if($(window).width()>991){
  $(".navBar li").mouseover(function (e) {
      $(this).find(".menuBox").show();
  }).mouseout(function (e) {
    e.preventDefault() 
      $(this).find(".menuBox").hide();
  });
}
}



function mobMenuToggle1(){

  if($(window).width()<=991){

    var logoutBlock = $(".logoutSec").detach();
  $(".logouthere").append(logoutBlock);

    var loginblock = $(".welProf").detach();
  $(".mobWelBlock").append(loginblock);

    $(".mobHumberger").click(function(e) {
      $(".mobMenuWrapper").addClass('mobmenuOpen');
        e.stopPropagation();
    });

    $(".menuClose").click(function(e) {
      $(".mobMenuWrapper").removeClass('mobmenuOpen');
      $('.navBar>li>a').removeClass('accordActive').addClass('accordClose');
      $(".navBar>li>a.mobProduct ").removeClass('accordActive, accordClose');
      $('.navBar>li>a.accordClose').next('ul').delay(500).slideUp();

      $("header .nav ul.navBar .menuBox li h4").removeClass('accordActive');
      $("header .nav ul.navBar .menuBox li h4").addClass('accordClose'); 
      $('header .nav ul.navBar .menuBox li h4').next('ul').delay(500).slideUp();     

        e.stopPropagation();
    });



  $('.navBar>li>a').click(function() {
    if ($(this).hasClass('accordActive')) { 
    if ($(this).hasClass('mobProduct')) {      
        $(this).removeClass('accordActive, accordClose');
        }
        else{
          $(this).removeClass('accordActive').addClass('accordClose');
        }
        }
      else{
        $('.navBar>li>a').removeClass('accordActive').addClass('accordClose');
        $(".navBar>li>a.mobProduct ").removeClass('accordActive, accordClose');

        if ($(this).hasClass('mobProduct')) {      
           $(this).removeClass('accordActive, accordClose');
        }
        else {
          $(this).addClass('accordActive').removeClass('accordClose');
        }         
      }
        $('.navBar>li>a.accordClose').next('ul').slideUp();
        $('.navBar>li>a.accordActive').next('ul').slideDown();

  });

  $(".navBar>li>a.mobProduct ").click(function(){
      $("header .nav .mobPro .menuBox").addClass('proOpen');
  });

  $(".navBar li a.productBack ").click(function(){
      $("header .nav .mobPro .menuBox").removeClass('proOpen');
      $("header .nav ul.navBar .menuBox li h4").removeClass('accordActive');
      $("header .nav ul.navBar .menuBox li h4").addClass('accordClose'); 
      $('header .nav ul.navBar .menuBox li h4').next('ul').delay(500).slideUp();

  });


$(".menuBox li h4").addClass('accordClose').next('ul').slideUp();
  $('.menuBox li h4').click(function() {
    if ($(this).hasClass('accordActive')) {
        $(this).removeClass('accordActive').addClass('accordClose');
        }
      else{
        $('.menuBox li h4').removeClass('accordActive').addClass('accordClose');
         $(this).addClass('accordActive').removeClass('accordClose');
      }
       $('.menuBox li h4.accordClose').next('ul').slideUp();
    $('.menuBox li h4.accordActive').next('ul').slideDown();

  });
}
}