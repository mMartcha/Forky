import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Pegue essas configs no console do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBDIDpN7cxnhaAXxTlsDYX8m0KBIbnc0Rw",
  authDomain: "forky-63f10.firebaseapp.com",
  projectId: "forky-63f10",
  storageBucket: "forky-63f10.firebasestorage.app",
  messagingSenderId: "910205530191",
  appId: "1:910205530191:web:af17a162164d88bf6dfa3a"
};

const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const db = getFirestore(app);