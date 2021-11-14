import {createApp} from 'vue'
import App from './App.vue'
import { VuesticPlugin } from 'vuestic-ui' // <-
import 'vuestic-ui/dist/vuestic-ui.css' // <-
import '@/assets/global.css'
import {hehe} from "@/assets/colorConfig";
import router from "@/components/router/router";

createApp(App).use(router).use(VuesticPlugin, hehe).mount('#app')
