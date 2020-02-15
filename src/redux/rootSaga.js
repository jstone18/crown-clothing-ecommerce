import { all, call } from "redux-saga/effects";
import { shopSagas } from "../redux/sagas/shop.sagas";
import { userSagas } from "./sagas/user.sagas";
import { cartSagas } from "./sagas/cart.sagas";

export function* rootSaga() {
	yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
