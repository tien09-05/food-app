// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7VOe1vd4Yg4rVLFxZ7ysCQ3PXRuXrn2w",
  authDomain: "food-app-345906.firebaseapp.com",
  projectId: "food-app-345906",
  storageBucket: "food-app-345906.appspot.com",
  messagingSenderId: "106530942218",
  appId: "1:106530942218:web:1aef590f3a16ab6c109ef3",
};

// Initialize Firebase
const app = () => initializeApp(firebaseConfig);
export default app;
