// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv6rd8EYSsRHPgMLZNY_9ZbZ1us33FTLA",
  authDomain: "dragon-news-dd278.firebaseapp.com",
  projectId: "dragon-news-dd278",
  storageBucket: "dragon-news-dd278.firebasestorage.app",
  messagingSenderId: "529806996677",
  appId: "1:529806996677:web:83bc8ef1b18e0629386cac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);