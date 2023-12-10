// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCHyyqyLrvPB-3w7imIYQn4RKvzeP7XTMI',
  authDomain: 'felexunsplash.firebaseapp.com',
  projectId: 'felexunsplash',
  storageBucket: 'felexunsplash.appspot.com',
  messagingSenderId: '262043206857',
  appId: '1:262043206857:web:d6ad80bc36f7b8a548f918',
  measurementId: 'G-Z6333WLB4R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
