$(function() {

  var $sections = $('section'),
    $nextSlide = $('#next-slide'),
    pagePosition = 0,
    previousPage,
    pageMaxPosition = $sections.length - 1;

  //Map the sections with unique identifier
  $sections.each(function(idx, elem) {
    $(elem).data("pos", idx);
  });

  //Call updatePosition on scroll
  $(window).bind('scroll', updatePosition);

  //Move on click
  $($nextSlide).click(nextSlideClick);

  function nextSlideClick() {
    if (pagePosition + 1 <= pageMaxPosition) {
      pagePosition++;

      $('html, body').stop().animate({
        scrollTop: $sections.eq(pagePosition).offset().top
      }, 500);
    }
  }

  //Update position
  function updatePosition() {
    var fromTop = $(this).scrollTop(),
      $curr = null;

    $sections.each(function(idx, elem) {
      if ($(elem).offset().top < fromTop + 30) {
        $curr = $(elem);
      }
    });

    if ($curr && pagePosition !== $curr.data('pos')) {
      previousPage = pagePosition;
      pagePosition = $curr.data('pos');

      toggleButton();
    }
  }

  function toggleButton() {
    // Hide next button if at the bottom of page
    if (pagePosition === pageMaxPosition && previousPage !== pageMaxPosition) {
      $($nextSlide).animate({
        bottom: -$(this).outerHeight()
      }, 800);
      // Show next button if leaving the bottom of page
    } else if (pagePosition !== pageMaxPosition && previousPage === pageMaxPosition) {
      $($nextSlide).animate({
        bottom: 0
      }, 800);
    }
  }

});
