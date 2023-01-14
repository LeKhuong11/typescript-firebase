import { initializeApp } from "firebase/app";
import {
    getFirestore
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBlP7U_r_sfTNqA3wAY0PCkXs0v07J-4dg",
  authDomain: "firestore-typescript.firebaseapp.com",
  projectId: "firestore-typescript",
  storageBucket: "firestore-typescript.appspot.com",
  messagingSenderId: "990067965539",
  appId: "1:990067965539:web:16311e42f639cbd9f28256",
  measurementId: "G-WJ914MCKEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
