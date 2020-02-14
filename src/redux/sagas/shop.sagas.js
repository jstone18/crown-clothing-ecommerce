import { takeLatest, call, put } from "redux-saga/effects";

import { ShopActionTypes } from "../types/shopTypes";

import {
	firestore,
	convertCollectionsSnapshotToMap
} from "../../utilities/firebase/firebase.utils";

import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure
} from "../actions/shopActions";

export function* fetchCollectionsAsync() {
	yield console.log("I am fired");
	try {
		const collectionRef = firestore.collection("collections");
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapshot
		);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure)(error.message);
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}
