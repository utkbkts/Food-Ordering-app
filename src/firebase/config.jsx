import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_API_KEY,
  authDomain: "linkedln-47545.firebaseapp.com",
  projectId: "linkedln-47545",
  storageBucket: "linkedln-47545.appspot.com",
  messagingSenderId: "421000623781",
  appId: "1:421000623781:web:cd7f1144bc74c762953f4c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
