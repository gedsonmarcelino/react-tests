import React, { Component } from 'react';
import { MyContext } from '../context';

export class Cart extends Component {
	handleClick = (key) => {
		this.context.dispatch({ type: 'REMOVE_CART', key });
	};

	render() {
		return (
			<div className="cart">
				<h2>Cart:</h2>
				<ul>
					{this.context.cart.map((item, key) => (
						<li key={key}>
							{item}
							&nbsp;
							<button onClick={() => this.handleClick(key)}>Remove</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

Cart.contextType = MyContext;

export default Cart;
