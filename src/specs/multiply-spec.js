"use strict";

var multiply = require('./../multiply.js');

describe('#multiply', function() {
	it('returns the correct multiplied value of', function() {
		var product = multiply(5,5);
		expect(product).toBe(25);
	});
});