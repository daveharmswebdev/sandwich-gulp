var model = {};
module.exports = model;
var $ = require('jQuery');
var control = require('../src/control.js');
var view = require('../src/view.js');
var menu;

function setMenu(data) {
	menu = data.menu;
	view.renderIngredientNav(menu);
	view.renderCategory('meat', menu);
	control.catNavListen();
	control.panelListen();

}

// function catNavListen() {
// 	$('.menu').on('click', '.menu--nav--cats', function(event) {
// 		$('.panel').remove();
// 		view.renderCategory(event.target.id, menu);
// 	});
// }

// function panelListen() {
// 	$('.interface').on('click', '.ingred', function(event) {
// 		console.log(event.target);
// 	});
// }

model.loadJson = function () {
	$.ajax('../data/menu.json').done(setMenu);
};
model.getMenu = function () {
	return menu;
};
