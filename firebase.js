import { initializeApp } from "@firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "@firebase/auth";
import { getStorage } from "@firebase/storage";
import { initializeFirestore } from "@firebase/firestore";
import { getAnalytics } from "@firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDlCjv51e5xF3e1uasZ5sgKlaE1Gx6GzCY",
  authDomain: "chatapp-59536.firebaseapp.com",
  projectId: "chatapp-59536",
  storageBucket: "chatapp-59536.appspot.com",
  messagingSenderId: "425025898458",
  appId: "1:425025898458:web:ac87a8657f84ef2914e2e3",
  measurementId: "G-0V9922B48L"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
