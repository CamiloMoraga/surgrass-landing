<template>
  <footer class="sg-footer">
    <div class="sg-container">
      <div class="sg-footer-top">
        <div>
          <div class="sg-footer-logo">Solution+</div>
          <p class="footer-text">
            Soluciones integrales para el manejo de praderas, análisis de suelo
            y forraje, con foco en productores del sur de Chile.
          </p>
        </div>

        <div class="footer-columns">
          <div class="footer-column">
            <h3 class="footer-heading">Contacto</h3>
            <p class="footer-text">
              Correo: <a href="mailto:contacto@solution+.cl">contacto@solution+.cl</a><br />
              Región de Los Lagos, Chile.
            </p>
          </div>

          <div class="footer-column">
            <h3 class="footer-heading">Enlaces</h3>
            <p class="footer-text">
              <a href="#servicios">Servicios</a><br />
              <a href="#nosotros">Quiénes somos</a><br />
              <a href="#contacto">Contacto</a>
            </p>
          </div>
        </div>
      </div>

      <div class="sg-footer-bottom">
        <span>© {{ new Date().getFullYear() }} Solution+. Todos los derechos reservados.</span>
        <span>Sitio desarrollado por Camilo Moraga.</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Sin lógica por ahora
</script>

<style scoped>
.footer-text {
  margin-top: 0.5rem;
  max-width: 420px;
  font-size: var(--sg-text-sm);
}

.footer-text a {
  color: #e5e7eb;
}

.footer-text a:hover {
  text-decoration: underline;
}

.footer-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-heading {
  font-family: var(--sg-font-heading);
  font-size: var(--sg-text-sm);
  font-weight: 600;
  color: #e5e7eb;
}

@media (max-width: 768px) {
  .footer-columns {
    width: 100%;
  }
}
</style>
