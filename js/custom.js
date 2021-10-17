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

    // $("#button").click(function() {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $("#body-main-content").offset().top
    //     }, 1000);
    // });


    // $([document.documentElement, document.body]).animate({
    //     scrollTop: $("#body-main-content").offset().top
    // }, 2000);

    var body = $("html, body");

    $('#button').click(function () {
        $("#gioi-thieu").css("opacity", "0");
        body.stop().animate({scrollTop:0}, 0, 'swing', () => {
            $("div").animate({
                opacity:'1'
            }, 1500);
        });
    });



    // let iScrollTop = 0;
    // const gioiThieu = $("#gioi-thieu").height();
    // const hotInformation = $("#hot-information").height();
    // scrollFuntion(iScrollTop, gioiThieu);
});

// function scrollFuntion(iScrollTop, gioiThieu) {
//     $(window).on("scroll", function () {
//         const iCurScrollTop = $(window).scrollTop();
//         if (iCurScrollTop > iScrollTop) {
//             if (iCurScrollTop < gioiThieu) {
//                 $(window).off("scroll");
//                 $("#hot-information")[0].scrollIntoView();
//                 console.log($(window).scrollTop())
//                 // console.log("🚀 ~ file: custom.js ~ line 23 ~ $(window).scrollTop()", $("#gioi-thieu")[0].scrollHeight)
//             }
//         }
//     });
// }
