import React from "react";

// Styled Components
import {
	CheckoutItemContainer,
	ImageContainer,
	TextContainer,
	QuantityContainer,
	RemoveButtonContainer
} from "./CheckoutItem.styles";

// Redux
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
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt="item" />
			</ImageContainer>
			<TextContainer>{name}</TextContainer>
			<QuantityContainer>
				<div onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={() => addItemToCart(cartItem)}>&#10095;</div>
			</QuantityContainer>
			<TextContainer>{price}</TextContainer>
			<RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
				&#10008;
			</RemoveButtonContainer>
		</CheckoutItemContainer>
	);
};

export default connect(null, {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart
})(CheckoutItem);
