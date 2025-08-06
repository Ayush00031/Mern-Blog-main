import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-99788.firebaseapp.com",
  projectId: "mern-blog-99788",
  storageBucket: "mern-blog-99788.appspot.com",
  messagingSenderId: "809612621522",
  appId: "1:809612621522:web:c2e59f7b9765cd70881f0b",
  measurementId: "G-QBPQ1CJNQ6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
