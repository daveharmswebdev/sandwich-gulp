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
		console.log(event.currentTarget);
	});
};

module.exports = control;