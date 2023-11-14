import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyClhdB5ruFXCYEb0WPHb151Q0WHAXIBrAs",
  authDomain: "abels-c674c.firebaseapp.com",
  projectId: "abels-c674c",
  storageBucket: "abels-c674c.appspot.com",
  messagingSenderId: "457415198730",
  appId: "1:457415198730:web:65df3df131055d9160b7f3",
  measurementId: "G-NCW2G3WG89"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };