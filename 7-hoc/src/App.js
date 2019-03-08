import React, { Component } from 'react';
import withLoading from './hoc/withLoading';
import { loadItems } from './api';

class App extends Component {
	render() {
		return (
			<div>
				<h1>HOC</h1>
				<ul>{this.props.items.map((item, key) => <li key={key}>{item}</li>)}</ul>
			</div>
		);
	}
}

export default withLoading(loadItems)(App);
