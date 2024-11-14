jQuery(document).ready(function($) {
    var path = window.location.pathname;
    $('.header .region-navigation ul li a').each(function() {
        if ($(this).attr('href') === path) {
            $(this).addClass('active');
        }
    });
});
