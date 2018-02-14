/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})


/* *********************** */
/* CHARACTER COUNT PATTERN */
$(document).ready(function() {
    var text_max = 99;
    var text_spread = 20;
    $('#character_count').html('Character count: 0 /' + text_max);

    $('#textarea').keyup(function() {
        var text_length = $('#textarea').val().length;
        //var text_remaining = text_max - text_length;

        //$('#character_count').html('Character count: ' + text_remaining + ' /' + text_max);
        $('#character_count').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count').css('color','#B10E1E');
        } else {
            $('#character_count').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count').addClass('bold');
        } else {
            $('#character_count').removeClass('bold');
        }
    });
});
/* ************************************************** */
/* CHARACTER COUNT PATTERN - validation error example */
$(document).ready(function() {
    var text_max_2 = 99;
    var text_spread_2 = 20;
    $('#character_count_2').html('Character count: ' + 105 +' /' + text_max_2);
 
    $('#character_count_2').addClass('bold');
    
    $('#textarea-2').val('Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore aliqua');
    
    $('#textarea-2').keyup(function() {
        var text_length_2 = $('#textarea-2').val().length;

        $('#character_count_2').html('Character count: ' + text_length_2 + ' /' + text_max_2);
        
        if (text_length_2 > (text_max_2-text_spread_2)) {
            $('#character_count_2').css('color','#B10E1E');
        } else {
            $('#character_count_2').css('color','#6F777B');
        }
        if (text_length_2 > (text_max_2)) {
            $('#character_count_2').addClass('bold');
        } else {
            $('#character_count_2').removeClass('bold');
        }
    });
});

/* ************************************* */
/* COLLAPSIBLE CONTENT CONTAINER PATTERN */
function showHideContent() {
    var x = document.getElementById("collabsible-content");
    y = document.getElementById("collapsibleText");
    if (x.style.display === "block") {
        $('.collapsible-icon').css('background-position', '-250px -10px');
        x.style.display = "none";
        y.innerText = "Show";
    } else {
        $('.collapsible-icon').css('background-position', '-250px -55px');
        x.style.display = "block";
        y.innerText = "Hide";
    }
}
