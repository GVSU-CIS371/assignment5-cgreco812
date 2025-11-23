import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBo7TIkA5BjzcmRIGTk3GIv1HNy1voLpMI",
  authDomain: "cis371-c75cd.firebaseapp.com",
  projectId: "cis371-c75cd",
  storageBucket: "cis371-c75cd.firebasestorage.app",
  messagingSenderId: "225200418115",
  appId: "1:225200418115:web:88031901f04562e0ff53f6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
