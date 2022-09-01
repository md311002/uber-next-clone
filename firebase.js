// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz_irWi9YRn0MAceWhIOgzzr1eAWfSgz4",
    authDomain: "uber-clone-700b5.firebaseapp.com",
    projectId: "uber-clone-700b5",
    storageBucket: "uber-clone-700b5.appspot.com",
    messagingSenderId: "1020973575673",
    appId: "1:1020973575673:web:2db753e9623aaeec146128"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth }