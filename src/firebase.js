import * as firebase from "firebase";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBiseQr7s6AJ8mG8AonufwzkZt5Hvrcgi0",
  authDomain: "graph-fullstack.firebaseapp.com",
  projectId: "graph-fullstack",
  storageBucket: "graph-fullstack.appspot.com",
  messagingSenderId: "1026662316541",
  appId: "1:1026662316541:web:a464dc22b5cf9251240194",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
