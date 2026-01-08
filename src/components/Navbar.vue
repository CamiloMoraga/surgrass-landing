<template>
  <header class="sg-navbar">
    <div class="sg-container sg-navbar-inner">
      <!-- Logo -->
      <a href="#top" class="navbar-logo" @click="close">
        <img src="../assets/img/logo_solution.png" alt="Solution+"/>
      </a>

      <!-- Menú desktop -->
      <nav class="navbar-nav" aria-label="Main navigation">
        <a href="#nosotros" class="navbar-link">Quiénes somos</a>
        <a href="#servicios" class="navbar-link">Servicios</a>
        <a href="#contacto" class="navbar-link">Contacto</a>

        <!-- Herramientas -->
        <a
            href="https://surgrass-saas-591297746180.southamerica-west1.run.app/"
            class="sg-btn sg-btn--outline navbar-btn"
            target="_blank"
            rel="noopener noreferrer"
        >
          Mapa de colorimetría
        </a>

        <a
            href="https://www.surgrass.cl/"
            class="sg-btn sg-btn--primary navbar-btn"
            target="_blank"
            rel="noopener noreferrer"
        >
          Plataforma
        </a>
      </nav>


      <!-- Botón hamburguesa móvil -->
      <button
          class="navbar-toggle"
          type="button"
          @click="isOpen = !isOpen"
          aria-label="Abrir menú"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>

    <!-- Menú móvil -->
    <transition name="fade-slide-y">
      <div v-if="isOpen" class="navbar-mobile">
        <nav class="navbar-mobile-nav">
          <!-- Navegación interna -->
          <a href="#nosotros" class="navbar-mobile-link" @click="close">
            Quiénes somos
          </a>

          <a href="#servicios" class="navbar-mobile-link" @click="close">
            Servicios
          </a>

          <a href="#contacto" class="navbar-mobile-link" @click="close">
            Contacto
          </a>

          <div class="navbar-mobile-divider"></div>

          <!-- Herramientas -->
          <a
              href="https://surgrass-saas-591297746180.southamerica-west1.run.app/"
              class="navbar-mobile-link navbar-mobile-link--tool"
              target="_blank"
              rel="noopener noreferrer"
              @click="close"
          >
            Mapa de colorimetría
          </a>

          <a
              href="https://www.surgrass.cl/"
              class="navbar-mobile-link navbar-mobile-link--primary"
              target="_blank"
              rel="noopener noreferrer"
              @click="close"
          >
            Plataforma Surgrass
          </a>
        </nav>

      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const close = () => {
  isOpen.value = false;
};
</script>

<style scoped>
.navbar-logo {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
}

.navbar-logo img {
  height: 42px;
  width: auto;
  object-fit: contain;
}

/* Menú desktop */
.navbar-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: auto;
}

.navbar-link {
  font-size: var(--sg-text-sm);
  color: var(--sg-color-text-muted);
  font-weight: 500;
  position: relative;
}

.navbar-link--external {
  font-weight: 600;
  color: var(--sg-color-primary-dark);
}

.navbar-link--external:hover::after {
  content: '↗';
  margin-left: 0.35rem;
  font-size: 0.75em;
  opacity: 0.6;
  width: auto;
}

.navbar-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.35rem;
  width: 0;
  height: 2px;
  background-color: var(--sg-color-primary);
  transition: width 0.2s ease;
}

.navbar-link:hover {
  color: var(--sg-color-text);
}

.navbar-link:hover::after {
  width: 100%;
}

.navbar-btn {
  margin-left: 0.75rem;
  font-size: var(--sg-text-sm);
  padding: 0.45rem 0.9rem;
}

/* ------------------------------------
   Botón hamburguesa minimalista
   ------------------------------------ */

.navbar-toggle {
  display: none;
  width: 32px;       /* más pequeño */
  height: 32px;      /* más pequeño */
  border-radius: 50%;
  border: 1px solid var(--sg-color-border);
  background-color: var(--sg-color-surface);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-left: 1rem;
  cursor: pointer;
  flex-direction: column;
  gap: 4px;          /* barras más juntas */
}

.navbar-toggle:focus,
.navbar-toggle:focus-visible {
  outline: none !important;
  box-shadow: none !important;
}


/* Barras más pequeñas */
.bar {
  width: 18px;       /* antes 24px → ahora más delicado */
  height: 2px;       /* antes 3px → más fino */
  background-color: #111827;
  border-radius: 999px;
}


/* Menú móvil */
.navbar-mobile {
  backdrop-filter: blur(6px);
  border-top: 1px solid var(--sg-color-border);
  background-color: #ffffff;
}

.navbar-mobile-nav {
  padding: 0.75rem 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.navbar-mobile-link {
  font-size: var(--sg-text-sm);
  color: var(--sg-color-text);
}

/* Animación suave de entrada/salida */
.fade-slide-y-enter-active,
.fade-slide-y-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-slide-y-enter-from,
.fade-slide-y-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.navbar-mobile-divider {
  height: 1px;
  background-color: var(--sg-color-border);
  margin: 0.75rem 0;
}

/* Herramientas */
.navbar-mobile-link--tool {
  font-weight: 600;
}

/* CTA principal */
.navbar-mobile-link--primary {
  margin-top: 0.25rem;
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
  background-color: var(--sg-color-primary);
  color: #ffffff;
  text-align: center;
}

/* Responsivo */
@media (max-width: 900px) {
  .navbar-nav {
    display: none;
  }

  .navbar-toggle {
    display: inline-flex;
  }

  .navbar-logo img {
    height: 36px;
  }

  .navbar-btn {
    display: none;
  }
}
</style>
