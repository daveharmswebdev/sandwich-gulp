var view = {};
var $ = require('jQuery');
var catNav = require('../views/catNav.jade');
var catPanel = require('../views/catPanel.jade');
var orderView = require('../views/orderView.jade');

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

view.renderOrder = function(order) {
	let subTotal = order.map((item) => item.price).reduce((a,b) => (a+b)).toFixed(2);
	console.log(subTotal)
	let tax = subTotal * 0.925;
	tax = tax.toFixed(2);
	let grand = parseFloat(subTotal) + parseFloat(tax);
	grand = grand.toFixed(2);
	$('.order--view').remove();
	$('.order').append(orderView({order, subTotal, tax, grand}));
};

module.exports = view;