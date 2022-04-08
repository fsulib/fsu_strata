/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth

var $window = jQuery(window),
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
      (window.innerWidth < 1200) ? 3 : 3;
}

// Uniform height on Slider with Description Below Flexslider
function fixFlexsliderHeight() {
    // Set fixed height based on the tallest slide
    jQuery('.description_below .flexslider').each(function(){
        var sliderHeight = 0;
        jQuery(this).find('.slides > li').each(function(){
            slideHeight = jQuery(this).height();
            if (sliderHeight < slideHeight) {
                sliderHeight = slideHeight;
            }
        });
        jQuery(this).find('ul.slides').css({'height' : sliderHeight});
        jQuery(this).find('ul.slides > li').css({'height' : sliderHeight});
    });
}

(function (Drupal) {

  'use strict';

        // Uniform height on Slider with Description Below Flexslider
        jQuery(window).on('load', function(e){
          setTimeout(function(){
            //fixFlexsliderHeight();
          }, 1500);
        });

        jQuery(window).resize(function() {
          //fixFlexsliderHeight();
        });


          jQuery(window).on('load', function(e){
          jQuery('.region-content table').addClass('table');
          jQuery('.accordian-toggle').click(function(e){
            e.preventDefault();
            var width = jQuery(window).width();
            jQuery(this).parent().siblings('.accordian-body').slideToggle();
            if(width > 1218){
              if(jQuery('.carousel-control').hasClass('open')){
                jQuery('.carousel-control').removeClass('open').animate({height: '352px'}, 400);
              }else{
                jQuery('.carousel-control').addClass('open').animate({height: '308px'}, 400);
              }
            }else{
              if(jQuery('.carousel-control').hasClass('open')){
                jQuery('.carousel-control').removeClass('open').animate({height: '268px'}, 400);
              }else{
                jQuery('.carousel-control').addClass('open').animate({height: '226px'}, 400);
              }
            }
          });

          jQuery("#accordion h4").click(function(){
            jQuery(this).next(".accordion_content").slideToggle("slow").siblings(".accordion_content:visible").slideUp("slow");
            jQuery(this).toggleClass("active");
            jQuery(this).siblings("h4").removeClass("active");
          });
          // Update search form
            jQuery('.path-search form.search-page-form').attr('method','get').attr('onsubmit','return FSU_search(type.value, FSU_URLEncode(keywords.value));').attr('action','');
        });
  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {

      // Place your code here.

    /* Add CSS classes and attributes for People Feeds */
    jQuery('.field--name-field-feeds .field-collection-item').each(function( index ) {
      var viewbgcolor = jQuery(this).find('.field--name-field-background-color');
      var viewcssclass = jQuery(this).find('.field--name-field-custom-css-class');
      var viewTitlePlacement = jQuery(this).find('.field--name-field-heading-placement-and-alig.field--type-list-string');
      var viewTitleARIALevel = jQuery(this).find('.field--name-field-title-aria-heading-level');
      if ( viewbgcolor.length ) jQuery(this).addClass(viewbgcolor.text());
      if ( viewcssclass.length ) jQuery(this).addClass(viewcssclass.text());
      if ( viewTitlePlacement.length ) jQuery(this).addClass(viewTitlePlacement.text());
      if ( viewTitleARIALevel.length ) jQuery(this).find('.field--name-field-title').attr('role','heading').attr('aria-level',viewTitleARIALevel.text());
    });
    // Switch CSS classes for circle photos feed
    jQuery('.two-column-circle-photos .views-row > .col-xs-12').attr('class','col-xs-12 col-sm-6 s3-m-6');

      jQuery(function($) {

        // Make promo image containers go to title links if clicked
        $('.promo-image-block .s3-img-block').each(function( index ) {
          var $linkElem = $(this).find('h2 a');
          if ( $linkElem.length ) {
            var linkUrl = $linkElem.attr('href');
            $(this).on( 'click', function() {
              if ( $linkElem.attr('target') == '_blank' ) {
                window.open(linkUrl, '_blank');
              } else {
                window.location.href = linkUrl;
              }
            });
          }

        });

        $('.flexslider').each(function(index) {
          if ($(this).find('.slides li').length > 1) {
            $(this).addClass('multiple-slides')
          }
        });
      });
      jQuery(document).on('click', '#block-mainnavigation .expanded.dropdown .dropdown-toggle', function(){
        var link = jQuery(this).attr('href');
        window.location.href = link;
      });
      jQuery(document).on('click', '#block-mainnavigation-2 .expanded.dropdown .dropdown-toggle', function(){
        var link = jQuery(this).attr('href');
        window.location.href = link;
      });
      jQuery(document).on('click', '#block-fsu-strata-main-menu .expanded.dropdown .dropdown-toggle', function(){
        var link = jQuery(this).attr('href');
        window.location.href = link;
      });
    }
  };

  // We pass the parameters of this anonymous function are the global variables
  // that this script depend on. For example, if the above script requires
  // jQuery, you should change (Drupal) to (Drupal, jQuery) in the line below
  // and, in this file's first line of JS, change function (Drupal) to
  // (Drupal, jQuery)

  //modifying flexslider slider effect
  jQuery(window).on('load', function(e){
    //effect = jQuery('.row--slider-by-halves').parent().attr("id");
    // var halvesEffect = jQuery('#slide-effect-halves').data("effect");
    var thirdsEffect = jQuery('#slide-effect-thirds').data("effect");
    var bannerEffect = jQuery('#slide-effect-banner').data("effect");
    var descBelowEffect = jQuery('#slide-effect-desc-below').data("effect");

    jQuery('.slide-effect-halves[data-effect="fade"] .row--slider-by-halves .flexslider').flexslider({
      // animation: halvesEffect,
      animation: 'fade',
      controlNav: false,
      slideshow: true,
      // animationLoop: false,
    });

    jQuery('.slide-effect-halves[data-effect="slide"] .row--slider-by-halves .flexslider').flexslider({
      // animation: halvesEffect,
      animation: 'slide',
      controlNav: false,
      slideshow: true,
      // animationLoop: false,
    });

    jQuery('.row--slider-by-thirds .flexslider').flexslider({
      animation: thirdsEffect,
      controlNav: false,
      slideshow: true,
      // pausePlay: true,
      // animationLoop: false,
    });

    jQuery('.row--slider-w-banner .flexslider').flexslider({
      animation: bannerEffect,
      controlNav: false,
      slideshow: true,
      randomize: true,
      // animationLoop: false,
    });

    jQuery('.row--slider-desc-below .flexslider').flexslider({
      animation: descBelowEffect,
      controlNav: false,
      slideshow: true,
      // animationLoop: false,
    });

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


    jQuery('.carousel-items-animate').flexslider({
      animation: "slide",
      slideshow: true,                //Boolean: Animate slider automatically
      animationSpeed: 800,
      animationLoop: true,
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

    // check grid size on resize event
    $window.resize(function() {
      var gridSize = getGridSize();
      if (flexslider) {
        flexslider.vars.minItems = gridSize;
        flexslider.vars.maxItems = gridSize;
      }
    });

  });
  // Hide Honeypot field label
  let divs = document.getElementsByClassName('control-label');

  for (let x = 0; x < divs.length; x++) {
    let div = divs[x];
    let content = div.innerHTML.trim();

    if (content == 'Leave this field blank') {
      div.style.display = 'none';
    }
  }
  //Focus nav.
  jQuery(document).on('focusin', function(e) {
    var $target = jQuery(e.target),
      base = '#fsu-nav-primary .navbar .navbar-nav',
      $hover = jQuery(base + ' .hover');
    //Check if a nav link targeted.
    if ($target.is(base + ' a')) {
      //Find and open the hovered parents.
      var $parents = $target.parents(base + ' .expanded').addClass('hover');
      // Then Change aria-expanded to true if the subnav is visible
      if ($target.parent().find('.children').is(':visible')) {
        $target.attr('aria-expanded', true);
      }

      // Close anything not in that list and then change aria-expanded to false.
      var $notParents = $hover.not($parents);
      $notParents.removeClass('hover');
      if ($notParents.length > 0 && !$notParents.find('.dropdown-menu').is(':visible')) {
        $notParents.children('a').attr('aria-expanded', false);
      }
    }
    else {
      //Close all.
      $hover.removeClass('hover');
      if(!$target.parent().find('.dropdown-menu').is(':visible')){
        $target.children('a').attr('aria-expanded', false);
      }
    }
  })
})(Drupal);

