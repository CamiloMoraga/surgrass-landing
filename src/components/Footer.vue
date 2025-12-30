<template>
  <footer class="sg-footer">
    <div class="sg-container">

      <!-- Parte superior -->
      <div class="sg-footer-top">

        <!-- Columna izquierda -->
        <div class="footer-left">
          <div class="sg-footer-logo">Solution+</div>

          <p class="footer-description">
            Soluciones integrales para el manejo de praderas, análisis de suelo y
            forraje, con foco en productores del sur de Chile.
          </p>

          <div class="footer-contact">
            <strong>Contacto</strong>
            <p>Correo: contactosolution.spa@gmail.com</p>
            <p>Región de Los Lagos, Chile.</p>
          </div>

          <div class="footer-links">
            <strong>Enlaces</strong>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Quiénes somos</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>

        <!-- Columna derecha -->
        <div class="footer-right">
          <a
              href="#"
              class="footer-social footer-social--icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>

          <a
              href="#"
              class="sg-btn sg-btn--outline footer-app-btn"
              target="_blank"
              rel="noopener noreferrer"
          >
            <i class="fa-solid fa-mobile-screen-button"></i>
            App Solution+
          </a>
        </div>

      </div>

      <!-- Parte inferior -->
      <div class="sg-footer-bottom">
        <span>© 2025 Solution+. Todos los derechos reservados.</span>
        <span>Sitio desarrollado por Camilo Moraga.</span>
      </div>

    </div>
  </footer>
</template>

<style scoped>
/* Layout superior */
.sg-footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
}

/* Columna izquierda */
.footer-description {
  margin-top: 0.75rem;
  max-width: 420px;
  color: #9ca3af;
}

.footer-contact,
.footer-links {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.footer-links a {
  color: #9ca3af;
  font-size: var(--sg-text-sm);
}

.footer-links a:hover {
  color: #ffffff;
}

/* Columna derecha */
.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}

/* Social */
.footer-social {
  font-size: var(--sg-text-sm);
  color: #9ca3af;
}

.footer-social--icon {
  font-size: 1.25rem;
  color: #9ca3af;
  transition: color 0.2s ease, transform 0.2s ease;
}

.footer-social--icon:hover {
  color: #ffffff;
  transform: translateY(-1px);
}

.footer-social:hover {
  color: #ffffff;
}

.footer-app-btn {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.35);
  background-color: transparent;
}

.footer-app-btn:hover {
  background-color: rgba(255, 255, 255, 0.08);
  border-color: #ffffff;
  color: #ffffff;
}


/* Responsive */
@media (max-width: 768px) {
  .sg-footer-top {
    grid-template-columns: 1fr;
  }

  .footer-right {
    align-items: flex-start;
    margin-top: 2rem;
    gap: 1.25rem;
  }
}
</style>
