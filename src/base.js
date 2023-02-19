import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp("ADD AUTHENICATION OBJECT HERE");

const auth = getAuth(firebaseApp);
const store = getFirestore(firebaseApp);

export { firebaseApp, auth, store }
