/*------------------COPYRIGHT------------------*
* ALL RIGHTS RESERVED TO VLAD BALANESCU, 2016  *
* Personal Website                             *
* NOTICE:  All  information  contained  herein *
*          is and remains  the   property   of *
*          Vlad Balanescu.  The   intellectual *
*          and technical  concepts   contained *
*          herein  are proprietary   to   Vlad *
*          Balanescu.   Dissemination  of this *
*          information   or   reproduction  of *
*          this material is strictly forbidden *
*          unless prior written  permission is *
*          obtained    from     Vlad Balanescu.*
----------------------------------------------*/
$(document).ready(function() {

    // Preloader
    $(window).load(function() {
        $('#preloader, #preloaderText').fadeOut('slow', function() {
            $(this).remove();
        });
    });
    // Preloader - END



    // Form check
    $("#send").click(function() {
        // Check for empty fields in the form
        var empty = $(this).parent().find("input").filter(function() {
            return this.value === "";
        });

        // Exclude send and antispam inputs
        empty.length -= 1;
        if (($('#antispam').value != "") && (empty.length != 0)) {
            empty.length += 1;
        }

        // Send only if all the fields are filled in and 1 tickbox ticked
        if ((empty.length != 0) || ($('.checkBox:checkbox:checked').length === 0)) {
            alert("Please fill in all the fields !")
        } else {
            $('#form').submit();
        }
    });
    // Only 1 tickbox clicked at a time
    $('.checkBox').click(function() {
        $(this).siblings('input:checkbox').prop('checked', false);
    });
    // Form check - END

    // Slide up
    $("#up").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    // Slide up - END

    // Submenu
    $(function() {
        var timer;
        $('#submenu, .portfolioLink').hover(function() {
            $('.portfolioLink').css('color', '#66ffff');
            $('#submenu').stop(true, true).delay(200).fadeIn(300);
        }, function() {
            //Don't change color if on any Portfolio page
            if ($('.portfolioLink').parent().children().hasClass('current')) {
                $('.portfolioLink').css('color', '#66ffff');
            } else {
                $('.portfolioLink').css('color', '#ffffff');
            }
            $('#submenu').stop(true, true).delay(200).fadeOut(300);
        })
    });
    //Submenu - END
});
