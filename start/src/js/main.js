(function($) {
    
	// JS code goes here
	var header = $("#header"),			//jQuery ID
	h1 = $("h1"),						// jQuery tag
	intro = $(".intro"),				// jQuery class
	firstItem = $("li:first-child"),	// jQuery first item
	secondItem = $("li:nth-child(2)"),	// jQuery second item
	lastItem = $("li:last-child");


	TweenLite.to(firstItem, 1, {opacity:0, x:50});
})(jQuery);