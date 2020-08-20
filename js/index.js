$(window).scroll(function() {
    var pc = $(this).scrollTop() / 800;
    $('#nav-main').css('opacity', 1 - pc);
});