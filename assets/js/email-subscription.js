jQuery(".validate").keypress(function(e){
    jQuery(this).removeClass('is-invalid')
})

function checkform() {
    re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!(re.test(jQuery("#email").val()))) {
        jQuery("#result").empty().append('<span class="text-danger">Please enter a valid email.</span>');
        jQuery("#email").addClass('is-invalid').focus();
        return false;
    }

    if (jQuery("#attribute1").val() == "") {
        jQuery("#result").empty().append('<span class="text-danger">Please enter your first name.</span>');
        jQuery("#attribute1").addClass('is-invalid').focus();
        return false;
    }
    if (jQuery("#attribute2").val() == "") {
        jQuery("#result").empty().append('<span class="text-danger">Please enter your last name.</span>');
        jQuery("#attribute2").addClass('is-invalid').focus();
        return false;
    }

    return true;
}

function submitForm() {
    jQuery("#result").empty().append('<i class="fas fa-circle-notch fa-spin"></i>');
    jQuery.ajax( {
        type: 'POST',
        data: jQuery('#subscribeform').serialize(),
        url: 'https://jrc.nhri.cn/app/pl/index.php?p=asubscribe&id=2',
        dataType: 'html',
        success: function (data, status, request) {
            jQuery("#result").empty().append('<span class="text-success">Success! Please check your inbox.</span>');
            jQuery("#attribute1").val('');
            jQuery("#attribute2").val('');
            jQuery("#email").val('');
        },
        error: function (request, status, error) {
        	 jQuery("#result").empty().append('<span class="text-danger">Oops, sorry! We had a server error.</span>');
        }
    });
}
