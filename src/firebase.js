// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6aumKPFVss2dGTmCBYW9ng1BSKW6ySYA",
  authDomain: "c-2-1d6cd.firebaseapp.com",
  databaseURL: "https://c-2-1d6cd.firebaseio.com",
  projectId: "c-2-1d6cd",
  storageBucket: "c-2-1d6cd.appspot.com",
  messagingSenderId: "719479959677",
  appId: "1:719479959677:web:da9e5746b005947ad24114",
  measurementId: "G-RX2B2NNJGE",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
