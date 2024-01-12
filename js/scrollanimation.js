var $animationelements = $('.animationelement');
var $window = $(window);

function checkifinview() {
  var windowheight = $window.height();
  var windowtopposition = $window.scrollTop();
  var windowbottomposition = (windowtopposition + windowheight);
 
  $.each($animationelements, function() {
    var $element = $(this);
    var elementheight = $element.outerHeight();
    var elementtopposition = $element.offset().top;
    var elementbottomposition = (elementtopposition + elementheight);
    if ((elementbottomposition >= windowtopposition) &&
        (elementtopposition <= windowbottomposition)) {
			$element.addClass('inview');
    } else
	{
      $element.removeClass('inview');
    }
  });
}

$window.on('scroll resize', checkifinview);
$window.trigger('scroll');
