// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDomyk6jYf-ns9LgwFs1fCt2TKck2k_7kc",
  authDomain: "doctors-79075.firebaseapp.com",
  projectId: "doctors-79075",
  storageBucket: "doctors-79075.appspot.com",
  messagingSenderId: "779202407035",
  appId: "1:779202407035:web:6f21ecd183cae449c910de",
  measurementId: "G-Z2SQG1V0RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app