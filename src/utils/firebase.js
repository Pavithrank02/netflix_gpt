// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsP-AwmCjP3NBe5PbgQkac9ClCM3rEeGM",
  authDomain: "netflix-gpt-224c2.firebaseapp.com",
  projectId: "netflix-gpt-224c2",
  storageBucket: "netflix-gpt-224c2.appspot.com",
  messagingSenderId: "795160664911",
  appId: "1:795160664911:web:59a1f95000818b5c5b033a",
  measurementId: "G-7LCV1YSVKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()