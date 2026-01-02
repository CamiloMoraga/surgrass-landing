<template>
  <footer class="sg-footer">
    <div class="sg-container">

      <div class="sg-footer-top">

        <div class="footer-left">
          <div class="sg-footer-logo">Solution+</div>

          <p class="footer-description">
            Soluciones técnicas de precisión para el sector agroindustrial,
            especializadas en análisis de recursos y optimización productiva en el sur de Chile.
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

        <div class="footer-right">
          <a
              href="https://www.instagram.com/gruposurgrass/"
              class="footer-social footer-social--icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
          >
            <i class="fa-brands fa-instagram"></i>
            <span class="social-label">@gruposurgrass</span>
          </a>
        </div>

      </div>

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
  line-height: 1.6;
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
  transition: color 0.2s;
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
.footer-social--icon {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
}

.social-label {
  font-size: var(--sg-text-sm);
}

.footer-social--icon:hover {
  color: #ffffff;
  transform: translateY(-1px);
}

/* Responsive */
@media (max-width: 768px) {
  .sg-footer-top {
    grid-template-columns: 1fr;
  }

  .footer-right {
    align-items: flex-start;
    margin-top: 2rem;
  }
}
</style>