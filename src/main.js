import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/css/global.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

AOS.init()

const app = createApp(App)
app.use(router)
app.mount('#app')
