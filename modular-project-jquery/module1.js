(function($) {
	var msg = "module 1!!"<
	console.log(msg);

	$( document ).on( "arturoPrefersAnotherName", function( event, dataFromOuterSpace ) {
	    console.log ("Data is ready!!");
    	console.log( dataFromOuterSpace.name );
		$( document ).trigger( "jobFinished", "Well done kid!!!" );
	});


	$("form").on('submit', function(event) {
		event.preventDefault();
		var text = $("input").val();
		$( document ).trigger( "formSubmitted", text );
	});

})(jQuery);
