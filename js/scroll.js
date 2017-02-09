$(function() {
    $('.scroll').on('click', function() {
        $('html, body').animate({scrollTop: 900}, 1000);
    });
});


$(function() {
    $('#status').css({
        'transform': 'scale(1.2)',
        'opacity': '0'
    });
    $('#preloader').delay(400).fadeOut(2000);
});

