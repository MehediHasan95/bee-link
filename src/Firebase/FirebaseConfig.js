import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEAK8UKuFH7MTg3JOHk6q95VaxptVqMdw",
  authDomain: "webbeelink.firebaseapp.com",
  projectId: "webbeelink",
  storageBucket: "webbeelink.appspot.com",
  messagingSenderId: "38870179257",
  appId: "1:38870179257:web:903ce51dc2a3c7b9076a68",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
