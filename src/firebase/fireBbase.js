// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmk5_pn5k6kaycpcTieSOcY6Umam-iO-0",
  authDomain: "bakeryreact.firebaseapp.com",
  projectId: "bakeryreact",
  storageBucket: "bakeryreact.appspot.com",
  messagingSenderId: "1054455341351",
  appId: "1:1054455341351:web:a26f628d74dda89c8dc902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);