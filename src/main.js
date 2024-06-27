import {
  createApp
} from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACfxDcx_yNKIbZv0FIsLhNLUTwyp0cuRM",
  authDomain: "travalizer-84ba7.firebaseapp.com",
  projectId: "travalizer-84ba7",
  storageBucket: "travalizer-84ba7.appspot.com",
  messagingSenderId: "1008552555666",
  appId: "1:1008552555666:web:4831ba0cbbab221227a24b"
};

initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')