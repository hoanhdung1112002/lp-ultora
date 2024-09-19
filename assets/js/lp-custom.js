jQuery(function($){
    $('.products').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><img src='../assets/images/ranking/products/arrow-left.svg' alt=''></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='../assets/images/ranking/products/arrow-right.svg' alt=''></button>",
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        variableWidth:true,
        centerMode: true,
        cssEase: 'linear',
    });

    $('.reason-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth:true,
        centerMode: true,
        cssEase: 'linear',
    });

    var windowHeight = $(window).height();
  
        $(window).scroll(function() {
          var scrollPosition = $(window).scrollTop();
  
          $('.animated').each(function() {
            var elementPosition = $(this).offset().top;
            
            if (scrollPosition > elementPosition - windowHeight / 1.6) {
              $(this).addClass('run-animated');
            }
          });
        });
        function animatedFlash() {
          setInterval(function () {
            $('.animated-flash').addClass('run-animated');
          }, 2000);
          setInterval(function () {
            $('.animated-flash').removeClass('run-animated');
          }, 3000);
        }
  
        animatedFlash();
});
