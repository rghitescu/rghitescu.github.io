jQuery(document).ready(function($) {

    var orgElementPos = $('.navbar').offset();

    if (orgElementPos)
        var orgElementTop = orgElementPos.top;
    else return;

    var lastScrollTop = 0;
    var menuHeight = $('.navbar').height();

    setInterval(function() {

        var st = $(window).scrollTop();

        if (st > lastScrollTop) {
            // Scroll Down
            if (st > orgElementTop + menuHeight && $('.navbar.fix').length) {
                $('.navbar.fix').remove();
                $('.scrollup').hide();
            }
        } else if (st < lastScrollTop) {
            // Scroll Up
            if (st > orgElementTop) {
                if (!$('.navbar.fix').length) {
                    $('.navbar').clone().hide().appendTo('.menu').addClass('fix').slideDown();
                    $('.scrollup').fadeIn();
                }
            } else if ($('.navbar.fix').length) {
                $('.navbar.fix').remove();
                $('.scrollup').hide();
            }
        }

        lastScrollTop = st;
    }, 40);
});
