<template>
  <section id="servicios" class="sg-section sg-section--light">
    <div class="sg-container">

      <!-- Header -->
      <div class="sg-section-header">
        <div class="sg-section-eyebrow">Servicios</div>
        <h2 class="sg-section-title">Soluciones técnicas</h2>
        <p class="sg-section-subtitle">
          Servicios enfocados en información confiable para la toma de decisiones productivas.
        </p>
      </div>

      <!-- Cards -->
      <div class="services-grid">

        <!-- Servicio 1 -->
        <div
            class="service-card"
            :class="{ 'is-open': openIndex === 0 }"
            @click="toggle(0)"
        >
          <h3 class="service-title">Gestión de análisis de suelo y forraje</h3>

          <div class="service-content">
            <p>
              Análisis químico y nutricional del suelo y forraje para optimizar el manejo de
              praderas y mejorar la eficiencia productiva.
            </p>
          </div>
        </div>

        <!-- Servicio 2 -->
        <div
            class="service-card"
            :class="{ 'is-open': openIndex === 1 }"
            @click="toggle(1)"
        >
          <h3 class="service-title">Monitoreo de praderas</h3>

          <div class="service-content">
            <p>
              Seguimiento y evaluación del estado de las praderas para apoyar decisiones de
              manejo, fertilización y carga animal.
            </p>
          </div>
        </div>

        <!-- Servicio 3 -->
        <div
            class="service-card"
            :class="{ 'is-open': openIndex === 2 }"
            @click="toggle(2)"
        >
          <h3 class="service-title">Lavado industrial</h3>

          <div class="service-content">
            <p>
              Servicio de lavado industrial orientado a instalaciones y equipamiento del
              sector agroindustrial, cumpliendo estándares de higiene y seguridad.
            </p>
          </div>
        </div>

        <!-- Servicio 4 -->
        <div
            class="service-card"
            :class="{ 'is-open': openIndex === 3 }"
            @click="toggle(3)"
        >
          <h3 class="service-title">Meteorología INIA</h3>

          <div class="service-content">
            <p>
              Acceso a información meteorológica oficial para apoyar la planificación agrícola
              y la toma de decisiones en terreno.
            </p>

            <a
                href="https://agrometeorologia.cl/"
                class="sg-btn sg-btn--outline"
                target="_blank"
                rel="noopener noreferrer"
                @click.stop
            >
              Ir a plataforma meteorológica
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const openIndex = ref(null);

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<style scoped>
/* Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sg-spacing-lg);
}

/* Card base */
.service-card {
  background-color: var(--sg-color-surface);
  border-radius: var(--sg-radius-md);
  border: 1px solid var(--sg-color-border);
  padding: var(--sg-spacing-lg);
  cursor: pointer;
  transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
}

.service-card:hover {
  box-shadow: var(--sg-shadow-soft);
  transform: translateY(-2px);
}

/* Título */
.service-title {
  font-family: var(--sg-font-heading);
  font-size: var(--sg-text-xl);
  font-weight: 600;
  color: var(--sg-color-primary-dark);
}

/* Contenido colapsable */
.service-content {
  margin-top: var(--sg-spacing-md);
  display: none;
  flex-direction: column;
  gap: var(--sg-spacing-md);
  color: var(--sg-color-text-muted);
}

/* Estado abierto */
.service-card.is-open {
  border-color: var(--sg-color-primary);
}

.service-card.is-open .service-content {
  display: flex;
}

/* Responsive */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
