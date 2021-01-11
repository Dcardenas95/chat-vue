
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAe_P-c2Jc1M0ePqM0OaKHuO5dMbrmbBtc",
    authDomain: "chat-865d9.firebaseapp.com",
    projectId: "chat-865d9",
    storageBucket: "chat-865d9.appspot.com",
    messagingSenderId: "402307668014",
    appId: "1:402307668014:web:9c1840747171bfe62527bf"
};

firebase.initializeApp(firebaseConfig);
export const fb =firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();