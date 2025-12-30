<template>
  <section id="top" class="sg-hero hero">
    <!-- Fondo imagen, ahora con :style -->
    <div class="hero-bg" :style="heroBgStyle" />

    <!-- Capa de degradado -->
    <div class="sg-hero-overlay"></div>

    <div class="sg-container">
      <div class="sg-hero-content">
        <div class="sg-hero-eyebrow">
          Tecnología aplicada a praderas del sur de Chile
        </div>

        <h1 class="sg-hero-title">
          Gestión y medición de praderas.
        </h1>

        <p class="sg-hero-subtitle">
          Soluciones integrales para el control pradera, lavado industrial y
          gestión digital de análisis de suelo y forraje.
        </p>

        <div class="hero-actions">
          <a href="#servicios" class="sg-btn sg-btn--primary">
            Ver soluciones para mi campo
          </a>

          <a
              href="https://app.solution+.cl"
              target="_blank"
              rel="noopener noreferrer"
              class="sg-btn sg-btn--primary"
          >
            Ir al sistema Surgrass
          </a>
        </div>

        <div class="hero-meta">
          <span>✓ Enfocados en el sur de Chile</span>
          <span>✓ Mapas y reportes técnicos claros</span>
          <span>✓ Acompañamiento cercano al productor</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroBg from '@/assets/img/hero-section.jpeg';

// Creamos un estilo reactivo para el fondo
const heroBgStyle = {
  backgroundImage: `url(${heroBg})`,
};
</script>

<style scoped>
.hero {
  position: relative;
}

/* Fondo con imagen (ya no usamos url() aquí) */
.hero-bg {
  position: absolute;
  inset: 0;
  margin-top: -72px;
  padding-bottom: 72px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  filter: saturate(1.05) contrast(1.02);
}

/* Highlight de una parte del título */
.hero-title-highlight {
  color: var(--sg-color-primary-soft);
}

/* Botones del hero */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* Meta info (bullets pequeños) */
.hero-meta {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: var(--sg-text-sm);
  color: #e5e7eb;
}

.hero-meta span {
  padding: 0.35rem 0.75rem;
  border-radius: var(--sg-radius-pill);
  background-color: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(148, 163, 184, 0.4);
}

/* Responsivo */
@media (max-width: 768px) {
  .hero-meta {
    flex-direction: column;
  }
}
</style>
