import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectShopCollections],
	collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
	// curried function that returns createSelector function
	createSelector(
		[selectShopCollections],
		// find collection.id matching the collectionUrlParam of the COLLECTION_ID_MAP
		collections => collections[collectionUrlParam]
	);
