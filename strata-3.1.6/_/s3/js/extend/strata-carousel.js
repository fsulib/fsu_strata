(function() {
// store the slider in a local variable
var jQuerywindow = jQuery(window),
	flexslider;

// tiny helper function to add breakpoints
function getGridSize() {
	return 	(window.innerWidth < 768) ? 1 :
			(window.innerWidth < 992) ? 2 :
			(window.innerWidth < 1200) ? 3 : 4;
}

function getGridSizeMax3() {
	return 	(window.innerWidth < 768) ? 1 :
			(window.innerWidth < 992) ? 2 :
			(window.innerWidth < 1200) ? 2 : 3;
}

jQuerywindow.load(function() {
	jQuery('.carousel-items').flexslider({
		animation: "slide",
		slideshow: false,                //Boolean: Animate slider automatically
		animationSpeed: 800,
		animationLoop: false,
		itemWidth: 200, //is the primary property for the new carousel options. Without this property, your slider is not considered a carousel. To use itemWidth, give an integer value of the width of your individual slides. This should include borders and paddings applied to your slides; a total width measurement.
		itemMargin: 0, // describes the gutter between the slide elements. If each slide has a margin-left of 10px, your itemMargin value would be 10
		minItems: getGridSize(), // use function to pull in initial value
		maxItems: getGridSize(), // use function to pull in initial value
		start: function(slider){
			jQuery('body').removeClass('loading');
			flexslider = slider;
		}
	});

	jQuery('.carousel-items-max-3').flexslider({
		animation: "slide",
		slideshow: false,
		animationSpeed: 800,
		animationLoop: false,
		itemWidth: 200,
		itemMargin: 0,
		minItems: getGridSizeMax3(),
		maxItems: getGridSizeMax3(),
		start: function(slider){
			jQuery('body').removeClass('loading');
			flexslider = slider;
		}
	});
});

// check grid size on resize event
jQuerywindow.resize(function() {
	var gridSize = getGridSize();
	if (flexslider) {
		flexslider.vars.minItems = gridSize;
		flexslider.vars.maxItems = gridSize;
	}
});

}());
