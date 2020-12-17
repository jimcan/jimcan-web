import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2XF1x1jAZ2fQhYxMATZi9ILCB7XSCE5Q",
  authDomain: "jimcan-d6f3b.firebaseapp.com",
  projectId: "jimcan-d6f3b",
  storageBucket: "jimcan-d6f3b.appspot.com",
  messagingSenderId: "931114591790",
  appId: "1:931114591790:web:e9f1b88869e186f7f261bf",
  measurementId: "G-DWG32WFJ63"
};


firebase.initializeApp(firebaseConfig);

export default firebase