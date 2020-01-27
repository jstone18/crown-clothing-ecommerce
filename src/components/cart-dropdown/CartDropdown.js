import React from "react";
import "./cartDropdown.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/selectors/cart.selectors";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

const CartDropdown = ({ cartItems, history }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton onClick={() => history.push("/checkout")}>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
