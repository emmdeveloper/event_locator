// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWw6kGud9majPnXN6GAgMC8HOAgzZv_YA",
  authDomain: "pinshareimage-app.firebaseapp.com",
  projectId: "pinshareimage-app",
  storageBucket: "pinshareimage-app.appspot.com",
  messagingSenderId: "568625047095",
  appId: "1:568625047095:web:ca8a5cb1256eb3e011c1b2",
  measurementId: "G-KJ1RRPD98H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
