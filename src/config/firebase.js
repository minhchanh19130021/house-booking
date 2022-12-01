// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBNTo1DJPjdSwiDsC7L7YZFEpIcZEGeH0c',
    authDomain: 'tmdt-540c8.firebaseapp.com',
    projectId: 'tmdt-540c8',
    storageBucket: 'tmdt-540c8.appspot.com',
    messagingSenderId: '651141823602',
    appId: '1:651141823602:web:04e389664679ed119e96eb',
    measurementId: 'G-5CG4FE1210',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
