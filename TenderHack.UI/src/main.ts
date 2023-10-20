import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import router from "./router";
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)
app.use(router);

app.use(Quasar, {
    plugins: {},
  })

  app.mount('#app');
