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

/* ******************************** */
/* LISTS - SORTABLE COLUMNS PATTERN */
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("sortable-table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc"; 
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {

                /* *************************************** */
                /* ADD REMOVE UP ARROW FROM HEADER - START */
                if (n == 0) {
                    //document.getElementById("header1").innerHTML = "Name &#9650;";
                    document.getElementById("header1").innerHTML = "Name <img src='/public/images/design_patterns/lists-sortable-columns/sorting-icon-up.png'>";
                    document.getElementById("header2").innerHTML = "Organisation";
                } else if (n == 1) {
                    document.getElementById("header1").innerHTML = "Name";
                    //document.getElementById("header2").innerHTML = "Organisation &#9650;";
                    document.getElementById("header2").innerHTML = "Organisation <img src='/public/images/design_patterns/lists-sortable-columns/sorting-icon-up.png'>";
                }
                /* ADD REMOVE UP ARROW FROM HEADER - END */
                /* ************************************* */

                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            } else if (dir == "desc") {

                /* ***************************************** */
                /* ADD REMOVE DOWN ARROW FROM HEADER - START */
                if (n == 0) {
                    document.getElementById("header1").innerHTML = "Name <img src='/public/images/design_patterns/lists-sortable-columns/sorting-icon-down.png'>";
                    document.getElementById("header2").innerHTML = "Organisation";
                } else if (n == 1) {
                    document.getElementById("header1").innerHTML = "Name"
                    document.getElementById("header2").innerHTML = "Organisation <img src='/public/images/design_patterns/lists-sortable-columns/sorting-icon-down.png'>";
                }
                /* ADD REMOVE DOWN ARROW FROM HEADER - END */
                /* *************************************** */

                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount ++; 
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

/* ****************************** */
/* LISTS - EXPANDABLE ROW PATTERN */
row1status = true;
row2status = true;
row3status = true;
row4status = true;
row5status = true;
function tableRow(n) {
    /* Row 1 */
    if ((n == 1) || (n == 2)) {
        if (row1status) {
            //alert(rowOpenCloseStatus);
            document.getElementById("row1closed").style = "display: none";
            document.getElementById("row1opened").style = "display: inline-row";
        } else {
            //alert(rowOpenCloseStatus);
            document.getElementById("row1closed").style = "display: inline-row";
            document.getElementById("row1opened").style = "display: none";
        }
        row1status = !row1status;
    }
    /* Row 2 */
    if ((n == 3) || (n == 4)) {
        if (row2status) {
            //alert(rowOpenCloseStatus);
            document.getElementById("row2closed").style = "display: none";
            document.getElementById("row2opened").style = "display: inline-row";
        } else {
            //alert(rowOpenCloseStatus);
            document.getElementById("row2closed").style = "display: inline-row";
            document.getElementById("row2opened").style = "display: none";
        }
        row2status = !row2status;
    }
    /* Row 3 */
    if ((n == 5) || (n == 6)) {
        if (row3status) {
            //alert(rowOpenCloseStatus);
            document.getElementById("row3closed").style = "display: none";
            document.getElementById("row3opened").style = "display: inline-row";
        } else {
            //alert(rowOpenCloseStatus);
            document.getElementById("row3closed").style = "display: inline-row";
            document.getElementById("row3opened").style = "display: none";
        }
        row3status = !row3status;
    }
    /* Row 4 */
    if ((n == 7) || (n == 8)) {
        if (row4status) {
            //alert(rowOpenCloseStatus);
            document.getElementById("row4closed").style = "display: none";
            document.getElementById("row4opened").style = "display: inline-row";
        } else {
            //alert(rowOpenCloseStatus);
            document.getElementById("row4closed").style = "display: inline-row";
            document.getElementById("row4opened").style = "display: none";
        }
        row4status = !row4status;
    }
    /* Row 5 */
    if ((n == 9) || (n == 10)) {
        if (row5status) {
            //alert(rowOpenCloseStatus);
            document.getElementById("row5closed").style = "display: none";
            document.getElementById("row5opened").style = "display: inline-row";
        } else {
            //alert(rowOpenCloseStatus);
            document.getElementById("row5closed").style = "display: inline-row";
            document.getElementById("row5opened").style = "display: none";
        }
        row5status = !row5status;
    }
}

/* *********************** */
/* FILTERS - BASIC PATTERN */
a  = "pending";
b  = "active";

function basicFilters(tableObj, which) {

    var rows = $(tableObj).find('tr:gt(0)');

    rows.show();

    if(which == 'ACTIVE') {
        document.getElementById("filterAllUsers").className = "filter-basic";
        document.getElementById("filterActiveUsers").className = "filter-basic-on";
        document.getElementById("filterPendingUsers").className = "filter-basic";
        if(rows.is(':hidden')) {
            rows.has('td.'+a).show();
        } else {
            rows.has('td.'+a).hide();
        }
    } else if(which == 'PENDING') {
        document.getElementById("filterAllUsers").className = "filter-basic";
        document.getElementById("filterActiveUsers").className = "filter-basic";
        document.getElementById("filterPendingUsers").className = "filter-basic-on";
        if(rows.is(':hidden')) {
            rows.has('td.'+b).show();
        } else {
            rows.has('td.'+b).hide();
        }
    } else if(which == 'ALL') {
        document.getElementById("filterAllUsers").className = "filter-basic-on";
        document.getElementById("filterActiveUsers").className = "filter-basic";
        document.getElementById("filterPendingUsers").className = "filter-basic";
        if(rows.is(':hidden')) {
            rows.show();                                                        
        } else {
            //rows.hide();
        }
    }
}  

/* ************************* */
/* GLOBAL NAVIGATION PATTERN */
function globalNavShowMenu() {
    document.getElementById("globalNavShowHide").innerHTML = "<a href='javascript: void(0); return false;' onclick='globalNavHideMenu()'>Show menu <span class='global-nav-icon'>&#9660;</span></a>";
    document.getElementById("globalNavContent").style.display = "none";
}  
function globalNavHideMenu() {
    document.getElementById("globalNavShowHide").innerHTML = "<a href='javascript: void(0); return false;' onclick='globalNavShowMenu()'>Hide menu <span class='global-nav-icon'>&#9650;</span></a>";
    document.getElementById("globalNavContent").style.display = "block";
}
/* example 2 */
function globalNavShowMenu2() {
    document.getElementById("globalNavShowHide2").innerHTML = "<a href='javascript: void(0); return false;' onclick='globalNavHideMenu2()'>Show menu <span class='global-nav-icon'>&#9660;</span></a>";
    document.getElementById("globalNavContent2").style.display = "none";
}  
function globalNavHideMenu2() {
    document.getElementById("globalNavShowHide2").innerHTML = "<a href='javascript: void(0); return false;' onclick='globalNavShowMenu2()'>Hide menu <span class='global-nav-icon'>&#9650;</span></a>";
    document.getElementById("globalNavContent2").style.display = "block";
}  
/* example 3 */
function globalNavShowMenu3() {
    document.getElementById("globalNavShowHide3").innerHTML = "<a href='javascript: void(0); return false;' onclick='globalNavHideMenu3()'>Show menu <span class='global-nav-icon'>&#9660;</span></a>";
    document.getElementById("globalNavContent3").style.display = "none";
}  
function globalNavHideMenu3() {
    document.getElementById("globalNavShowHide3").innerHTML = "<a href='javascript: void(0); return false;' onclick='globalNavShowMenu3()'>Hide menu <span class='global-nav-icon'>&#9650;</span></a>";
    document.getElementById("globalNavContent3").style.display = "block";
}  
/* ******************* */
/* UPLOAD FILE PATTERN */
function showname () {
    var name = document.getElementById('fileInput');
    //alert('Selected file: ' + name.files.item(0).name);
    //alert('Selected file: ' + name.files.item(0).size);
    //alert('Selected file: ' + name.files.item(0).type);
    document.getElementById('fileName').innerHTML = name.files.item(0).name;
};
function showname2 () {
    var name = document.getElementById('fileInput2');
    //alert('Selected file: ' + name.files.item(0).name);
    //alert('Selected file: ' + name.files.item(0).size);
    //alert('Selected file: ' + name.files.item(0).type);
    document.getElementById('fileName2').innerHTML = name.files.item(0).name;
};
function showname3 () {
    var name = document.getElementById('fileInput3');
    //alert('Selected file: ' + name.files.item(0).name);
    //alert('Selected file: ' + name.files.item(0).size);
    //alert('Selected file: ' + name.files.item(0).type);
    document.getElementById('fileName3').innerHTML = name.files.item(0).name;
    document.getElementById('uploadFileOption3').style.display = "block";
};
/* TABS PATTERN */
function tabGroup(tableObj, which) {

    tabA = 'TAB-ONE';
    tabB = 'TAB-TWO';
    tabC = 'TAB-THREE';

    if(which == tabA) {
        document.getElementById("tabA").className = "tab-on";
        document.getElementById("tabB").className = "tab";
        document.getElementById("tabC").className = "tab";
        document.getElementById("tabOneContent").style.display = "block";
        document.getElementById("tabTwoContent").style.display = "none";
        document.getElementById("tabThreeContent").style.display = "none";
    } else if(which == tabB) {
        document.getElementById("tabA").className = "tab";
        document.getElementById("tabB").className = "tab-on";
        document.getElementById("tabC").className = "tab";
        document.getElementById("tabOneContent").style.display = "none";
        document.getElementById("tabTwoContent").style.display = "block";
        document.getElementById("tabThreeContent").style.display = "none";
    } else if(which == tabC) {
        document.getElementById("tabA").className = "tab";
        document.getElementById("tabB").className = "tab";
        document.getElementById("tabC").className = "tab-on";
        document.getElementById("tabOneContent").style.display = "none";
        document.getElementById("tabTwoContent").style.display = "none";
        document.getElementById("tabThreeContent").style.display = "block";
    } 
}
/* TABS PATTERN */
function vTabGroup(tableObj, which) {

    vTabA = 'TAB-ONE';
    vTabB = 'TAB-TWO';
    vTabC = 'TAB-THREE';

    if(which == vTabA) {
        document.getElementById("vTabA").className = "vTab-on";
        document.getElementById("vTabB").className = "vTab";
        document.getElementById("vTabC").className = "vTab";
        document.getElementById("vTabOneContent").style.display = "block";
        document.getElementById("vTabTwoContent").style.display = "none";
        document.getElementById("vTabThreeContent").style.display = "none";
    } else if(which == vTabB) {
        document.getElementById("vTabA").className = "vTab";
        document.getElementById("vTabB").className = "vTab-on";
        document.getElementById("vTabC").className = "vTab";
        document.getElementById("vTabOneContent").style.display = "none";
        document.getElementById("vTabTwoContent").style.display = "block";
        document.getElementById("vTabThreeContent").style.display = "none";
    } else if(which == vTabC) {
        document.getElementById("vTabA").className = "vTab";
        document.getElementById("vTabB").className = "vTab";
        document.getElementById("vTabC").className = "vTab-on";
        document.getElementById("vTabOneContent").style.display = "none";
        document.getElementById("vTabTwoContent").style.display = "none";
        document.getElementById("vTabThreeContent").style.display = "block";
    } 
}
/* Show more/less pattern */
function showMoreLess() {
    var x = document.getElementById("showMoreLessContent");
    y = document.getElementById("showMoreLessControl");
    if (x.style.display === "inline") {
        x.style.display = "none";
        y.innerText = "More";
    } else {
        x.style.display = "inline";
        y.innerText = "Less";
    }
}

