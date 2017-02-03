(function($, myApp) {

	$( document ).on( "jobFinished", function( event, msg ) {
	    console.log ("Module 3 has also received 'jobFinished' : " + msg);
	});

	$( document ).on( "arturoPrefersAnotherName", function( event, data ) {
		console.log ("Module 3 has also received 'arturoPrefersAnotherName' : " + data.name );
	});

	console.log ( "myString result = " + myApp.isString ("aaaaa") );

})(jQuery, myApp)
