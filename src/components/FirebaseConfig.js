import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuux9B2vtx_7jHGhXEOLLi0_wYtuxUq24",
  authDomain: "gallery-dnd-e9afd.firebaseapp.com",
  projectId: "gallery-dnd-e9afd",
  storageBucket: "gallery-dnd-e9afd.appspot.com",
  messagingSenderId: "787055094134",
  appId: "1:787055094134:web:fa5a550d8372459b5a3257",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
