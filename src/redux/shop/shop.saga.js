import { takeEvery } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("i am fetchCollectionsAsync");

  // yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START,)
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
