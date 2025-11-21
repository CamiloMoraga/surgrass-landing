<template>
  <section id="galeria" class="sg-section">

    <div class="sg-container">

      <!-- 🔹 Título general -->
      <div class="sg-section-eyebrow">Galería</div>
      <h2 class="sg-section-title">Nuestro trabajo en terreno</h2>

      <!-- ========================== -->
      <!-- 📷 GALERÍA DE IMÁGENES     -->
      <!-- ========================== -->
      <div class="gallery-block">
        <h3 class="gallery-subtitle">Imágenes</h3>

        <Swiper
            :modules="[Navigation, Pagination, Autoplay]"
            :slides-per-view="1"
            :space-between="20"
            :loop="true"
            :autoplay="{ delay: 2500, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            :navigation="true"
            class="gallery-swiper"
        >
          <SwiperSlide v-for="(img, index) in imageSlides" :key="'img-' + index">
            <img :src="img" class="gallery-img" alt="Imagen Surgrass" />
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- ========================== -->
      <!-- 🎥 GALERÍA DE VIDEOS       -->
      <!-- ========================== -->
      <div class="gallery-block">
        <h3 class="gallery-subtitle">Videos</h3>

        <Swiper
            :modules="[Navigation, Pagination, Autoplay]"
            :slides-per-view="1"
            :space-between="20"
            :loop="true"
            :autoplay="{ delay: 8000, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            :navigation="true"
            class="gallery-swiper"
        >
          <SwiperSlide v-for="(video, index) in videoSlides" :key="'vid-' + index">
            <video
                :src="video"
                autoplay
                muted
                loop
                playsinline
                class="gallery-video"
            ></video>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

/* ======================= */
/* IMÁGENES                 */
/* ======================= */
import imgAforo from '@/assets/img/aforo-pradera.jpeg'
import imgVaca from '@/assets/img/cow-volcano.jpeg'

const imageSlides = [
  imgAforo,
  imgVaca,
]

/* ======================= */
/* VIDEOS                   */
/* ======================= */
import videoDrone from '@/assets/videos/video-drone-pradera.mp4'
import videoAforo from '@/assets/videos/video-aforo-pradera.mp4'
import videoCultivo from '@/assets/videos/video-cultivo-medicion.mp4'

const videoSlides = [
  videoDrone,
  videoAforo,
  videoCultivo,
]
</script>

<style scoped>
.gallery-block {
  margin-top: var(--sg-spacing-xl);
}

.gallery-subtitle {
  font-size: var(--sg-text-lg);
  font-weight: 600;
  margin-bottom: var(--sg-spacing-md);
  color: var(--sg-color-primary-dark);
}

.gallery-swiper {
  border-radius: var(--sg-radius-md);
  overflow: hidden;
  box-shadow: var(--sg-shadow-soft);
}

.gallery-img,
.gallery-video {
  width: 100%;
  height: 520px;
  object-fit: cover;
}

@media (max-width: 800px) {
  .gallery-img,
  .gallery-video {
    height: 300px;
  }
}
</style>
