/**
 * @file
 * Custom JavaScript Updates.
 */

(function (Drupal) {
  Drupal.behaviors.fsu_strata = {
    attach: function(context, settings) {

      //Add tabs functionality
      //jQuery("#tabs").tabs({
        //heightStyle: "fill"
      //});

      //jQuery(".jq-tabs").tabs({
        //heightStyle: "content"
      //});

    }
  };
})(Drupal);

//Vanilla JS tab functionality

function openForm(evt, formName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(formName).style.display = "block";
  evt.currentTarget.className += " active";
}

//If a tab should be open, click on it
document.getElementById("defaultOpen").click();

/* All Search Function */
function allSearch(search_form) {
  var sanitized_input = encodeURIComponent(document.forms[search_form]["all-search-input"].value);
  var query = document.forms[search_form]["base_query"].value;
  query += sanitized_input + "&tab=Everything&search_scope=MyInst_and_CI&vid=01FALSC_FSU:Home&offset=0";
  window.location = query;
  return false;
}