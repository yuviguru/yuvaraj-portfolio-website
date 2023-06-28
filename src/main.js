import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue3-flicking/dist/flicking-inline.css";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

app.use(router)
app.component("FlickingComponent", Flicking);

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
