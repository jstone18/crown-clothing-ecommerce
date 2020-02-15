import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../types/userTypes";
import { clearCart } from "../actions/cartActions";

export function* clearCartOnSignOut() {
	yield put(clearCart());
}

export function* onSignoutSuccess() {
	yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
	yield all([call(onSignoutSuccess)]);
}
