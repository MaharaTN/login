import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgPVtkfnMs3HCFnoeA1RHHHVG37W0ma8o",
  authDomain: "projetodevweb-cab17.firebaseapp.com",
  projectId: "projetodevweb-cab17",
  storageBucket: "projetodevweb-cab17.appspot.com",
  messagingSenderId: "260554196248",
  appId: "1:260554196248:web:5e6c0d5034cad0ec930a6d"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
