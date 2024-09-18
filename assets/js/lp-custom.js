jQuery(function($){
    $('.products').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><img src='../../assets/images/ranking/products/arrow-left.svg' alt=''></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='../../assets/images/ranking/products/arrow-right.svg' alt=''></button>",
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        variableWidth:true,
        centerMode: true,
        cssEase: 'linear',
    });

    $('.reason-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 4,
        draggable: true,
        arrows: false,
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000,
        variableWidth:true,
        centerMode: true,
        cssEase: 'linear',
    });
});
