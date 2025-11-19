<template>
  <header class="sg-navbar">
    <div class="sg-container sg-navbar-inner">
      <!-- Logo -->
      <div class="navbar-left">
        <a href="#top" class="navbar-logo">
          <span class="navbar-logo-mark"></span>
          <span class="navbar-logo-text">Surgrass</span>
        </a>
      </div>

      <!-- Menú desktop -->
      <nav class="navbar-nav" aria-label="Main navigation">
        <a href="#servicios" class="navbar-link">Servicios</a>
        <a href="#galeria" class="navbar-link">Galería</a>
        <a href="#nosotros" class="navbar-link">Quiénes somos</a>
        <a href="#contacto" class="navbar-link">Contacto</a>
      </nav>

      <!-- Botón hamburguesa móvil -->
      <button
          class="navbar-toggle"
          type="button"
          @click="isOpen = !isOpen"
          aria-label="Abrir menú de navegación"
      >
        <span :class="['bar', { 'bar--active': isOpen }]"></span>
        <span :class="['bar', { 'bar--active': isOpen }]"></span>
      </button>
    </div>

    <!-- Menú móvil -->
    <transition name="fade-down">
      <div v-if="isOpen" class="navbar-mobile">
        <nav class="navbar-mobile-nav">
          <a href="#servicios" class="navbar-mobile-link" @click="close">
            Servicios
          </a>
          <a href="#galeria" class="navbar-mobile-link" @click="close">
            Galería
          </a>
          <a href="#nosotros" class="navbar-mobile-link" @click="close">
            Quiénes somos
          </a>
          <a href="#contacto" class="navbar-mobile-link" @click="close">
            Contacto
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
.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar-logo-mark {
  width: 28px;
  height: 28px;
  border-radius: 10px;
  background: radial-gradient(circle at 20% 20%, #bbf7d0, #15803d);
  box-shadow: 0 10px 25px rgba(21, 128, 61, 0.4);
}

.navbar-logo-text {
  font-family: var(--sg-font-heading);
  font-weight: 600;
  letter-spacing: 0.04em;
  font-size: var(--sg-text-lg);
  color: var(--sg-color-primary-dark);
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

/* Hamburguesa (móvil) */
.navbar-toggle {
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-left: 1rem;
}

.navbar-toggle .bar {
  position: relative;
  width: 18px;
  height: 2px;
  background-color: #111827;
  border-radius: 999px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.navbar-toggle .bar + .bar {
  margin-top: 5px;
}

.bar--active:first-child {
  transform: translateY(3.5px) rotate(45deg);
}

.bar--active:last-child {
  transform: translateY(-3.5px) rotate(-45deg);
}

/* Menú móvil */
.navbar-mobile {
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

/* Animación */
.fade-down-enter-active,
.fade-down-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* Responsivo */
@media (max-width: 900px) {
  .navbar-nav {
    display: none;
  }

  .navbar-toggle {
    display: inline-flex;
  }
}
</style>
