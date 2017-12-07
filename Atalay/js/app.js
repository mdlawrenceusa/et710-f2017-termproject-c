$(document).foundation()
$(document).ready(function(){

  var vid = $('video');
  var vid_w_orig = 1280;
	var vid_h_orig = 720;

  // re-scale image when viewport resizes
	$(window).resize(function(){

		// get the parent element size
		var container_w = vid.parent().width();
		var container_h = vid.parent().height();

		// use largest scale factor of horizontal/vertical
		var scale_w = container_w / vid_w_orig;
		var scale_h = container_h / vid_h_orig;
		var scale = scale_w > scale_h ? scale_w : scale_h;

		// scale the video
		vid.width(scale * vid_w_orig);
		vid.height(scale * vid_h_orig);

	});

  // trigger re-scale on pageload
	$(window).trigger('resize');

});


















// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
