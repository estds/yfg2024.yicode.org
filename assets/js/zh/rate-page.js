$(document).ready(function() {

    // popup after sending the message
    $("#form_15840").submit(function(e){
        e.preventDefault();
        $.ajax({
            type : 'POST',
            data: $("#form_15840").serialize(),
            url : 'https://jrc.nhri.cn/app/mf/embed.php',
            dataType: 'html',
            success: function (data, status, request) {
                jQuery("#form_15840").empty().append('感谢您的反馈！');
            },
            error: function (request, status, error) {
                jQuery("#form_15840").empty().append('哎呀，我们的服务器出错了，请稍后再试。');
            }
        });
        return false;
    });

});
