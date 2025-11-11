import { createRouter, createWebHistory } from 'vue-router'

import HeroSection from '../components/HeroSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import GallerySection from '../components/GallerySection.vue'
import ContactForm from '../components/ContactForm.vue'

const routes = [
    { path: '/', component: HeroSection },
    { path: '/servicios', component: ServicesSection },
    { path: '/galeria', component: GallerySection },
    { path: '/contacto', component: ContactForm }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
