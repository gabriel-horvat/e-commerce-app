import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
import { googleSignInFailure } from "./user.actions";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";

// import {
//   fetchCollectionsSuccess,
//   fetchCollectionsFailure,
// } from "./shop.actions";

export function* signInWithGoogle() {
  try {
    const userRef = yield auth.signInWithPopup(googleProvider);
    console.log(userRef);
  } catch (error) {
    yield put(googleSignInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
