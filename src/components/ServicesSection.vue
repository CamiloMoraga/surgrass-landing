<template>
  <section id="servicios" class="sg-section sg-section--surface">
    <div class="sg-container">
      <!-- Encabezado -->
      <div class="sg-section-header">
        <div class="sg-section-eyebrow">Servicios</div>
        <h2 class="sg-section-title">Soluciones para tu campo</h2>
        <p class="sg-section-subtitle">
          Combinamos análisis técnico, tecnología y experiencia en manejo de
          praderas del sur de Chile para mejorar la productividad y sustentabilidad.
        </p>
      </div>

      <!-- Grid de servicios -->
      <div class="services-grid">
        <div class="service-card" v-for="service in services" :key="service.title">
          <div class="service-icon" v-html="service.icon"></div>

          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.desc }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="services-cta">
        <a
            href="https://app.solution+.cl"
            target="_blank"
            rel="noopener noreferrer"
            class="sg-btn sg-btn--primary"
        >
          Ingresar al sistema Solution+
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Íconos SVG inline (estilo minimalista agrónomo)
const services = [
  {
    title: "Análisis de Suelo",
    desc:
        "Determinación química completa para conocer el estado nutricional de tus praderas.",
    icon: `
      <svg width="40" height="40" fill="none" stroke="#2d7a3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="20" cy="12" r="9"/>
        <path d="M4 34c0-6 7-10 16-10s16 4 16 10"/>
      </svg>
    `,
  },
  {
    title: "Análisis de Forraje",
    desc:
        "Evaluación de calidad nutricional del forraje para una alimentación óptima del ganado.",
    icon: `
      <svg width="40" height="40" fill="none" stroke="#2d7a3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 34c0-6 4-11 8-11s8 5 8 11"/>
        <path d="M20 3v30"/>
        <path d="M14 10l6-7 6 7"/>
      </svg>
    `,
  },
  {
    title: "Mapas de Colorimetría",
    desc:
        "Mapas en base a tus potreros que muestran visualmente el estado de nutrientes o forraje.",
    icon: `
      <svg width="40" height="40" fill="none" stroke="#2d7a3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="5" width="30" height="30" rx="6"/>
        <path d="M5 20h30"/>
        <path d="M20 5v30"/>
      </svg>
    `,
  },
  {
    title: "Monitoreo de Praderas",
    desc: "Seguimiento técnico periódico para apoyar la toma de decisiones.",
    icon: `
      <svg width="40" height="40" fill="none" stroke="#2d7a3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="20" cy="20" r="10"/>
        <path d="M2 20h6M32 20h6M20 2v6M20 32v6"/>
      </svg>
    `,
  },
  {
    title: "Asesoría Técnica",
    desc: "Apoyo profesional en manejo de fertilización, rotaciones y manejo del suelo.",
    icon: `
      <svg width="40" height="40" fill="none" stroke="#2d7a3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 3l14 8v18l-14 8-14-8V11z"/>
        <path d="M12 19l8 5 8-5"/>
      </svg>
    `,
  },
  {
    title: "Importación de Datos",
    desc:
        "Integración de tus archivos Excel y mapas KML/KMZ para un análisis completo.",
    icon: `
      <svg width="40" height="40" fill="none" stroke="#2d7a3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 30V10a2 2 0 012-2h12l10 10v12a2 2 0 01-2 2H8a2 2 0 01-2-2z"/>
        <path d="M20 8v10h10"/>
      </svg>
    `,
  },
  {
    title: "Lavado Industrial",
    desc:
        "Servicio de lavado y sanitización industrial de instalaciones, equipos y superficies.",
    icon: `
      <svg width="40" height="40" fill="none" stroke="#2d7a3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="20" cy="12" r="9"/>
        <path d="M4 34c0-6 7-10 16-10s16 4 16 10"/>
      </svg>
    `,
  },
];
</script>

<style scoped>
/* Grid responsive */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sg-spacing-lg);
  margin-top: var(--sg-spacing-lg);
}

/* Tarjeta */
.service-card {
  background-color: var(--sg-color-surface);
  border-radius: var(--sg-radius-md);
  padding: var(--sg-spacing-lg);
  border: 1px solid var(--sg-color-border);
  transition: box-shadow 0.2s ease, transform 0.15s ease;
}

.service-card:hover {
  box-shadow: var(--sg-shadow-soft);
  transform: translateY(-4px);
}

/* Icono */
.service-icon {
  margin-bottom: var(--sg-spacing-md);
}

/* Título y descripción */
.service-title {
  font-family: var(--sg-font-heading);
  font-size: var(--sg-text-xl);
  margin-bottom: var(--sg-spacing-xs);
  color: var(--sg-color-primary-dark);
}

.service-desc {
  color: var(--sg-color-text-muted);
  font-size: var(--sg-text-base);
  line-height: 1.55;
}

/* CTA centrado */
.services-cta {
  margin-top: var(--sg-spacing-xl);
  text-align: center;
}

/* Responsivo */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
