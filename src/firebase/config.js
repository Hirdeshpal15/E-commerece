import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyDZPpqI81zhbABExwF9Z89Ax4biZ9phM-Q",
    authDomain: "eshop-c5263.firebaseapp.com",
    projectId: "eshop-c5263",
    storageBucket: "eshop-c5263.appspot.com",
    messagingSenderId: "56343821217",
    appId: "1:56343821217:web:548088b000bc110cb069e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;