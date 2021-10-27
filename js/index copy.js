/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./resources/js/user/index.js ***!
  \************************************/
$(function () {
  $("#slider .owl-carousel").owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    startPosition: 0,
    autoHeight: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1.5
      },
      1000: {
        items: 3
      }
    }
  });
  $("#slider-tuyen-dung .owl-carousel").owlCarousel({
    center: true,
    items: 4,
    loop: true,
    // margin: 15,
    // nav: true,
    startPosition: 0,
    autoHeight: true // responsive: {
    //     0: {
    //         items: 4
    //     }
    // }

  });
}); // function scrollFuntion(iScrollTop, gioiThieu) {
//     $(window).on("scroll", function () {
//         const iCurScrollTop = $(window).scrollTop();
//         if (iCurScrollTop > iScrollTop) {
//             if (iCurScrollTop < gioiThieu) {
//                 // $(window).off("scroll");
//                 // $("#hot-information").css("opacity", "0");
//                 // $("html, body").stop().animate({ scrollTop: $("#gioi-thieu")[0].scrollHeight }, 0, 'swing', () => {
//                 //     // scrollFuntion(iScrollTop, gioiThieu);
//                 //     $("div").animate({
//                 //         opacity: '1'
//                 //     }, 1500);
//                 // });
//                 console.log($(window).scrollTop())
//                 // console.log("🚀 ~ file: custom.js ~ line 23 ~ $(window).scrollTop()", $("#gioi-thieu")[0].scrollHeight)
//             }
//         }
//     });
// }
/******/ })()
;