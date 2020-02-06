import React, { Component } from "react";

// React Router
import { Route } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { updateCollections } from "../../redux/actions/shopActions";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";

// Firebase Utils
import {
	firestore,
	convertCollectionsSnapshotToMap
} from "../../utilities/firebase/firebase.utils";

// Components
import CollectionPage from "../../components/collection/Collection";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class Shop extends Component {
	state = {
		isLoading: true
	};
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		collectionRef.onSnapshot(async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({
				isLoading: false
			});
		});
	}

	render() {
		const { match } = this.props;
		const { isLoading } = this.state;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionPageWithSpinner isLoading={isLoading} {...props} />
					)}
				/>
			</div>
		);
	}
}

export default connect(null, { updateCollections })(Shop);
