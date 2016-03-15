$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//bxslider
	$('.slider_wrap ul').bxSlider();

	//sidebar menu
	$( ".sid_menu li a" ).click(function() {
	  $( this ).next("ol").toggle( "slow");
	});

	//mobile menu
	$( ".menu_trigger" ).click(function() {
	  $( this ).next("ul").slideToggle( "slow");
	});
});