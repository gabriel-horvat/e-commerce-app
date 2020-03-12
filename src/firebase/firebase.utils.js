import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCnWTNP545ojb4Py_Y91iqASydw5_A4yBU",
  authDomain: "crown-db-28869.firebaseapp.com",
  databaseURL: "https://crown-db-28869.firebaseio.com",
  projectId: "crown-db-28869",
  storageBucket: "crown-db-28869.appspot.com",
  messagingSenderId: "803209002060",
  appId: "1:803209002060:web:60b8317cf639c210f0c8e9",
  measurementId: "G-FHFN42WJ27"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user,", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
