// Firebase başlatma
const firebaseConfig = {
  apiKey: "AIzaSyAQ5qIk688vJLu2ONsiLYijauMNN-ejHF8",
  authDomain: "akilli-ev-a84dc.firebaseapp.com",
  databaseURL: "https://akilli-ev-a84dc-default-rtdb.firebaseio.com",
  projectId: "akilli-ev-a84dc",
  storageBucket: "akilli-ev-a84dc.firebasestorage.app",
  messagingSenderId: "981338101366",
  appId: "1:981338101366:web:c8763a7c91c5c37309b157"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

