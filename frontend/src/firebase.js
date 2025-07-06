import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// ✅ Standard Firebase config using proper Vite environment variable names
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_authDomain,
  projectId: import.meta.env.VITE_FIREBASE_projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_appId,
  measurementId: import.meta.env.VITE_FIREBASE_measurementId// optional
};
// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
// ✅ Export Firebase Authentication
export const auth = getAuth(app);

// ✅ Export Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
