import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAVBSKTLUDdGaucfD1FAnw0-TKQzn0UxX8",
    authDomain: "crudreact-gui10-dps.firebaseapp.com",
    databaseURL: "https://crudreact-gui10-dps.firebaseio.com",
    projectId: "crudreact-gui10-dps",
    storageBucket: "crudreact-gui10-dps.appspot.com",
    messagingSenderId: "965386751813",
    appId: "1:965386751813:web:6e30b1398bc96ce393382c"
};

const fb =  firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();