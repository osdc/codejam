import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBK7PBplaitcMXM6sNOsbwsPAxMdjfqE8Y ",
  authDomain: "study-date-eda7b.firebaseapp.com",
  projectId: "study-date-eda7b",
  storageBucket: "study-date-eda7b.appspot.com",
  messagingSenderId: "440320997445",
  appId: "1:440320997445:web:5ff84a7c7a445b9fe94b2c",
});

export const auth = app.auth();
export const db = app.firestore();
export default app;
