$(document).ready(function() {
    $(window).resize();
});
$(window).resize(function() {
    $("#login").css({
        position: "absolute",
        left: ($(window).width() - $("#login").outerWidth()) / 2,
        top: ($(window).height() - $("#login").outerHeight()) / 2
    });
});
