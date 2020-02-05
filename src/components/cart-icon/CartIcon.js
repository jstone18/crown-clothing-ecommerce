import React from "react";

// Styled Components
import {
	CartIconContainer,
	ShoppingIcon,
	ItemCountContainer
} from "./CartIcon.styles";

// Redux
import { connect } from "react-redux";
import { toggleShowCart } from "../../redux/actions/cartActions";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/selectors/cart.selectors";

const CartIcon = ({ toggleShowCart, itemCount }) => {
	return (
		<CartIconContainer onClick={toggleShowCart}>
			<ShoppingIcon />
			<ItemCountContainer>{itemCount}</ItemCountContainer>
		</CartIconContainer>
	);
};

// Tracking cart quantity inside icon
const mapStateToProps = createStructuredSelector({
	// get memoized value
	itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, { toggleShowCart })(CartIcon);
