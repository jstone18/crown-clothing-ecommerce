import React from "react";
import "./cartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleShowCart } from "../../redux/actions/cartActions";

const CartIcon = ({ toggleShowCart, itemCount }) => {
	return (
		<div className="cart-icon" onClick={toggleShowCart}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

// Tracking cart quantity inside icon
const mapStateToProps = ({ cart: { cartItems } }) => ({
	// selector that gets quantity of cart items
	itemCount: cartItems.reduce(
		(accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
		0
	)
});

export default connect(mapStateToProps, { toggleShowCart })(CartIcon);
