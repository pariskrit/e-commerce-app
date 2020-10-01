import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDTpOEQVLZFezpUNDMPmh0FckcQmDQp_rQ",
  authDomain: "ecommerce-app-f6a42.firebaseapp.com",
  databaseURL: "https://ecommerce-app-f6a42.firebaseio.com",
  projectId: "ecommerce-app-f6a42",
  storageBucket: "ecommerce-app-f6a42.appspot.com",
  messagingSenderId: "455019623318",
  appId: "1:455019623318:web:2d90e3539b53ed939663b7",
  measurementId: "G-BJGR6HPE48",
});

const db = firebaseConfig.firestore();

export default db;
