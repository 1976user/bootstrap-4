$(document).ready(function() {
    var carousel = $("#mycarousel");
    var carouselButton = $("#carouselButton");
    var carouselButtonSpan = $("#carouselButton span");

    carousel.carousel({interval: 2000});

    carouselButton.click(function() {
        if (carouselButtonSpan.hasClass('fa-pause')) {
            carousel.carousel('pause');
            carouselButtonSpan.removeClass('fa-pause');
            carouselButtonSpan.addClass('fa-play');
        }
        else {
            carousel.carousel('cycle');
            carouselButtonSpan.removeClass('fa-play');
            carouselButtonSpan.addClass('fa-pause');
        }
    });

    $('#reserveTableButton').click(function() {
        $('#reserveTableModal').modal('toggle');
    });

    $('#loginButton').click(function() {
        $('#loginModal').modal('toggle');
    });
});