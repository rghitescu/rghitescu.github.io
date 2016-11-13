jQuery(document).ready(function($) {

    var orgElementPos = $('.aboutUsSection').offset();

    if (orgElementPos)
        var orgElementTop = orgElementPos.top;
    else return;

    var lastScrollTop = 0;

    setInterval(function () {

        var st = $(window).scrollTop();

        if (st > lastScrollTop) {
            // Scroll Down
            $('.scrollup').hide();
        } else if (st < lastScrollTop) {
            // Scroll Up
            if (st > orgElementTop) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').hide();
            }
        } else if (st == 0) {
            $('.scrollup').hide();
        }

        lastScrollTop = st;
    }, 40);
});
