import * as firebase from "firebase";
import { toast } from "./toast";

// const config = {
//   apiKey: "AIzaSyC1Cb-n3naicpTmH3-T-OEgEOIm1R8oGZk",
//   authDomain: "ionic-react-bc89c.firebaseapp.com",
//   databaseURL: "https://ionic-react-bc89c.firebaseio.com",
//   projectId: "ionic-react-bc89c",
//   storageBucket: "ionic-react-bc89c.appspot.com",
//   messagingSenderId: "301785091243",
//   appId: "1:301785091243:web:ad1d91a6840ed981453bee",
//   measurementId: "G-6HLCPRVVTZ",
// };

const config = {
  apiKey: "AIzaSyDzRkyszp3a5MsL2-9dIgfIY9rPW1jrrm8",
  authDomain: "chat-9dfc7.firebaseapp.com",
  databaseURL: "https://chat-9dfc7.firebaseio.com",
  projectId: "chat-9dfc7",
  storageBucket: "chat-9dfc7.appspot.com",
  messagingSenderId: "587836490291",
  appId: "1:587836490291:web:4e458c8860dbd8c919d946",
};

firebase.initializeApp(config);

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
      unsubscribe();
    });
  });
}

export async function loginUser(username: string, password: string) {
  const email = `${username}@gmail.com`.trim();

  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    console.log(res);
    return res;
  } catch (error) {
    toast(error.message, 4000);
    return false;
  }
  // authenticate with firebase
  // if present, show dashboard
  // if not, show error
}

export async function registerUser(username: string, password: string) {
  const email = `${username}@gmail.com`.trim();

  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return true;
  } catch (error) {
    toast(error.message, 4000);
    return false;
  }
}

export function logoutUser() {
  return firebase.auth().signOut();
}
