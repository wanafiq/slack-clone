import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9wjbDedS8kOe_JxiJ0JmjkP8kw6pLQpU",
  authDomain: "slack-clone-de511.firebaseapp.com",
  projectId: "slack-clone-de511",
  storageBucket: "slack-clone-de511.appspot.com",
  messagingSenderId: "12483069667",
  appId: "1:12483069667:web:3cdb7444ca1cb03387a7d6",
  measurementId: "G-PRQMT6VMY4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
