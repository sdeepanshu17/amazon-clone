// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVQ8KyG82JM6QWkIAGC8oqVde3_psh0WU",
  authDomain: "clone-90a5d.firebaseapp.com",
  projectId: "clone-90a5d",
  storageBucket: "clone-90a5d.appspot.com",
  messagingSenderId: "44454741633",
  appId: "1:44454741633:web:df2b3ba1ccc8a13662af80"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};