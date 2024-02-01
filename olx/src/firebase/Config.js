import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import { Firestore, getFirestore } from 'firebase/firestore';
// import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATxYFrxxinc-NcB7AUbt3Pyaymc2nlWHA",
    authDomain: "olx-react-7ea61.firebaseapp.com",
    projectId: "olx-react-7ea61",
    storageBucket: "olx-react-7ea61.appspot.com",
    messagingSenderId: "66453672561",
    appId: "1:66453672561:web:20a90b8356b6ed8bdc81d0",
    measurementId: "G-VT9EC44X9E"
  };
const firebaseapp= initializeApp(firebaseConfig);
export const auth=getAuth(firebaseapp)
export const db=getFirestore(firebaseapp)
export const storage=getStorage(firebaseapp)
export default firebaseapp;
