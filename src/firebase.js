import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtZF6T4H6s6ulp6ycmBXc0nruiOBFX-5E",
  authDomain: "as2-pucpr.firebaseapp.com",
  projectId: "as2-pucpr",
  storageBucket: "as2-pucpr.appspot.com",
  messagingSenderId: "578571284410",
  appId: "1:578571284410:web:dc361ed03bca794895b783",
  measurementId: "G-CFFVHXP222"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
