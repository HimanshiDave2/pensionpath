import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCPuaEKa5KsqZqJc-ZZ6bEWpFdyo1mzJro",
  authDomain: "pensionpath.firebaseapp.com",
  projectId: "pensionpath",
  storageBucket: "pensionpath.firebasestorage.app",
  messagingSenderId: "944803932971",
  appId: "1:944803932971:web:5e1a314bd43fd24afa336e",
  measurementId: "G-GJW5HTQC3G"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
