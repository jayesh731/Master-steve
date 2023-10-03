$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      loop: false,
      grabCursor: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }, 
  });     
  var swiper = new Swiper(".banner-swiper", {
    slidesPerView: 1,
    effect: 'fade',
    autoplay: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
  
});
$(".menu-btn a").click(function () {
    $(".header_submenu").toggleClass('active');
    $('body').toggleClass('no-scroll');
    $(".header").toggleClass('header_open');
    $(this).toggleClass('header_open').toggleClass('header_close');
}); 