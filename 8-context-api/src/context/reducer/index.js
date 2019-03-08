export default (state, action) => {
	if (action.type === 'ADD_CART') {
		return { ...state, cart: [ ...state.cart, action.item ] };
	}

	if (action.type === 'REMOVE_CART') {
		let cart = state.cart;
		cart.splice(action.key, 1);
		return { ...state, cart };
	}
};
