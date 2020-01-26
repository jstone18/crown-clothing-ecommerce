import { CartActionTypes } from "../types/cartTypes";

export const toggleShowCart = () => ({
	type: CartActionTypes.TOGGLE_SHOW_CART
});

export const addItemToCart = item => ({
	type: CartActionTypes.ADD_ITEM_TO_CART,
	payload: item
});
