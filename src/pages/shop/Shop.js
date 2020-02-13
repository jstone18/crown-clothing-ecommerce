import React, { Component } from "react";

// React Router
import { Route } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/actions/shopActions";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import { selectIsCollectionFetching } from "../../redux/selectors/shop.selector";

import { createStructuredSelector } from "reselect";

// Components
import CollectionPage from "../../components/collection/Collection";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class Shop extends Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const { match, isCollectionFetching } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<CollectionsOverviewWithSpinner
							isLoading={isCollectionFetching}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionPageWithSpinner
							isLoading={isCollectionFetching}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isFetching: selectIsCollectionFetching
});

export default connect(mapStateToProps, { fetchCollectionsStartAsync })(Shop);
