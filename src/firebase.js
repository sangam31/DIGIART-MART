import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs_77z1NpB8N4GGgrZiRp4W3avjcg7FaY",
  authDomain: "digi-art-mart.firebaseapp.com",
  projectId: "digi-art-mart",
  storageBucket: "digi-art-mart.appspot.com",
  messagingSenderId: "790569441640",
  appId: "1:790569441640:web:dd5187f40c9773cc539edd",
  measurementId: "G-DR54N4JQYD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };