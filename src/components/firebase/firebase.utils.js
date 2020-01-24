import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDdfhr7w3drh5aVL-ZaG3vNyDREk70FFvc",
	authDomain: "crwn-clothing-db-41fe4.firebaseapp.com",
	databaseURL: "https://crwn-clothing-db-41fe4.firebaseio.com",
	projectId: "crwn-clothing-db-41fe4",
	storageBucket: "crwn-clothing-db-41fe4.appspot.com",
	messagingSenderId: "562087705",
	appId: "1:562087705:web:42f868cc50438cc895a788",
	measurementId: "G-WXSDS7X3DV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
