import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/common.css'
import '@/assets/js/flexible.min'
import Axios from 'axios'

const app=createApp(App)
app.config.globalProperties.Axios=Axios
app.use(store).use(router).mount('#app')
