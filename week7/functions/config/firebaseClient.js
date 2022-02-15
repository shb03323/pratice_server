// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8eOOvoekyR82LSSMG2ihoRf2OSNhWzDU",
  authDomain: "wesopt29-4395e.firebaseapp.com",
  projectId: "wesopt29-4395e",
  storageBucket: "wesopt29-4395e.appspot.com",
  messagingSenderId: "1044449087354",
  appId: "1:1044449087354:web:0fe3d09ec9dd2050c850c3",
  measurementId: "G-SPDQJWQ150"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };