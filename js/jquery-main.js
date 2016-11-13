jQuery(document).ready(function($) {

    if ($('.headerNav').length) $('.headerNav').bxSlider({

        mode: 'fade',
        auto: true,
        controls: false,
        pager: false,
        pause: 10000,
        speed: 1500

    });
    if ($('.headerNav.showMobile').length) $('.headerNav').bxSlider({

        mode: 'fade',
        auto: true,
        controls: false,
        pager: false,
        pause: 10000,
        speed: 1500

    });
    $('a.goBackLink').click(function(){
		parent.history.back();
		return false;
	});
    $(".prices .collapse").click(function(e) {
        e.preventDefault();
        if ($(this).next().is(":visible")) {
            $(this).next().hide();
            $(this).each("i.fa.fa-angle-right").hide();
            $(this).each("i.fa.fa-angle-down").show();
            $(this).next().removeClass("show");
            $(this).next().addClass("hide");
           
        } else {
            $('.pricesToggle').hide();
            $(this).next().show();
            $(this).next().addClass("show");
            $(this).next().removeClass("hide");   
            $(this).each("i.fa.fa-angle-right").show();
            $(this).each("i.fa.fa-angle-down").hide();
            
        }
    });
    
    if ($('.prices table').hasClass("show")){
        alert('lala');
     
      
    }
    else {
        $("i.fa.fa-angle-down").hide();
        $("i.fa.fa-angle-right").show();
    }
    $(".newsletter .button").hover(
        function() {
            $(this).addClass("wow pulse animated");
        });


    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $(".toggle-menu-container .sf-menu-toggle").click(function(e) {
        e.preventDefault();
        $(".toggle-menu-container .nav").toggleClass("active");
    });
    $(".toggleMobileNav").click(function(e) {
        e.preventDefault();
        $(".selectMenu ul").toggle();
        e.stopPropagation();
        
    });
    $(".selectMenu ul").click(function(e){
        e.stopPropagation();
    });

    $(document).click(function(){
        $(".selectMenu ul").hide();
    });

});

$(document).mouseup(function(e) {
    var container = $(".toggle-menu-container .nav");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        $(".toggle-menu-container .nav").removeClass("active");
        $(".toggle-menu-container .nav").show();
    }
    
    
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $(".toggle-menu-container .nav").removeClass("active");
        $(".toggle-menu-container .nav").show();
    }
     
  
    
});

$(window).load(function() {
    if ($('.headerNav').length) $(".headerNav li").css("visibility", "visible");
});
