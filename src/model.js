"use strict";

var model = {};
module.exports = model;
var $ = require('jQuery');
var control = require('../src/control.js');
var view = require('../src/view.js');
var menu;
var order = [];

function setMenu(data) {
	menu = data.menu;
	view.renderIngredientNav(menu);
	view.renderCategory('meat', menu);
	control.catNavListen();
	control.panelListen();

}

model.addToOrder = function(name, price) {
	var item = {};
	item.name = name;
	item.price = Number(price);
	order.push(item);
	view.renderOrder(order);
};

model.loadJson = function () {
	$.ajax('../data/menu.json').done(setMenu);
};

model.getMenu = function () {
	return menu;
};
