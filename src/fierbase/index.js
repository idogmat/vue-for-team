// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUAF6NxOE91A1U6ByhStdFDmmpHNltk7Y",
    authDomain: "authforvue-d0215.firebaseapp.com",
    projectId: "authforvue-d0215",
    storageBucket: "authforvue-d0215.appspot.com",
    messagingSenderId: "504423202647",
    appId: "1:504423202647:web:ce5834b6788d3aafccc812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};
