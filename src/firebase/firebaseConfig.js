
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOrutx663FFqyGWUi1RLSK3LhR0oSlsos",
    authDomain: "database-react-49de0.firebaseapp.com",
    projectId: "database-react-49de0",
    storageBucket: "database-react-49de0.appspot.com",
    messagingSenderId: "957289512713",
    appId: "1:957289512713:web:5d3c9cc59639c1a6545dd8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)