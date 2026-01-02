<template>
  <section class="sg-section sg-section--surface showcase-section">
    <div class="showcase-container">

      <!-- Header -->
      <div class="sg-section-header">
        <div class="sg-section-eyebrow">Nuestro trabajo</div>
        <h2 class="sg-section-title">Presencia en terreno</h2>
        <p class="sg-section-subtitle">
          Ciencia y ejecución técnica aplicadas al servicio de su producción.
        </p>
      </div>

      <!-- Slider -->
      <Swiper
          :modules="[Navigation, Pagination]"
          :slides-per-view="1"
          :space-between="24"
          navigation
          pagination
          class="showcase-swiper"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div class="showcase-slide">

            <!-- Imagen -->
            <img
                v-if="slide.type === 'image'"
                :src="slide.src"
                alt="Showcase imagen"
            />

            <!-- Video -->
            <video
                v-else
                :src="slide.src"
                autoplay
                muted
                loop
                playsinline
                preload="auto"
            ></video>

          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '@img/showcase-1.jpeg';
import img2 from '@img/showcase-2.jpeg';
import img3 from '@img/showcase-3.jpeg';
import video1 from '@img/showcase-4.mp4';

const slides = [
  { type: 'video', src: video1 },
  { type: 'image', src: img1 },
  { type: 'image', src: img2 },
  { type: 'image', src: img3 },
];
</script>


<style scoped>
/* Swiper base */
.showcase-swiper {
  margin-top: var(--sg-spacing-lg);
}

/* Slide */
.showcase-slide {
  border-radius: var(--sg-radius-md);
  overflow: hidden;
  box-shadow: var(--sg-shadow-soft);
}

/* Imagen */
.showcase-slide img,
.showcase-slide video {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
  border-radius: var(--sg-radius-md);
  pointer-events: none;
}

.showcase-container {
  max-width: 1400px; /* más ancho que sg-container */
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Ajustes Swiper */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #ffffff;
}

:deep(.swiper-pagination-bullet) {
  background-color: rgba(255, 255, 255, 0.6);
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #ffffff;
}

/* Responsive */
@media (max-width: 768px) {
  .showcase-slide img,
  .showcase-slide video {
    height: 260px;
  }
}
</style>
