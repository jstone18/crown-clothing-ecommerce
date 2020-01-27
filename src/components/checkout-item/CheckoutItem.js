import React from "react";
import "./checkoutItem.scss";
import { connect } from "react-redux";
import { removeItem } from "../../redux/actions/cartActions";

const CheckoutItem = ({ cartItem, removeItem }) => {
	const { name, price, quantity, imageUrl } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">{quantity}</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => removeItem(cartItem)}>
				&#10008;
			</div>
		</div>
	);
};

export default connect(null, { removeItem })(CheckoutItem);
