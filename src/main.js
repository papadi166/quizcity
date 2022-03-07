import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import "bootstrap/dist/js/bootstrap.js"
import store from '../store/store.js'
import './fontawesome.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



const app = createApp(App)
app.use(router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
