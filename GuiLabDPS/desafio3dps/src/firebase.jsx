import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD-MboylaK3nOMMmfz2kLKf3ss1-YnMVjQ",
    authDomain: "desafio3-dps.firebaseapp.com",
    databaseURL: "https://desafio3-dps.firebaseio.com",
    projectId: "desafio3-dps",
    storageBucket: "desafio3-dps.appspot.com",
    messagingSenderId: "764829194233",
    appId: "1:764829194233:web:755bdd653e678383910f28"
  };

const fb =  firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();