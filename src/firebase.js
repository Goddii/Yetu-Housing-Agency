// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1qMjiOZntlKQGJlOxHcGmZJ6PXuRmDWA",
  authDomain: "yetu-housing-agency.firebaseapp.com",
  projectId: "yetu-housing-agency",
  storageBucket: "yetu-housing-agency.firebasestorage.app",
  messagingSenderId: "464034806153",
  appId: "1:464034806153:web:a9f9c7b71d2571b2e8c958",
  measurementId: "G-65SFLG22L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)