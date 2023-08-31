// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh4CujSr3EBi0Jj83chMbf20ubj7vlb3Q",
  authDomain: "react-prep-6591d.firebaseapp.com",
  databaseURL: "https://react-prep-6591d-default-rtdb.firebaseio.com",
  projectId: "react-prep-6591d",
  storageBucket: "react-prep-6591d.appspot.com",
  messagingSenderId: "58371218226",
  appId: "1:58371218226:web:70777f37c8832c8ea1d52b",
  measurementId: "G-4WDTGEE2P6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()