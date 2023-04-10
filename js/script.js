$(document).ready(function(){
    $(".Hamburger").click(function(){
        $(".top-menu").css("right","0");
    })

    $('.close').click(function(){
        $(".top-menu").css("right","-100vw");      
    })

    /**Untuk Carouse */
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});