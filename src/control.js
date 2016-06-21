"use strict";

var control = {};
var $ = require('jQuery');
var model = require('../src/model.js');
var view = require('../src/view.js');

 control.catNavListen = function() {
	$('.menu').on('click', '.menu--nav--cats', function(event) {
		$('.panel').remove();
		let menu = model.getMenu();
		view.renderCategory(event.target.id, menu);
	});
};

 control.panelListen = function() {
	$('.interface').on('click', '.ingred', function(event) {
		let name = $(event.currentTarget).children('.ingred--name').text();
		let price = $(event.currentTarget).children('.ingred--price').text();
		model.addToOrder(name, price);
	});
};

control.test = function() {
	console.log('test');
}

module.exports = control;