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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	// user reference from authentication library
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	// snapShot returned from user reference
	const snapShot = await userRef.get();

	// check to see if snapShot exists from reference
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		// if no user, create new snapShot with documentRef object
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

// Covert collections in db into objects with appropriate properties
export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		};
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
