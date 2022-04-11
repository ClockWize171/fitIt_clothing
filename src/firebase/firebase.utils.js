import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyBjWWWyK7Z02pYs_KotxnKDdBT7ltAm3BI",
    authDomain: "fitit-clothing.firebaseapp.com",
    projectId: "fitit-clothing",
    storageBucket: "fitit-clothing.appspot.com",
    messagingSenderId: "520730023257",
    appId: "1:520730023257:web:cc67cfc16b7d0b609b2848",
    measurementId: "G-3QFMLK1QZN"
};

export const app = initializeApp(config);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
}
