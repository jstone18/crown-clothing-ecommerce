import { CartActionTypes } from "../types/cartTypes";

export const toggleShowCart = () => ({
	type: CartActionTypes.TOGGLE_SHOW_CART
});

export const addItemToCart = item => ({
	type: CartActionTypes.ADD_ITEM_TO_CART,
	payload: item
});

export const clearItemFromCart = item => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item
});

export const removeItemFromCart = item => ({
	type: CartActionTypes.REMOVE_ITEM_FROM_CART,
	payload: item
});

export const clearCart = () => ({
	type: CartActionTypes.CLEAR_CART
});
