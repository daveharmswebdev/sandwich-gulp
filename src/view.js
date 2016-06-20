var view = {};
var navCategories = require('../view/navCategories.jade');

view.renderIngredientNav = function(menu) {
	var category = [];
	for (var key in menu) {
		category.push(key);
	}
	console.log(category);
};

module.exports = view;