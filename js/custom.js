$(function () {
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 3,
        loop: true,
        margin: 10,
        // nav: true,
        responsive: {
            600: {
                items: 3
            }
        }
    });
});