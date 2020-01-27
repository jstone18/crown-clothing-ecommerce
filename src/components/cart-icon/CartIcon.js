import React from "react";
import "./cartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleShowCart } from "../../redux/actions/cartActions";
import { selectCartItemsCount } from "../../redux/selectors/cart.selectors";

const CartIcon = ({ toggleShowCart, itemCount }) => {
	return (
		<div className="cart-icon" onClick={toggleShowCart}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

// Tracking cart quantity inside icon
const mapStateToProps = state => ({
	// get memoized value
	itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, { toggleShowCart })(CartIcon);
