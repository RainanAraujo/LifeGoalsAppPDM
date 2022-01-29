import firabase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrTlWdvzOZQRVJsde8QvAY4R-1inSM62Y",
  authDomain: "lifegoalspdm.firebaseapp.com",
  projectId: "lifegoalspdm",
  storageBucket: "lifegoalspdm.appspot.com",
  messagingSenderId: "937477696944",
  appId: "1:937477696944:web:bdea5fd5cb04a8821eba75",
  measurementId: "G-QPCTTKR4BX",
};
firabase.initializeApp(firebaseConfig);

export const auth = firabase.auth();
export const db = firabase.firestore();
