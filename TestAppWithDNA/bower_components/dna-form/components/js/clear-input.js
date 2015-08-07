'use strict';

/**
 * Class representing a clear input
 * @class
 * @description A small CommonJs module to demonstrate a distribution architecture
 */
var ClearInput = function ( options ) {
	this.inputElement = options.el;
	this.init();
};

ClearInput.prototype.init = function () {
	this._wrapInput();
	this._bindListeners()
};

ClearInput.prototype._wrapInput = function () {
	this.inputElement.classList.add('has-clear');	
	var wrap = document.createElement( 'span' );
	var parent = this.inputElement.parentNode;
	var icon = document.createElement( 'span' );

	wrap.classList.add('clear-input-wrapper');
	icon.classList.add( 'clear-input')
	wrap.appendChild( this.inputElement );
	parent.appendChild(wrap);
	wrap.appendChild( icon );

	this.clearBtn = icon;
};

ClearInput.prototype._bindListeners = function () {
	var self = this;
	this.clearBtn.addEventListener( 'click', function(){
		self.inputElement.value = '';
	});
};

module.exports = ClearInput;
