(function( win ) {

	win.myApp = win.myApp || {};

	function isBoolean ( value ) {
		return typeof(value) === "boolean";
	}

	win.myApp.isBoolean = isBoolean;

})( window )