export const loadItems = () => {
	return new Promise((resolve, reject) => {
		return setTimeout(() => {
			resolve([ 'I', 'am', 'testing', 'High', 'Order', 'Component', '.' ]);
		}, 3000);
	});
};
