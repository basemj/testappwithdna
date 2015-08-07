/**
 * Demo of using a clear input JS module
 * @description I dev to this demo, which then also serve as a source of reference on how to use the module
 * For this module i am instantiating it for each [data-clearinput] element on the page
 */

// Require in the module i am developing. This is also how you consume it 
// from within a micrsite, but there you would require it from the installed bower package
var ClearInput = require('../../../components/js/clear-input');

// Use the module however you need....
var inputs = document.querySelectorAll('[data-clearinput]');
[].slice.call( inputs ).forEach( function( input ) {
	if ( input.getAttribute('data-clearinput') === 'false' ) {
		return;
	}
	new ClearInput({
		el: input
	});	
});
