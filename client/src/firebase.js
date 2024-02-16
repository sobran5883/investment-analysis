// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBioHZYtwTw4V1lCMv9mNrkSYREtjvrmGE",
  authDomain: "investment-project-d6c86.firebaseapp.com",
  projectId: "investment-project-d6c86",
  storageBucket: "investment-project-d6c86.appspot.com",
  messagingSenderId: "799401375414",
  appId: "1:799401375414:web:494c0a6a26fbbde5ee1817",
  measurementId: "G-532KB6JFXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;