import React from 'react';
import reducer from './reducer';

const Context = React.createContext();

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
