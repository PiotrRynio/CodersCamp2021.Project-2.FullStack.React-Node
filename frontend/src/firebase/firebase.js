import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'board-map-images.firebaseapp.com',
  projectId: 'board-map-images',
  storageBucket: 'board-map-images.appspot.com',
  messagingSenderId: '1072300503503',
  appId: process.env.FIREBASE_API_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
