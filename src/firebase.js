import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeQUsBDQauoYWtV5w9Z1q8kKpaxPIK40M",
  authDomain: "prueba-tecnica-72a2a.firebaseapp.com",
  projectId: "prueba-tecnica-72a2a",
  storageBucket: "prueba-tecnica-72a2a.appspot.com",
  messagingSenderId: "566953942602",
  appId: "1:566953942602:web:aa25d7b36f23c98ee050b3",
  measurementId: "G-PM0FF39W4N",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
