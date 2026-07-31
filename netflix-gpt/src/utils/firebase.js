// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNNKut5M6QcE7kYPuOEDC_37TwNCEndwM",
  authDomain: "netflixgpt-69af5.firebaseapp.com",
  projectId: "netflixgpt-69af5",
  storageBucket: "netflixgpt-69af5.firebasestorage.app",
  messagingSenderId: "675929458582",
  appId: "1:675929458582:web:0365b6060e1ba52371ffb7",
  measurementId: "G-29TVDHRDJT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
