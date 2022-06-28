$('.slick').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed:3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    vertical: false,
    autoplay:true,
    arrows:true,
    prevArrow: "<button id=prev>&lt;</button>",
    nextArrow: "<button id=next>&gt;</button>",
    dots: true,
    dotsClass: 'bn-controller'
});

// $(document).ready(function () {
    
//     $('.multiple-items').slick({
//         infinite: true,
//         slidesToShow: 2,
//         speed: 1000,
//         autoplaySpeed: 2000,
//         arrows: false,   //prev,next버튼 표시여부
//         autoplay: true,  //자동넘김 여부
//         slidesToScroll: 3
//     });
// })