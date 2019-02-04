
(function($) {
	
    $(function () {
    
      $('.btn-cta').click(function () {
        console.log("Pop Up clicked")
        $('.overlay').addClass('is-open');
        return false;
      });
    
      $('.close-btn').click(function () {
        $('.overlay').removeClass('is-open');
      });
    
    });
})( jQuery );
