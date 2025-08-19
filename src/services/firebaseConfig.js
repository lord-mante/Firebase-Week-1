// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBffxbnVKdfRh-9ZLfWTNhvD20NxrXTtLU",
  authDomain: "gen-30-cc5a1.firebaseapp.com",
  projectId: "gen-30-cc5a1",
  storageBucket: "gen-30-cc5a1.firebasestorage.app",
  messagingSenderId: "38966215634",
  appId: "1:38966215634:web:b53b34246916474a2b7e0b",
  measurementId: "G-NJ2DPQLM96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore (Cloud Firestore)
const db = getFirestore(app);
export { db };