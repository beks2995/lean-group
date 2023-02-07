  $(document).ready(function(){
    $("#home-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
    var certSlider = $("#certificates-slider")
    certSlider.owlCarousel({
        items: 5,
        margin: 30,
        loop: true,
    })
    $('.custom-next_cert').click(function() {
      certSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.custom-prev_cert').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      certSlider.trigger('prev.owl.carousel', [300]);
    })
    //Табы на странице
    $('ul.products-tabs__caption').on('click', 'li:not(.products-tabs__btn_active)', function() {
      $(this)
        .addClass('products-tabs__btn_active').siblings().removeClass('products-tabs__btn_active')
        .closest('div.products-tabs').find('div.products-tabs__content').removeClass('products-tabs__content_active').eq($(this).index()).addClass('products-tabs__content_active');
    });
    //burger
    $('.burger-menu').click(function(){
      $('.burger-menu').toggleClass('burger-menu_activ')
      $('.nav__list').toggleClass('nav__list_activ')
    })
    var prodSlider = $(".products-slider")
    prodSlider.owlCarousel({
      items: 5,
      margin: 30,
      loop: true,
      dots: false,
    })
    $('.custom-next_prod').click(function() {
      prodSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.custom-prev_prod').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      prodSlider.trigger('prev.owl.carousel', [300]);
    })
    var teamSlider = $('.team-slider')
    teamSlider.owlCarousel({
      items: 5,
      margin: 30,
      loop: true,
      dots: false,
    })
    $('.custom-next_team').click(function() {
      teamSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.custom-prev_team').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      teamSlider.trigger('prev.owl.carousel', [300]);
    })
    var lamSlider = $(".laminate-slider")
    lamSlider.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
    })
    var extSlider = $(".extrusion-slider")
    extSlider.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
    })
    var othSlider = $(".other-slider")
    othSlider.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
    })
  });
