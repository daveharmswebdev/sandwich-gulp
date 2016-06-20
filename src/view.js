var view = {};
var $ = require('jQuery');
var catNav = require('../views/catNav.jade');
var catPanel = require('../views/catPanel.jade');

view.renderIngredientNav = function(menu) {
	var category = [];
	for (var key in menu) {
		category.push(key);
	}
	$('.interface').append(catNav({category}));
};

view.renderCategory = function(cat, menu) {
	$('.menu').after(catPanel({cat: cat, menu: menu[cat]}));
};

module.exports = view;