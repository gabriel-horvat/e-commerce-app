import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user-saga";
import { shopSagas } from "./shop/shop.saga";
import { cartSagas } from "./cart/cart.saga";

export default function* rootSaga() {
  yield all([call(userSagas), call(shopSagas), call(cartSagas)]);
}
