import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDhEwmJ28S6MMZdBpWHWxNDcZR0MU3W3jA",
    authDomain: "the-port-treasury.firebaseapp.com",
    databaseURL: "https://the-port-treasury-default-rtdb.firebaseio.com",
    projectId: "the-port-treasury",
    storageBucket: "the-port-treasury.appspot.com",
    messagingSenderId: "219333063617",
    appId: "1:219333063617:web:c1abe735b76bdc4a47f540",
    measurementId: "G-1QCPXD6KP6"
});

const auth = getAuth(firebaseApp);
const store = getFirestore(firebaseApp);

export { firebaseApp, auth, store }
