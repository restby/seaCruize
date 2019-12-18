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

// $(function () {
//   // slick settings
//   $('.banner__slider').slick({
//     autoplay: true,
//     autoplaySpeed: 2500,
//     speed: 800,
//     arrows: true,
//     prevArrow: '<button type="button" class="slick-prev"></button>',
//     nextArrow: '<button type="button" class="slick-next"></button>',
//     dots: false,
//     lazyLoad: 'progressive',
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [{
//         breakpoint: 320,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 750,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 1170,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });

//   $('.reviews__list').slick({
//     autoplay: false,
//     autoplaySpeed: 2500,
//     speed: 800,
//     arrows: true,
//     prevArrow: '<button type="button" class="slick-prev"></button>',
//     nextArrow: '<button type="button" class="slick-next"></button>',
//     dots: false,
//     lazyLoad: 'progressive',
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [{
//         breakpoint: 320,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 750,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 1170,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });

//   $('.main-header__btn').click(function (e) {
//     e.preventDefault();
//     $('.navigation').slideToggle("slow");
//     $(this).toggleClass("main-header__btn--open-menu");
//   });

//   $(".main-header__btn-down").click(function () {
//     $('html, body').animate({
//         scrollTop: $(document).height() - $(window).height()
//       },
//       2500
//     );
//   });
// });
