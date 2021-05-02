import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAPyQPgqJ8ysGu-Py7ortCdndSUK9nvOss',
  authDomain: 'crwn-db-9f588.firebaseapp.com',
  projectId: 'crwn-db-9f588',
  storageBucket: 'crwn-db-9f588.appspot.com',
  messagingSenderId: '312434651121',
  appId: '1:312434651121:web:bb5ab7de91aa859dcb5e50',
  measurementId: 'G-CLTCV3HE1L',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //If snapShot is not existed in the firestore.
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try{
      //Create new document.
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('Error while creating a user: ', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
