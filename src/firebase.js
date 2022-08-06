import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCKqheF-A-7QnrCib-d_yM4xcL93AyNYtI",
    authDomain: "react-chat-66e0f.firebaseapp.com",
    projectId: "react-chat-66e0f",
    storageBucket: "react-chat-66e0f.appspot.com",
    messagingSenderId: "184749493099",
    appId: "1:184749493099:web:4b8b30338ab87dad97da2e"
  });

  const db = firebase.firestore();

  const auth = firebase.auth();

  export { db, auth };
