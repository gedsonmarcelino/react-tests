import React, { Component } from 'react';
import './App.css';

import ListItems from './components/ListItems';
import Cart from './components/Cart';
import { MyProvider } from './context';

class App extends Component {
	render() {
		return (
			<div className="content">
				<MyProvider>
					<ListItems />
					<Cart />
				</MyProvider>
			</div>
		);
	}
}

export default App;
