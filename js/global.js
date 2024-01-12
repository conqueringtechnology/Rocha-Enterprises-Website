//Preload Screen
$(window).load(function() {
	$('.preloadcontainer').fadeOut();
});

$(document).ready(function(){	
	var navLink = $('.navlink');
  
	// Smooth scrolling
	navLink.click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000 );
	});

	// Active link switching
	$(window).scroll(function() {
		var scrollbarLocation = $(this).scrollTop();
		navLink.each(function() {
			var sectionOffset = $(this.hash).offset().top - 100;
			
			if ( sectionOffset <= scrollbarLocation ) {
				$(this).parent().addClass('navlink active');
				$(this).parent().siblings().removeClass('navlink active');
			}
		})
	})
});



