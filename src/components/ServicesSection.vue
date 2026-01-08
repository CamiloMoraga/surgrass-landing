<template>
  <section id="servicios" class="sg-section sg-section--light">
    <div class="sg-container">
      <div class="sg-section-header">
        <div class="sg-section-eyebrow">Servicios</div>
        <h2 class="sg-section-title">Soluciones técnicas</h2>
        <p class="sg-section-subtitle">
          Servicios enfocados en información confiable para la toma de decisiones productivas.
        </p>
      </div>

      <div class="services-grid">
        <div class="service-card" :class="{ 'is-open': openIndex === 0 }" @click="toggle(0)">
          <h3 class="service-title">Gestión de análisis de suelo y forraje</h3>
          <div class="service-content">
            <p>Análisis químico y nutricional del suelo y forraje para optimizar el manejo de praderas y mejorar la eficiencia productiva.</p>
          </div>
        </div>

        <div class="service-card" :class="{ 'is-open': openIndex === 1 }" @click="toggle(1)">
          <h3 class="service-title">Monitoreo de praderas</h3>
          <div class="service-content">
            <p>Seguimiento y evaluación del estado de las praderas para apoyar decisiones de manejo, fertilización y carga animal.</p>
          </div>
        </div>

        <div class="service-card" :class="{ 'is-open': openIndex === 2 }" @click="toggle(2)">
          <h3 class="service-title">Lavado industrial</h3>
          <div class="service-content">
            <p>
              Servicio de lavado industrial orientado a instalaciones y equipamiento del sector agroindustrial, cumpliendo estándares de higiene y seguridad.
            </p>

            <button class="sg-btn sg-btn--outline btn-gallery" @click.stop="openLightbox(0)">
              <i class="fa-solid fa-images"></i> Ver galería de trabajos
            </button>
          </div>
        </div>

        <div class="service-card" :class="{ 'is-open': openIndex === 3 }" @click="toggle(3)">
          <h3 class="service-title">Meteorología INIA</h3>
          <div class="service-content">
            <p>Acceso a información meteorológica oficial para apoyar la planificación agrícola y la toma de decisiones en terreno.</p>
            <a href="https://agrometeorologia.cl/" class="sg-btn sg-btn--outline" target="_blank" rel="noopener noreferrer" @click.stop>
              Ir a plataforma meteorológica
            </a>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <transition name="fade">
        <div v-if="isLightboxOpen" class="sg-lightbox" @click="closeLightbox">
          <button class="lightbox-close" aria-label="Cerrar">&times;</button>

          <button v-if="lavadoImages.length > 1" class="lightbox-nav prev" @click.stop="prevImage">
            <i class="fa-solid fa-chevron-left"></i>
          </button>

          <div class="lightbox-content" @click.stop>
            <img :src="lavadoImages[activeIndex]" class="lightbox-img" />
            <div class="lightbox-counter">{{ activeIndex + 1 }} / {{ lavadoImages.length }}</div>
          </div>

          <button v-if="lavadoImages.length > 1" class="lightbox-nav next" @click.stop="nextImage">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue';

import imgLavado1 from '@img/lavado-1.jpeg';
import imgLavado2 from '@img/lavado-2.jpeg';
import imgLavado3 from '@img/lavado-3.jpeg';
import imgLavado4 from '@img/lavado-4.jpeg';
import imgLavado5 from '@img/lavado-5.jpeg';

const lavadoImages = [imgLavado1, imgLavado2, imgLavado3, imgLavado4, imgLavado5];
const openIndex = ref(null);
const isLightboxOpen = ref(false);
const activeIndex = ref(0);

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const openLightbox = (index) => {
  activeIndex.value = index;
  isLightboxOpen.value = true;
};

const nextImage = () => {
  activeIndex.value = (activeIndex.value + 1) % lavadoImages.length;
};

const prevImage = () => {
  activeIndex.value = (activeIndex.value - 1 + lavadoImages.length) % lavadoImages.length;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};
</script>

<style scoped>
/* Estilos base del grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sg-spacing-lg);
}

.service-card {
  background-color: var(--sg-color-surface);
  border-radius: var(--sg-radius-md);
  border: 1px solid var(--sg-color-border);
  padding: var(--sg-spacing-lg);
  cursor: pointer;
  transition: all 0.25s ease;
  min-height: 120px;
}

.service-card.is-open {
  border-color: var(--sg-color-primary);
}

.service-content {
  margin-top: var(--sg-spacing-md);
  display: none;
  flex-direction: column;
  gap: var(--sg-spacing-md);
  color: var(--sg-color-text-muted);
}

.service-card.is-open .service-content {
  display: flex;
}

/* Estilo del botón de galería */
.btn-gallery {
  align-self: flex-start;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: var(--sg-text-sm);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Lightbox mejorado */
.sg-lightbox {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
}

.lightbox-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--sg-radius-sm);
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

.lightbox-counter {
  margin-top: 1rem;
  color: white;
  font-size: var(--sg-text-sm);
  background: rgba(255,255,255,0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 99px;
}

.lightbox-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 10001;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.1);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}

.lightbox-nav:hover { background: var(--sg-color-primary); }
.lightbox-nav.prev { left: 2rem; }
.lightbox-nav.next { right: 2rem; }

/* Transiciones */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .services-grid { grid-template-columns: 1fr; }
  .lightbox-nav { width: 40px; height: 40px; }
  .lightbox-nav.prev { left: 1rem; }
  .lightbox-nav.next { right: 1rem; }
}
</style>