window.onload = function () {
    AOS.init();

    $(window).scroll(function(){  
        // 웹 브라우저 오른쪽의 스크롤 바의 위치를 파악      
        var scY = $(window).scrollTop();
        if(scY >= 80) {           
            // css 를 추가하겠다.
            $('.header').addClass('header-scroll'); 
        }else{
            // css 를 제거하겠다.
            $('.header').removeClass('header-scroll');
        }
    });


    // Slide 부분 Swiper 적용
    var swiper = new Swiper('.slide-sw', {
        effect: 'fade',
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 4000
        },
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        }
    });

    // Notice 부분 Swiper 적용
    new Swiper(".notice-sw", {
        effect: 'slide',
        clickable: true,
        slidesPerView: 3.5
    });

    // Header mainmenu 오픈
    $('.depth1').mouseenter(function () {
        $('.header').addClass('header-open');
    });

    $('.depth1').mouseleave(function () {
        $('.header').removeClass('header-open');
    });

    // Time 부분 ProfressBar 만들기 실패... var bar = new ProgressBar.Line(time, {
    // strokeWidth: 4,     easing: 'easeInOut',     duration: 1400,     color:
    // '#FFEA82',     trailColor: '#eee',     trailWidth: 1,     svgStyle: {
    // width: '100%',         height: '100%'     } }); bar.animate(1.0);

};
