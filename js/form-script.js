$(document).ready(function () {
  $("#callback").submit(function (e) {
    e.preventDefault();
    var form_data = $(this).serialize();
    $(".results").css({'left':'0', 'top':'0'});
    $.ajax({
      method: "POST",
      url: "mail.php",
      data: form_data,
      success: function () {
        if (e.target.closest('#form_cont')) {
          $(".results").offset({
            top: document.documentElement.clientHeight / 2 - ($(".results").outerHeight()) / 2,
            left: document.documentElement.clientWidth / 2 - ($(".results").outerWidth()) / 2
          });
          $(".results").fadeIn("slow").delay(1200).fadeOut(500);
    
        } else {
          $('.blockforma').animate({
              opacity: 0
            }, 500,
            function () {
              $(this).css('display', 'none');
              $('.fullfon').fadeOut(3200);
              $(".results").offset({
                top: document.documentElement.clientHeight / 2 - ($(".results").outerHeight()) / 2,
                left: document.documentElement.clientWidth / 2 - ($(".results").outerWidth()) / 2
              });
              $(".results").fadeIn("slow").delay(1200).fadeOut(500);
      
            }
          );
        };
      }
    });
  });
});