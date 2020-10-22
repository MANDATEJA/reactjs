'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var app = {
	title: 'Indecision Application',
	subtitle: 'To make decisions',
	options: ['one', 'two']
};
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	app.options.length > 0 ? React.createElement(
		'p',
		null,
		'Here are your options'
	) : React.createElement(
		'p',
		null,
		'No options'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		)
	)
);

var count = 0;
var addOne = function addOne() {
	count++;
	renderCounterApp();
};
var minusOne = function minusOne() {
	count--;
	renderCounterApp();
};
var reset = function reset() {
	count = 0;
	renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
	var templateTwo = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Count: ',
			count
		),
		React.createElement(
			'button',
			{ onClick: addOne },
			'+1'
		),
		React.createElement(
			'button',
			{ onClick: minusOne },
			'-1'
		),
		React.createElement(
			'button',
			{ onClick: reset },
			'reset'
		)
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
