import React from "react";
import "./cartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleShowCart } from "../../redux/actions/cartActions";

const CartIcon = ({ toggleShowCart }) => {
	return (
		<div className="cart-icon" onClick={toggleShowCart}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default connect(null, { toggleShowCart })(CartIcon);
