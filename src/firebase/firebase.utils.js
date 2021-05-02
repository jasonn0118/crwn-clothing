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


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;