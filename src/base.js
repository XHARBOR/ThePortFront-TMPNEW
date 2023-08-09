import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBkT9s1gtFL6_24GUHzuv_Xap05e6jaceA",
    authDomain: "the-port-treasury.firebaseapp.com",
    databaseURL: "https://the-port-treasury-default-rtdb.firebaseio.com",
    projectId: "the-port-treasury",
    storageBucket: "the-port-treasury.appspot.com",
    messagingSenderId: "219333063617",
    appId: "1:219333063617:web:e2d386469870cc0647f540",
    measurementId: "G-9VW8WMS6DF"
  };

export const appDB = initializeApp(firebaseConfig);

