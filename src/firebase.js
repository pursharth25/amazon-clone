import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJ2E8tw8_NOSVcSnJ_xqzxUY88LvlYpgs",
  authDomain: "clone-1fdcd.firebaseapp.com",
  projectId: "clone-1fdcd",
  storageBucket: "clone-1fdcd.appspot.com",
  messagingSenderId: "924070344224",
  appId: "1:924070344224:web:a9537a90fbd5279f94ae45"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

export { auth };