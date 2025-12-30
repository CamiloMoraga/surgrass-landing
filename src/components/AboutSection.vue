<template>
  <section id="nosotros" class="sg-section sg-section--surface">
    <div class="sg-container about-wrapper">

      <!-- Columna de texto -->
      <div class="about-text">
        <div class="sg-section-eyebrow">Quiénes somos</div>

        <h2 class="sg-section-title">
          Sobre Solution+
        </h2>

        <p class="about-desc">
          Solution+ es una empresa orientada al control y optimización de sistemas
          productivos, integrando servicios de control pradera, lavado industrial
          y una plataforma digital para la gestión de análisis de suelo y forraje.
        </p>

        <p class="about-desc">
          Nuestro sistema SaaS permite registrar y centralizar los resultados de
          análisis químicos y de forraje, asociarlos a predios y potreros, y generar
          mapas de colorimetría, facilitando la toma de
          decisiones mediante visualizaciones claras, tablas con leyendas y reportes
          en formato PDF.
        </p>

        <p class="about-desc">
          Toda la información queda respaldada digitalmente, permitiendo el seguimiento
          histórico y la descarga de informes técnicos tanto de mapas como de tablas
          con colorimetría.
        </p>
      </div>

      <!-- Columna de imágenes -->
      <div class="about-images">
        <div class="about-img" :style="imgTopStyle"></div>
        <div class ="about-img" :style="imgMiddleStyle"></div>
        <div class="about-img" :style="imgBottomStyle"></div>
      </div>

    </div>
  </section>
</template>

<script setup>
/* Importar imágenes reales */
import imgAforo from '@/assets/img/aforo-pradera.jpeg';
import imgVaca from '@/assets/img/cow-volcano.jpeg';
import imgCultivo from '@/assets/img/cultivo-medicion.jpeg';

/* Igual que HeroSection.vue, creamos estilos dinámicos */
const imgTopStyle = {
  backgroundImage: `url(${imgAforo})`,
};
const imgMiddleStyle = {
  backgroundImage: `url(${imgCultivo}`,
}
const imgBottomStyle = {
  backgroundImage: `url(${imgVaca})`,
};
</script>

<style scoped>
.about-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sg-spacing-xl);
  align-items: center;
}

.about-desc {
  font-size: var(--sg-text-base);
  color: var(--sg-color-text-muted);
  margin-bottom: 1.25rem;
  line-height: 1.65;
  text-align: justify;
  hyphens: auto;
  text-justify: inter-word;
}

/* Imágenes */
.about-images {
  display: flex;
  flex-direction: column;
  gap: var(--sg-spacing-md);
}

.about-img {
  border-radius: var(--sg-radius-md);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 280px;
  box-shadow: var(--sg-shadow-soft);
  border: 1px solid var(--sg-color-border);
}

/* Responsive */
@media (max-width: 900px) {
  .about-wrapper {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .about-images {
    flex-direction: row;
    justify-content: center;
  }

  .about-img {
    width: 48%;
    height: 180px;
  }
}

@media (max-width: 600px) {
  .about-images {
    flex-direction: column;
  }

  .about-img {
    width: 100%;
    height: 180px;
  }
}
</style>
