import React from "react";

// Styled Components
import {
	CollectionItemContainer,
	AddButton,
	BackgroundImage,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer
} from "./CollectionItem.styles";

// Redux
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions/cartActions";

const CollectionItem = ({ item, addItemToCart }) => {
	const { name, price, imageUrl } = item;
	return (
		<CollectionItemContainer>
			<BackgroundImage className="image" imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton onClick={() => addItemToCart(item)} inverted>
				Add to cart
			</AddButton>
		</CollectionItemContainer>
	);
};

export default connect(null, { addItemToCart })(CollectionItem);
