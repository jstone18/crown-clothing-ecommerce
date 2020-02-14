import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "../types/userTypes";

import {
	googleSignInSuccess,
	googleSignInFailure
} from "../actions/userActions";

import {
	auth,
	googleProvider,
	createUserProfileDocument
} from "../../utilities/firebase/firebase.utils";

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDocument, user);
		const userSnapshot = yield userRef.get();
		yield put(
			googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
		);
	} catch (error) {
		yield put(googleSignInFailure(error));
	}
}

export function* onGoogleSingInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
	yield all([call(onGoogleSingInStart)]);
}
