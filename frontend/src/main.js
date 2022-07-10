import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import "bootstrap/dist/js/bootstrap.js"
import store from '../store/store.js'
import './fontawesome.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';





const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueSweetalert2);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
