import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQAXr871tE9c4fd98UxOp1Pf9g2MnwKDM",
  authDomain: "portfolio-725ee.firebaseapp.com",
  projectId: "portfolio-725ee",
  storageBucket: "portfolio-725ee.appspot.com",
  messagingSenderId: "333121356058",
  appId: "1:333121356058:web:d385eb1f99dc9bc35ceca3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
