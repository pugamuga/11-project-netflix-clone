// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNf_o8uSDhL1PdQZrXcgHjZaRZJMJgQq8",
  authDomain: "netflix-clone-8a57d.firebaseapp.com",
  projectId: "netflix-clone-8a57d",
  storageBucket: "netflix-clone-8a57d.appspot.com",
  messagingSenderId: "39014679266",
  appId: "1:39014679266:web:e1d535630f99ee124d54bb"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export {auth, db}