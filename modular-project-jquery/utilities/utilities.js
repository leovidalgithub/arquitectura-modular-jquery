(function( win ) {

	win.myApp = win.myApp || {};

	function isString ( txt ) {
		return typeof(txt) === "string";
	}

	win.myApp.isString = isString;

})( window )