/* Scroll Down */
/* Esto es de internet, sigo sin saber programar */

$(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 600, 'linear');
    });
});
