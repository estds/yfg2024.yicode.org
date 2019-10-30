$(document).ready(function ratePage() {

    // popup after sending the message
    $("#form_15840").submit(function(e){
        e.preventDefault();
        $.ajax({
            type : 'POST',
            data: $("#form_15840").serialize(),
            url : 'https://jrc.nhri.cn/app/mf/embed.php',
            dataType: 'html',
            success: function (data, status, request) {
                jQuery("#form_15840").empty().append('Thank you for your feedback!');
            },
            error: function (request, status, error) {
                jQuery("#form_15840").empty().append('Whoops, we had a server error. Please try again later.');
            }
        });
        return false;
    });

});
