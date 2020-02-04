import React from "react";
import "./collection.scss";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/selectors/shop.selector";

import CollectionItem from "../collection-item/CollectionItem";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	// since selector uses state in the function, need to pass the app state as well
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
