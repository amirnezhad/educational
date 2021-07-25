$(document).ready(function() {
    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // $(".hero-slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2100,
    //     speed: 1000,
    //     dots: true,
    //     dotsClass: 'slide-dots',
    //     arrows: false,
    //     centerMode: true,
    //     centerPadding: '0px',
    // });

    // var swiper1 = new Swiper(".swiper-top", {

    //     pagination: {
    //         el: ".swiper-pagination",
    //         dynamicBullets: true,
    //         clickable: true,
    //     },
    // });


    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true
    });

    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });


});