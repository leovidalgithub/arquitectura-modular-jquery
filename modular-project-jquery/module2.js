(function($) {
	var msg = "module 2!!";
	console.log(msg);

	$( document ).on( "formSubmitted", function(event, text) {
		$("p span").html(text);
	});

	$(".console").on('click', function() {
		$( document ).trigger( "arturoPrefersAnotherName", { name: "juanma" } );
	});

	$( document ).on( "jobFinished", function( event, msg ) {
    console.log ("Job is Finished!!")
    console.log( msg )
	});

})(jQuery)
