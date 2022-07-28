import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXHmrtXZpDzrPNAUanlMlwpJq8Y0Hm8yU",
    authDomain: "wine-store-8d8b0.firebaseapp.com",
    projectId: "wine-store-8d8b0",
    storageBucket: "wine-store-8d8b0.appspot.com",
    messagingSenderId: "717037358823",
    appId: "1:717037358823:web:d41ff1ec94d9c5e190dc42",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
