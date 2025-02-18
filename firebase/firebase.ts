import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// console.log(process.env.API_KEY);
const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export function firestore() {
    return db;
}
