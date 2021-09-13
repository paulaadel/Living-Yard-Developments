let myNav = document.getElementById('myNav'),
    formOpen = document.getElementById('open'),
    formClose= document.getElementById('close'),
    form = document.getElementById('fixedForm'),
    logo = document .getElementById('logo'),
    showLogo = document.getElementById('seclog'),
    smallMenu = document.getElementById('small-menu'),
    closing = document.getElementById('closing'),
    menuopen = document.getElementById('menuOpener');

 window.addEventListener("scroll", function(){
     myNav.classList.toggle("colordNav", window.scrollY>10)
 })


 formOpen.addEventListener("click", function(){
    form.style.display= "inline";
 })
 formClose.addEventListener("click", function(){
    form.style.display= "none";
 })
 menuopen.addEventListener("click", function(){
    smallMenu.style.display="inline";
 })
closing.addEventListener("click", function(){
    smallMenu.style.display="none";
})

$(window).scroll(function(){
    if($(this).scrollTop()>10){
        logo.style.display='none'
        showLogo.style.display='inline'
    }
    else{
        logo.style.display='inline'
        showLogo.style.display='none'
    }
})



 $(document).ready(function(){

    $('.faded').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 1800
      });
    $('.slide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<span class="change-left"><i class="fas fa-long-arrow-alt-left fs-3"></i></span>',
        nextArrow: '<span class="change-right"><i class="fas fa-long-arrow-alt-right fs-3"></i></span>',
    });


 
              
});