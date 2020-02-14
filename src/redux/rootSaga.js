import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "../redux/sagas/shop.sagas";
import { userSagas } from "./sagas/user.sagas";

export function* rootSaga() {
	yield all([call(fetchCollectionsStart), call(userSagas)]);
}
