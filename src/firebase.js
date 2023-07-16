import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDD2I4okXPxtSCUvmcxLM-pYwEydh1DPi8",
  authDomain: "chat-28642.firebaseapp.com",
  projectId: "chat-28642",
  storageBucket: "chat-28642.appspot.com",
  messagingSenderId: "485220649997",
  appId: "1:485220649997:web:1770d55915479fcf979944"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();