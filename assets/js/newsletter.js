$(document).ready(function() {
  function checkform() {
    if ($("#email").val() == "") {
      $("#status").empty().append('<span class="text-danger">Please enter your first name.</span>');
      $("#email").addClass('is-invalid').focus();
      return false;
    }
    if ($("#FirstName").val() == "") {
      $("#status").empty().append('<span class="text-danger">Please enter your first name.</span>');
      $("#FirstName").addClass('is-invalid').focus();
      return false;
    }
    if ($("#name").val() == "") {
      $("#status").empty().append('<span class="text-danger">Please enter your last name.</span>');
      $("#name").addClass('is-invalid').focus();
      return false;
    }

    return true;
  }
  $(".validate").keypress(function(e) {
    $(this).removeClass('is-invalid')
  })
  $("#signup-form").submit(function(e) {
    e.preventDefault();
    $("#status").empty().append('<i class="fas fa-circle-notch fa-spin"></i>');
    var $form = $(this),
      name = $form.find('input[name="name"]').val(),
      email = $form.find('input[name="email"]').val(),
      Title = $form.find('select[name="Title"]').val(),
      FirstName = $form.find('input[name="FirstName"]').val(),
      url = 'https://owl.jrc.nhri.cn/_api/wssf-signup.php';

    $.post(url, {
        name: name,
        email: email,
        Title: Title,
        FirstName: FirstName
      },
      function(data) {
        if (data) {
          if (data == "Some fields are missing.") {
            $("#status").empty().append('<span class="text-warning">Something is missing.</span>');
          } else if (data == "Invalid email address.") {
            $("#status").empty().append('<span class="text-warning">This email is invalid.</span>');
            $("#email").addClass('is-invalid').focus();
          } else if (data == "Invalid list ID.") {
            $("#status").empty().append('<span class="text-danger">Your list ID is invalid.</span>');
          } else if (data == "Already subscribed.") {
            $("#status").empty().append('<span class="text-info">You have already subscribed.</span>');
          } else {
            $("#status").empty().append('<span class="text-success">Success! Please check email.</span>');
            $('#signup-form')[0].reset();
          }
        } else {
          //alert("Sorry, unable to subscribe. Please try again later!");
          $("#status").empty().append('<span class="text-danger">Oops! We had a server error.</span>');
        }
      }
    );
  });
  $("#signup-form").keypress(function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      if (checkform()) {
        $(this).submit();
      }
    }
  });
  $("#submit-btn").click(function(e) {
    e.preventDefault();
    if (checkform()) {
      $("#signup-form").submit();
    }
  });
});