// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1FjocgyRYfnd5D7xJqmN8OtbLit7jUKc",
    authDomain: "react-firebase-login-7d848.firebaseapp.com",
    projectId: "react-firebase-login-7d848",
    storageBucket: "react-firebase-login-7d848.appspot.com",
    messagingSenderId: "712313484302",
    appId: "1:712313484302:web:a73c38b9d3b91780d0f85f",
    measurementId: "G-J5GV36TRSP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
