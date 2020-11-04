'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var app = {
	title: 'Indecision Application',
	subtitle: 'To make decisions',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
	}
	renderApp();
};

var onRemoveAll = function onRemoveAll() {
	app.options = [];
	renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
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
			'p',
			null,
			app.options.length
		),
		React.createElement(
			'button',
			{ onClick: onRemoveAll },
			'Remove All'
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

renderApp();
