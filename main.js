$(function(){

    var pagePosition = 0,
        $sections = $('section'),
        pageMaxPosition = $sections.length - 1;

    //Map the sections with unique identifier
    $sections.each(function(idx, elem) { $(elem).data("pos", idx); });

    //Call updatePosition on scroll
    $(window).bind('scroll', updatePosition);

    //Move on click
    $('#next-slide').click(function(e){
        if (pagePosition + 1 <= pageMaxPosition) {
            pagePosition++;

            $('html, body').stop().animate({
                  scrollTop: $sections.eq(pagePosition).offset().top
            }, 500);
        }
    });

    //Update position
    function updatePosition(){
       var fromTop = $(this).scrollTop();
       var $curr = null;

       $sections.each(function(idx, elem){
           if ( $(elem).offset().top < fromTop + 30 ) { $curr = $(elem); }
       });

       if ($curr && pagePosition !== $curr.data('pos')) {
           pagePosition = $curr.data('pos');
       }
    }

});
