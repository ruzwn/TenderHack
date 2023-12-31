import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'

import ToastService from 'primevue/toastservice'
import { Signalr } from "@/signalr";
import { createApp } from 'vue'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from "./router";
import PrimeVue from 'primevue/config';
import 'bootstrap/dist/js/bootstrap.js'
import 'primevue/resources/themes/lara-light-teal/theme.css'

export const app = createApp(App)
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.use(VueAxios, axios)
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
app.mount('#app');

Signalr.getInstance();