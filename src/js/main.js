$(document).ready(function () {
    $("#home-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    var certSlider = $('#certificates-slider');
    certSlider.owlCarousel({
        items: 1,
        loop: true,
        responsive: {
            0 : {
                items: 1,
            },
            536 : {
                items: 2,
                margin: 10,
            },
            768 : {
                items: 4,
                margin: 15,
            },
            1200 : {
                items: 5,
                margin: 30,
            },
        }
    });
    $('.custom-next_cert').click(function() {
        certSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.custom-prev_cert').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        certSlider.trigger('prev.owl.carousel', [300]);
    });
    //Табы на странице
    
    $('ul.products-tabs__caption').on('click', 'li:not(.products-tabs__btn_active)', function() {
        $(this)
          .addClass('products-tabs__btn_active').siblings().removeClass('products-tabs__btn_active')
          .closest('div.products-tabs').find('div.products-tabs__content').removeClass('products-tabs__content_active').eq($(this).index()).addClass('products-tabs__content_active');
      });
    //Burger
    $('.burger-menu').click(function(){
        $('.burger-menu').toggleClass('burger-menu_active')
        $('.nav__list').toggleClass('nav__list_active')
    });

    var productsSlider = $('.products-slider')
    productsSlider.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        responsive: {
            0 : {
                items: 1,
            },
            536 : {
                items: 2,
                margin: 10,
            },
            768 : {
                items: 4,
                margin: 15,
            },
            1200 : {
                items: 5,
                margin: 30,
            },
        }
    });
    $('.custom-next_prod').click(function() {
        productsSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.custom-prev_prod').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        productsSlider.trigger('prev.owl.carousel', [300]);
    });
    var map;
    
    DG.then(function () {
        map = DG.map('map', {
            center: [42.878949,  74.589002],
            zoom: 18
        });
        var myIcon = DG.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/233/233833.png',
            iconSize: [40, 40]
        });
        DG.marker([42.878949, 74.589002], {icon: myIcon}).addTo(map);
    });
    

});