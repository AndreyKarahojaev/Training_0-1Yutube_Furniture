$(function () {
    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__btn').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.page-home__slider').slick({
    dots: true,
    arrows: false,
    fade:true,
    autoplay:true,
    autoplaySpeed: 2000,
    });

    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
        });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.category-livingRoom'
        }
    });
})




