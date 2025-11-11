<template>
  <nav class="navbar">
    <div class="logo">Surgrass</div>
    <ul class="menu">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/servicios">Servicios</router-link></li>
      <li><router-link to="/galeria">Galería</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #0b4d26;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10%;
  z-index: 1000;
}

.menu {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.menu a {
  color: white;
  font-weight: 600;
}
</style>
