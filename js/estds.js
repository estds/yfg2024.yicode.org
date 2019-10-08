// Activate Bootstrap tooltips

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// facilitate share buttons

$(function () {
    $(".share-button").each(function () {
        $(this).attr("href", $(this).attr("href") + "&url=" + document.URL + "&title=" + document.title);
    });
});

// encode current url to qr-code
jQuery("#url-qr-wrap").qrcode({
    width: 96,
    height: 96,
    text: window.location.href,
});
