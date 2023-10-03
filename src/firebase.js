// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyvFCy3DPRl1eeIc_S_HornDp_xcKRZLc",
  authDomain: "newchatapp-58761.firebaseapp.com",
  projectId: "newchatapp-58761",
  storageBucket: "newchatapp-58761.appspot.com",
  messagingSenderId: "654010378998",
  appId: "1:654010378998:web:9af3fd54229fba80571ad7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);
