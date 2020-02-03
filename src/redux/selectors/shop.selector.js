import { createSelector } from "reselect";

// Object to match string value to id of the collection
const COLLECTION_ID_MAP = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	womens: 4,
	mens: 5
};

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
	// curried function that returns createSelector function
	createSelector(
		[selectShopCollections],
		// find collection.id matching the collectionUrlParam of the COLLECTION_ID_MAP
		collections =>
			collections.find(
				collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
			)
	);
