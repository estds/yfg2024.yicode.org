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
