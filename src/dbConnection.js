import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyA8geoyMYMZco9QoNikMmHRZJemkulVNus",
    authDomain: "pdm-deckmaster.firebaseapp.com",
    projectId: "pdm-deckmaster",
    storageBucket: "pdm-deckmaster.appspot.com",
    messagingSenderId: "545199230446",
    appId: "1:545199230446:web:f337e4869caa5bd93b12ff"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

