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


	//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
	//---------------------------------------------------------------------            2           -------------------------------------------------------------------------//
	//----------------------------------------------------------------------------------------------------------------------------------------------------------------------//

	//----------------------            product small img slider           -----------------------------
	$('.product-small-img ul').bxSlider({
		slideWidth: 80,
		minSlides: 3,
    	maxSlides: 3,
    	pager: false,
    	slideMargin: 5,
    	moveSlides: 1
	});

	//----------------------            product big img switch           -----------------------------
	$('.product-small-img .bx-viewport ul li').click(function() {
		$('.product-big-img img').attr('src', $(this).find('img').attr('src'));
	});

	//----------------------            product color change           -----------------------------
	$('.property-color span').each(function(){
		$(this).css('background', $(this).attr('data-color'));
		$(this).click(function() {
			$('.property-color span').removeClass('active');
			$(this).addClass('active');
		});
	});

	//----------------------            product size change           -----------------------------
	$('.property-size span').click(function() {
		$('.property-size span').removeClass('active');
		$(this).addClass('active');
	});

	//----------------------            product additionally tabs          -----------------------------
	$('.additionally-tabs .tabs-text').click(function() {
		$('.additionally-tabs .tabs-box').removeClass('active');
		$(this).parents('.tabs-box').addClass('active');
		$('.additionally-block .additionally-box').removeClass('active');
		$('.additionally-box[data-title="' + $(this).attr('data-title') + '"]').addClass('active');
	});

	$('.related-products ul').bxSlider({
		slideWidth: 274,
		minSlides: 1,
    	maxSlides: 3,
    	controls: false,
    	pager: false,
    	slideMargin: 25,
    	moveSlides: 1,
    	auto: true,
    	pause: 7000
	});

});