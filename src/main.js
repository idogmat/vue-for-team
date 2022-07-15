import Vue from 'vue'
import App from './App.vue'
import router from "@/router/routes";
import store from "@/store/index"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
initializeApp(firebaseConfig);

new Vue({
    store,
    router,
    render:h=>h(App)
}).$mount('#app')

