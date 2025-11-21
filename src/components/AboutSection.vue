<template>
  <section id="nosotros" class="sg-section sg-section--surface">
    <div class="sg-container about-wrapper">

      <!-- Columna de texto -->
      <div class="about-text">
        <div class="sg-section-eyebrow">Quiénes somos</div>

        <h2 class="sg-section-title">
          Surgrass: análisis, manejo y tecnología para el campo del sur
        </h2>

        <p class="about-desc">
          Somos un equipo dedicado al manejo de praderas, suelos y cultivos en el sur de Chile.
          Combinamos experiencia en terreno con análisis profesionales y herramientas modernas
          para ayudarte a mejorar la productividad y sustentabilidad de tu predio.
        </p>

        <p class="about-desc">
          Nuestro enfoque integra trabajo práctico, diagnósticos claros y un acompañamiento
          cercano al productor, entregando información útil para decisiones técnicas
          basadas en datos reales.
        </p>
      </div>

      <!-- Columna de imágenes -->
      <div class="about-images">
        <div class="about-img" :style="imgTopStyle"></div>
        <div class="about-img" :style="imgBottomStyle"></div>
      </div>

    </div>
  </section>
</template>

<script setup>
/* Importar imágenes reales */
import imgAforo from '@/assets/img/aforo-pradera.jpeg';
import imgVaca from '@/assets/img/cow-volcano.jpeg';

/* Igual que HeroSection.vue, creamos estilos dinámicos */
const imgTopStyle = {
  backgroundImage: `url(${imgAforo})`,
};

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
  height: 240px;
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
