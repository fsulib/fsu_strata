jQuery(window).on('load', function(e){
	jQuery('.slider-slide').flexslider({
		animation: "slide",
		slideDirection: "horizontal",
		slideshow: true,
		easing:"easeInOutBack",
		slideshowSpeed: 6000,
		animationDuration: 600,
		directionNav: true,
		controlNav: false,
		keyboardNav: true,
		mousewheel: false,
		prevText: "Previous",
		nextText: "Next",
		pausePlay: false,
		pauseText: 'Pause',
		playText: 'Play',
		animationLoop: true,
		pauseOnAction: true,
		pauseOnHover: false,
		start: function(){
         jQuery('.img-responsive').show();
    	},
	});

	jQuery('.slider-fade').flexslider({
		animation: "fade",
		slideshow: true,
		easing:"easeInOutBack",
		slideshowSpeed: 7000,
		animationDuration: 2000,
		directionNav: true,
		controlNav: false,
		keyboardNav: true,
		mousewheel: false,
		prevText: "Previous",
		nextText: "Next",
		pausePlay: false,
		pauseText: 'Pause',
		playText: 'Play',
		animationLoop: true,
		pauseOnAction: true,
		pauseOnHover: false,
		start: function(){
         jQuery('.img-responsive').show();
    	},
	});

	jQuery('.slider-fade-full').flexslider({
		animation:"fade",
		slideDirection:"horizontal",
		slideshow:true,
		easing:"easeInOutBack",
		slideshowSpeed:7000,
		animationDuration:1000,
		directionNav:true,
		controlNav:true,
		keyboardNav:true,
		mousewheel:false,
		prevText:"Previous",
		nextText:"Next",
		pausePlay:true,
		pauseText:'Pause',
		animationLoop:true,
		pauseOnAction:true,
		pauseOnHover:true,
		start: function(){
			jQuery('.img-responsive').show();
    	},
	});
});

