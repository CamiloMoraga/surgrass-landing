import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/css/global.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

AOS.init()

const app = createApp(App)
app.use(router)
app.mount('#app')
