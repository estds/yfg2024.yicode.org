// Activate Bootstrap tooltips

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// facilitate share buttons

$(function () {
    $(".share-button").each(function () {
        $(this).attr("data-url", $(this).attr("data-url") + "&url=" + document.URL + "&title=" + document.title);
    });
});

// encode current url to qr-code
var qrcode = new QRCode({
  content: window.location.href,
  padding: 0,
  width: 96,
  height: 96,
  color: "#494f54",
  background: "#ffffff",
  ecl: "M"
});
var svg = qrcode.svg();
$("#url-qr-wrap").append(svg);


// targeting popover contents
$(function toggle_share_bspopup() {
  $('.share-toggles').popover({
    //container: 'body',
    html: true,
    trigger: 'focus',
    placement: 'bottom',
    sanitize: false,
    content: function() {
      var pop_target = $(this).attr("data-popover-content");
      return $(pop_target).children(".popover-content").clone();
    }
  });
})

// using Web Share API if it is available
const shareButton = document.querySelector('#share-toggle-sns');

if (navigator.share) { 
	shareButton.classList.remove("share-toggles");
}
    
shareButton.addEventListener('click', event => {
   navigator.share({
      title: document.title,
      url: document.URL,
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
});
