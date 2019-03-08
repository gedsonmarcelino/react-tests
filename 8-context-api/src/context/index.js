import React from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
	if (action.type === 'ADD_CART') {
		return { ...state, cart: [ ...state.cart, action.item ] };
	}

	if (action.type === 'REMOVE_CART') {
		let cart = state.cart;
		cart.splice(action.key, 1);

		return { ...state, cart };
	}
};

export class MyProvider extends React.Component {
	state = {
		items: [ 'car', 'bike', 'boat' ],
		cart: [],
		dispatch: (action) => {
			this.setState((state) => reducer(state, action));
		}
	};

	render() {
		const { state, props: { children } } = this;
		return <Context.Provider value={state}>{children}</Context.Provider>;
	}
}

export const MyConsumer = Context.Consumer;

export const MyContext = Context;
