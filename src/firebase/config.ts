
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAnalytics, type Analytics } from "firebase/analytics"; // Added for Analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOsUN52IGa-H6Ms4VCQlSMkQfSKauhOyU",
  authDomain: "vaibhawportfolio-efb8c.firebaseapp.com",
  projectId: "vaibhawportfolio-efb8c",
  storageBucket: "vaibhawportfolio-efb8c.firebasestorage.app",
  messagingSenderId: "39343531230",
  appId: "1:39343531230:web:b8423a0e3615aa14838e4f",
  measurementId: "G-T8QHNZLKS4"
};

// Initialize Firebase
let app: FirebaseApp;
let analytics: Analytics | undefined;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  // Initialize Analytics only in the browser environment
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
} else {
  app = getApps()[0];
  // If app is already initialized, you can still get the Analytics instance
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
}

const db: Firestore = getFirestore(app);

export { app, db, analytics };
