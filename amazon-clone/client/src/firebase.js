import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAh4HjitLE_U08mee7QPSDTXxGQUgsVrP0",
    authDomain: "clone-3b9b3.firebaseapp.com",
    projectId: "clone-3b9b3",
    storageBucket: "clone-3b9b3.appspot.com",
    messagingSenderId: "306609177351",
    appId: "1:306609177351:web:be5e0eb4c6b087a3517ba2",
    measurementId: "G-P5JJ7M56JN"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };