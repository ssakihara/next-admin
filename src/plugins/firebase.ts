import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_KEY,
    appId: process.env.FIREBASE_APPID,
    projectId: process.env.FIREBASE_PROJECT_ID,
    authDomain: process.env.FIREBASE_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  });
}

const auth = firebase.auth();
export { auth };
