// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChBgxgXvMreKl2MdtnX45VW7m_bsF7B7s",
  authDomain: "movie-app-6972d.firebaseapp.com",
  projectId: "movie-app-6972d",
  storageBucket: "movie-app-6972d.appspot.com",
  messagingSenderId: "1003576962205",
  appId: "1:1003576962205:web:8139857ba92c3930917874",
  measurementId: "G-1LNSX3N0ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default app;