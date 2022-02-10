import {createApp} from 'vue'
import App from './App.vue'
import { VuesticPlugin } from 'vuestic-ui' // <-
import 'vuestic-ui/dist/vuestic-ui.css' // <-
import '@/assets/global.css'
import {hehe} from "@/assets/colorConfig";
import router from "@/components/router/router";
import store from "@/components/store/userStore";
import mitt from "mitt";
import VueCookies from "vue3-cookies";
import VueCarousel from 'vue3-carousel';
import VueCryptojs from "vue-cryptojs";
import dayjs from "dayjs";

/*import LogRocket from 'logrocket';

LogRocket.init('xxxvu2/tilenflix');
LogRocket.identify('0', {
    name: 'Tilen Barbirič',
    email: 'barbiric.tilen@gmail.com'})
*/
const emitter = mitt()

const app = createApp(App)

app.config.globalProperties.emitter = emitter;



app.use(router).use(VuesticPlugin, hehe).use(VueCarousel).use(store).use(VueCookies, {expireTimes: "30d", secure: true}).use(VueCryptojs).use(dayjs).mount('#app')


