console.log('App.js is running')

// JSX - JavaScript XML

const app = {
	title: 'Indecision Application',
	subtitle: 'To make decisions',
	options: ['one', 'two']
};
const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		{app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);

const user = {
	name: 'Teja',
	age: 25,
	location: 'Bangalore'
};
function getLocation (location) {
	if (location) {
		return <p>Location: {location}</p>;
	}
}
const templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);