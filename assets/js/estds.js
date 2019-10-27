// tweaks via javascript
$(document).ready(function(){

	// set .bg-by-attr item by data-image attribute
	$(".bg-by-attr").each(function() {
		var attr = $(this).attr('data-image');

		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background-image', 'url(' + attr + ')');
		}

	});

	// activate Bootstrap tooltips
	$('[data-toggle="tooltip"]').tooltip();
	
	// encode current url to qr-code and put it into #url-qr-wrap
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
	
	
	// targeting popover contents of .share-toggles
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
		
});

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




// Scrolls smoothly to anchor
$(document).ready(function(){
// Add smooth scrolling to all .sjump links
$(".sjump").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {
  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    //window.location.hash = hash;
  });
} // End if
});
});

//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function() {
if ($(this).scrollTop() > 200) {
    if (!fixed) {
	fixed = true;
	// $('#to-top').css({position:'fixed', display:'block'});
	$('#to-top').show("slow", function() {
	    $('#to-top').css({
		position: 'fixed',
		display: 'block'
	    });
	});
    }
} else {
    if (fixed) {
	fixed = false;
	$('#to-top').hide("slow", function() {
	    $('#to-top').css({
		display: 'none'
	    });
	});
    }
}
});
