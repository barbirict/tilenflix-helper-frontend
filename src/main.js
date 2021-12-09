import {createApp} from 'vue'
import App from './App.vue'
import { VuesticPlugin } from 'vuestic-ui' // <-
import 'vuestic-ui/dist/vuestic-ui.css' // <-
import '@/assets/global.css'
import {hehe} from "@/assets/colorConfig";
import router from "@/components/router/router";
import firebase from "firebase/compat";
import userStore from "@/components/store/userStore";

const firebaseConfig = {
    apiKey: "AIzaSyDGpYoLtdDgffo3eyLmcwUeHWZ99lBHbBA",
    authDomain: "tilenflix.firebaseapp.com",
    projectId: "tilenflix",
    storageBucket: "tilenflix.appspot.com",
    messagingSenderId: "405984839781",
    appId: "1:405984839781:web:cd8f866711f08d77a11e8c"
};
firebase.initializeApp(firebaseConfig)
createApp(App).use(router).use(VuesticPlugin, hehe).use(userStore).mount('#app')


