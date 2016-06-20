var model = {};
var $ = require('jQuery');
var view = require('../src/view.js');
var menu;

function setMenu(data) {
	menu = data.menu;
	view.renderIngredientNav(menu);
}

model.loadJson = function () {
	$.ajax('../data/menu.json').done(setMenu);
};

module.exports = model;