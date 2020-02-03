import React from "react";
import "./collectionsOverview.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/selectors/shop.selector";

import CollectionPreview from "../collection-preview/CollectionPreview";

const CollectionsOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
