/* ensure any open panels are closed before showing selected */
jQuery('.fsu-utilities').on('show.bs.collapse', function () {
	jQuery('.fsu-utilities .in').collapse('hide');
});

/* caller url-encodes 'keywords' */
function FSU_search(type, keywords) {
   var searchURL = '';
   switch (type) {
      case 'SITE':
        searchURL = '/search/node?keys=' + keywords;
        break;
      case 'PHFST':
         searchURL = 'https://bb5.fsu.edu/cas/login?service=https://campus.fsu.edu/webapps/portal/frameset.jsp?tab_tab_group_id=_19_1%26SAurl=https%3A%2F%2Fcampus.fsu.edu%2Fwebapps%2FFSU-peoplesearch-bb_bb60%2Fservlet%2FstudentSearchExternal%3FsearchStr%3D' + keywords + '&loginurl=https://campus.fsu.edu/webapps/login/bb_bb60/logincas.jsp?mc=1001';
         break;
      case 'PHF':
         searchURL = 'https://apps.its.fsu.edu/Directory/Directory.html?searchStr=' + keywords + '+&searchBy=lastname&submit=Search';
         break;
      case 'DEPT':
         searchURL = 'https://fsu.edu/cgi-bin/search/new/sframes?TYPE=' + type + '&KEYWORDS=' + keywords;
         break;
	  //case 'GOOGLE':
      default:
         searchURL = 'https://www.fsu.edu/search/results.html?cx=001481282910879549110%3A7l5zcrhp_cg&cof=FORID%3A9&ie=UTF-8&q=' + keywords;
         break;
   }
   //location.href = searchURL;
   window.open(searchURL, '_blank');
   return false;
}

function FSU_URLEncode(url) {
   var safechars = "0123456789" +
               "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
               "abcdefghijklmnopqrstuvwxyz" +
               "-_.!~*'()";
   var hex = "0123456789ABCDEF";

   var plaintext = url;
   var encoded = "";
   for (var i = 0; i < plaintext.length; i++ ) {
      var ch = plaintext.charAt(i);
       if (ch == " ") {
          encoded += "+";
      } else if (safechars.indexOf(ch) != -1) {
          encoded += ch;
      } else {
          var charCode = ch.charCodeAt(0);
         if (charCode > 255) {
            encoded += "+";
         } else {
            encoded += "%";
            encoded += hex.charAt((charCode >> 4) & 0xF);
            encoded += hex.charAt(charCode & 0xF);
         }
      }
   }
   return encoded;
}

function FSU_URLDecode(url) {
   var hexchars = "0123456789ABCDEFabcdef";
   var encoded = url;
   var plaintext = "";
   var i = 0;
   while (i < encoded.length) {
       var ch = encoded.charAt(i);
      if (ch == "+") {
          plaintext += " ";
         i++;
      } else if (ch == "%") {
         if (i < (encoded.length-2)
               && hexchars.indexOf(encoded.charAt(i+1)) != -1
               && hexchars.indexOf(encoded.charAt(i+2)) != -1 ) {
            plaintext += unescape(encoded.substr(i,3));
            i += 3;
         } else {
            plaintext += "%[ERROR]";
            i++;
         }
      } else {
         plaintext += ch;
         i++;
      }
   } // while
   return plaintext;
}

// Fixed Header On Scroll
jQuery(window).scroll(function() {
	var height = jQuery(window).scrollTop(); // find scroll height
	var height1 = jQuery("#fsu-global").outerHeight();
	var height2 = jQuery("#fsu-masthead").outerHeight();
	var height3 = height1 + height2;

    if(height  > height3) {
		jQuery("#fsu-header").addClass("nav-fixed");
		jQuery("#fsu-home").addClass("hidden");
		jQuery("#fsu-top").removeClass("hidden");
		jQuery("#fsu-nav-utility").removeClass("col-sm-5 col-sm-offset-2");
		jQuery("#fsu-nav-utility").addClass("col-sm-4");
		jQuery("body").addClass("add-fixed");
    }
	else {
		jQuery("#fsu-header").removeClass("nav-fixed");
		jQuery("#fsu-home").removeClass("hidden");
		jQuery("#fsu-top").addClass("hidden");
		jQuery("#fsu-nav-utility").addClass("col-sm-5 col-sm-offset-2");
		jQuery("#fsu-nav-utility").removeClass("col-sm-4");
		jQuery("body").removeClass("add-fixed");
	}
});

// Fixed Anchor
/*
jQuery(function(){
	//jQuery("[href^='#']").not("[href~='#']").click(function(evt){ //not works
	jQuery("[href*='#']").click(function(evt){ // works on same page
		evt.preventDefault();
		var obj = jQuery(this),
		getHref = obj.attr("href").split("#")[1],
		offsetSize = 84;
		jQuery(window).scrollTop(jQuery("[name*='"+getHref+"']").offset().top - offsetSize);
	});
});
*/
