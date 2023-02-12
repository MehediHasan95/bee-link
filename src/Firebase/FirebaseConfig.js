import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4yOROGWRpkFFj3WI_KUirbxGZBh1zZfM",
  authDomain: "bee-link-6f6ab.firebaseapp.com",
  projectId: "bee-link-6f6ab",
  storageBucket: "bee-link-6f6ab.appspot.com",
  messagingSenderId: "149141717633",
  appId: "1:149141717633:web:fc3129d6533d0edcafc380",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
