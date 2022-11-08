// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy8RBQJaLulqm-ycnGCEXxFwllOOGW5II",
  authDomain: "chat-app-fontend.firebaseapp.com",
  projectId: "chat-app-fontend",
  storageBucket: "chat-app-fontend.appspot.com",
  messagingSenderId: "933174283875",
  appId: "1:933174283875:web:665bbd4d320aded4aff256",
  measurementId: "G-2Y71PE1CVT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

const db = getFirestore(app);

export { analytics, provider, auth, db };
