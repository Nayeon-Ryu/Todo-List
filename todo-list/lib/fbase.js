import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDCCe5kBKCBwAE-9ieLeCX7CwPhDAm5lc8", // process.env.REACT_APP_API_KEY,
    authDomain: "todo-list-6567c.firebaseapp.com",
    projectId: "todo-list-6567c",
    storageBucket: "todo-list-6567c.appspot.com",
    messagingSenderId: "957310092444",
    appId: "957310092444:web:982b26a10f56904f69d959",
  };

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();