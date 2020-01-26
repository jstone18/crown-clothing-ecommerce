import React from "react";
import "./collectionItem.scss";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions/cartActions";

import CustomButton from "../custom-button/CustomButton";

const CollectionItem = ({ item, addItemToCart }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton inverted onClick={() => addItemToCart(item)}>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default connect(null, { addItemToCart })(CollectionItem);
