// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbbPLNByK99UfAK9dHXxvSGt96nTapjSk",
    authDomain: "coffee-store-49b69.firebaseapp.com",
    projectId: "coffee-store-49b69",
    storageBucket: "coffee-store-49b69.firebasestorage.app",
    messagingSenderId: "138188951520",
    appId: "1:138188951520:web:3e3739560ae2e7f9fc2585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)