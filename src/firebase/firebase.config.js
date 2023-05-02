// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUVEiUnMY0bYBnWO_PMyHXkFnWGFWgFUc",
  authDomain: "food-recipe-client-5a145.firebaseapp.com",
  projectId: "food-recipe-client-5a145",
  storageBucket: "food-recipe-client-5a145.appspot.com",
  messagingSenderId: "800298351763",
  appId: "1:800298351763:web:e8ebfbbd0cda948af42166",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;