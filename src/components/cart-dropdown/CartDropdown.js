import React from "react";

// Styled Components
import {
	CartDropdownContainer,
	CartItemsContainer,
	EmptyMessageContainer
} from "./CartDropdown.styles";

// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/selectors/cart.selectors";

// React Router
import { withRouter } from "react-router-dom";

// Components
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

const CartDropdown = ({ cartItems, history }) => {
	return (
		<CartDropdownContainer>
			<CartItemsContainer>
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
				)}
			</CartItemsContainer>
			<CustomButton onClick={() => history.push("/checkout")}>
				GO TO CHECKOUT
			</CustomButton>
		</CartDropdownContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
