// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfJvyFJDAkMMDT-SW1qvgSTLPySizK8FM",
  authDomain: "job-finder-6983f.firebaseapp.com",
  projectId: "job-finder-6983f",
  storageBucket: "job-finder-6983f.appspot.com",
  messagingSenderId: "767980012635",
  appId: "1:767980012635:web:c40f4e0d74dcdc24ee2b7e",
  measurementId: "G-VNVFMFVJ3F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
