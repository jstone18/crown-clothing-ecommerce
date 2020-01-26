export const addItemToCart = (cartItems, cartItemToAdd) => {
	// Find the cart item
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	// Check for existing item in cart array
	if (existingCartItem) {
		return cartItems.map(cartItem =>
			// if the items match, create a new object
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	// If the cartItem does not exist create new array with new item
	// Quanitity property will get attached when item is added since
	// it wont go through the above if statement the first time around
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
