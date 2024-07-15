// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-2372c.firebaseapp.com",
  projectId: "mern-auth-2372c",
  storageBucket: "mern-auth-2372c.appspot.com",
  messagingSenderId: "42643292132",
  appId: "1:42643292132:web:9c5dd1883f16cb9ff011f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);