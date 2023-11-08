
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBASzdvP0CdEr1ZJxTx8YTRGZODfs5zOpI",
  authDomain: "react-netflix-clone-d975b.firebaseapp.com",
  projectId: "react-netflix-clone-d975b",
  storageBucket: "react-netflix-clone-d975b.appspot.com",
  messagingSenderId: "493628656474",
  appId: "1:493628656474:web:e42e4d961f8d1f0686c163",
  measurementId: "G-HQ0Y3R0GT2"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);