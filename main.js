$(function () {

  var onSlide = 0;

  $('#next-slide').click(function () {
    onSlide++;

    $("html, body").stop().animate({
      "scrollTop": $('#slide-' + onSlide).offset().top
    }, 900, "swing");
  })

})
