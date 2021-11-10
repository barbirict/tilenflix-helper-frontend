import {createApp} from 'vue'
import App from './App.vue'
import { VuesticPlugin } from 'vuestic-ui' // <-
import 'vuestic-ui/dist/vuestic-ui.css' // <-
import '@/assets/global.css'
import {hehe} from "@/assets/colorConfig";
createApp(App).use(VuesticPlugin, hehe).mount('#app')
