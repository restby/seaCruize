// owlCarousel settings
// $('.owl-carousel').owlCarousel({
//   items: 1,
//   nav: true,
//   dots: true,
//   loop: true,
//   lazyLoad: true
// });
// $(function () {
//   $("span[aria-label=Previous]").text("");
//   $("span[aria-label=Next]").text("");
// });

// main scripts
/* $(function () {
  var navigationMenu = $('.navigation__list');
  var navigationBtn = $('.main-header__btn');
  var leftSidebarMenu = $('.left-sidebar__list');
  var leftSidebarBtn = $('.left-sidebar__btn');
  navigationBtn.click(function (e) {
    e.preventDefault();
    navigationMenu.toggleClass('navigation__list--open');
  });
  leftSidebarBtn.click(function (e) {
    e.preventDefault();
    leftSidebarMenu.toggleClass('left-sidebar__list--open');
  });
}); */

// $(function () {
//   $('.filter__title').click(function (e) {
//     e.preventDefault();
//     $('.filter__list').slideToggle('slow');
//   });
//   $('.filter__btn').click(function (e) {
//     e.preventDefault();
//     $('.filter__list').slideToggle('slow');
//   });
// });

$(function() {
  /*slick settings*/
  $(".reviews__wrap").slick({
    autoplay: false,
    autoplaySpeed: 2500,
    speed: 600,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    lazyLoad: "progressive",
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  /*owlCarousel settings*/
  $(".owl-carousel").owlCarousel({
    loop: true,
    lazyLoad: true,
    // autoplay: true,
    autoplaySpeed: 1500,
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: false
      },
      768: {
        items: 1,
        dots: true,
        nav: false
      },
      992: {
        items: 2,
        dots: true,
        nav: true,
        margin: 10
      },
      1170: {
        items: 4,
        nav: true,
        dots: true,
        margin: 20
      }
    }
  });
  $(".owl-prev span").text("");
  $(".owl-next span").text("");

  $(".navigation__btn").click(function(e) {
    e.preventDefault();
    $(".navigation ul").slideToggle("slow");
    $(this).toggleClass("navigation__btn--close");
  });

  // $(".main-header__btn-down").click(function () {
  //   $('html, body').animate({
  //       scrollTop: $(document).height() - $(window).height()
  //     },
  //     2500
  //   );
  // });
});
