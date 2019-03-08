import React, { Component } from 'react';
import { MyContext } from '../context';

export class ListItems extends Component {
	state = {
		items: []
	};

	componentDidMount() {
		this.setState({
			items: this.context.items
		});
	}

	handleClick = (item) => {
		this.context.dispatch({ type: 'ADD_CART', item });
	};

	render() {
		return (
			<div className="list">
				<h2>Items:</h2>
				<ul>
					{this.state.items.map((item, key) => (
						<li key={key}>
							{item}
							&nbsp;
							<button onClick={() => this.handleClick(item)}>Add</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

ListItems.contextType = MyContext;

export default ListItems;
