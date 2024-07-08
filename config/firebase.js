const { initializeApp } = require('firebase-admin/app');
const {getMessaging } =require('firebase-admin/messaging');
const dotenv = require('dotenv');
dotenv.config();
let app;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  projectId: process.env.FIREBASE_projectId,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId,
  measurementId: process.env.FIREBASE_measurementId
};

// Initialize Firebase
module.exports.initializeFireBase =()=>{
   app= initializeApp(firebaseConfig);
    console.info("Initialized Firebase SDK");
};

module.exports.fireBaseApp=app;