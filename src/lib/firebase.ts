// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx5Drbeoti64CEGJjtI8F7VhBqHJNWlFU",
  authDomain: "harmaig-b9f2e.firebaseapp.com",
  projectId: "harmaig-b9f2e",
  storageBucket: "harmaig-b9f2e.appspot.com",
  messagingSenderId: "240113717221",
  appId: "1:240113717221:web:edee16f7ccc1e28d68e90c",
  measurementId: "G-3XBP1EHXCG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
