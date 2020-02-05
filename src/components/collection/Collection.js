import React from "react";

// Styled Components
import {
	CollectionsContainer,
	TitleContainer,
	ItemsContainer
} from "./Collection.styles";

// Redux
import { connect } from "react-redux";
import { selectCollection } from "../../redux/selectors/shop.selector";

// Components
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<CollectionsContainer>
			<TitleContainer>{title}</TitleContainer>
			<ItemsContainer>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</ItemsContainer>
		</CollectionsContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	// since selector uses state in the function, need to pass the app state as well
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
