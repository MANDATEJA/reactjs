console.log('App.js is running')

// JSX - JavaScript XML

const app = {
	title: 'Indecision Application',
	subtitle: 'To make decisions',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = ''
	}
	renderApp();
};

const onRemoveAll = () => {
	app.options = [];
	renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
	const template = (
	  <div>
	  	<h1>{app.title}</h1>
	  	{app.subtitle && <p>{app.subtitle}</p>}
			{app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
			<p>{app.options.length}</p>
			<button onClick={onRemoveAll}>Remove All</button>
	  	<form onSubmit={onFormSubmit}>
	  		<input type="text" name="option"/>
	  		<button>Add Option</button>
	  	</form>
	  </div>
	);

	ReactDOM.render(template, appRoot);
};

renderApp();