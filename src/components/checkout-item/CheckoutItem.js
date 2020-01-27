import React from "react";
import "./checkoutItem.scss";
import { connect } from "react-redux";
import {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart
} from "../../redux/actions/cartActions";

const CheckoutItem = ({
	cartItem,
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart
}) => {
	const { name, price, quantity, imageUrl } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItemToCart(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div
				className="remove-button"
				onClick={() => clearItemFromCart(cartItem)}>
				&#10008;
			</div>
		</div>
	);
};

export default connect(null, {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart
})(CheckoutItem);
