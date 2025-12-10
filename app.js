// Firebase konfigürasyonunu buraya ekleyin:
var firebaseConfig = {
  apiKey: "API_KEY_HERE",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const appDiv = document.getElementById("app");
db.ref("sensorler").on("value", snap=>{
  appDiv.innerText = JSON.stringify(snap.val(), null, 2);
});
