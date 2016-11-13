$(document).ready(function() {
	getVideoDim();

});

$(window).resize(function() {
    getVideoDim();
});

function getVideoDim() {
    videoContWidth = $('#showVideo').width();
    newVideoHeight = 0.75 * videoContWidth;
    if ((videoContWidth < 640) || ($(".aboutClinicSection").css('width') == "63.80368098159509%")) {
        $('#showVideo iframe').attr('width', videoContWidth);
        $('#showVideo iframe').attr('height', newVideoHeight);
    };
    
};