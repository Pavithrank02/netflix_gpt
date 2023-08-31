// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYjInkPZGh4WU2Tts6d21_uy1KMfZQ2K4",
  authDomain: "netflixgpt-be3fa.firebaseapp.com",
  projectId: "netflixgpt-be3fa",
  storageBucket: "netflixgpt-be3fa.appspot.com",
  messagingSenderId: "366094645015",
  appId: "1:366094645015:web:88642739cb04b552016952",
  measurementId: "G-78XQP8ZREM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()