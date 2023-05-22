/* Contacts page
========================================================================== */

import gsap from "gsap"


/**
 * Contacts form submission
 */
$(document).on("click", "#sendBtn", function(e){
    e.preventDefault()

    // initialze form data
    var formData = {
        "r_name"    : "send-contact-form",
        "first_name": $("#first-name").val(),
        "last_name" : $("#last-name").val(),
        "email"     : $("#email").val(),
        "subject"   : $("#subject").val(),
        "message"   : $("#message").val()
    }


    // stop button clicking
    if ($(this).hasClass("processing")){
        return false
    }else{
        $(this).addClass("processing")
    }
    

    // send AJAX request to backend
    $.ajax({
        url     : 'http://localhost:8888/',
        type    : 'post',
        data    : formData,
        dataType: 'json',
        success : function(data){
            // clear field from previous errors
            $(".contacts-body__form-group").removeClass("error")
            
            // redirect to success page
            if (data.status == "success"){
                console.log("succes page")
            }
            
            // show error
            else{
                var field         = $(".contacts-body__form-group[data-field=" + data.field +"]")
                var fieldSection  = $(field).offset().top
                    fieldSection -= fieldSection/100*15
                
                // scrolling to field with error
                $("html, body").animate({scrollTop: fieldSection})

                // show error
                $(field).addClass("error")
                $(field).find(".contacts-body__form-field-error").html(data.error)
            }

            // allow form resubmit option
            $(".contacts-body__form-btn").removeClass("processing")
        }
    })
})
