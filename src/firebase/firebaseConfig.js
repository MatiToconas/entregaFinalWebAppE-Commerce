
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCy-Z7fSb2sPLf-5UW4_iktXxLXvpbHGlk",
  authDomain: "web-app-de-e-commerce.firebaseapp.com",
  projectId: "web-app-de-e-commerce",
  storageBucket: "web-app-de-e-commerce.firebasestorage.app",
  messagingSenderId: "132605353090",
  appId: "1:132605353090:web:22862b28417f74339e289b",
  measurementId: "G-M0GQKFPZHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
