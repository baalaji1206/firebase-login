// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe0fpWvpBz9dlE2939Cn45K21cUyVjvr4",
  authDomain: "loginfire-a68c4.firebaseapp.com",
  projectId: "loginfire-a68c4",
  storageBucket: "loginfire-a68c4.appspot.com",
  messagingSenderId: "316822847412",
  appId: "1:316822847412:web:d6260c805d06d15430bce1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}