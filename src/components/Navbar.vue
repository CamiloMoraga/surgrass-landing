<template>
  <header class="navbar">
    <div class="container">
      <div class="logo">SURGRASS</div>

      <nav :class="{ open: menuOpen }">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#galeria">Galería</a>
        <a href="#nosotros">Quiénes Somos</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <div class="toggle" @click="menuOpen = !menuOpen">
        ☰
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return { menuOpen: false };
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid #eee;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
}

.logo {
  font-weight: bold;
  font-size: 22px;
  color: #3a7d44;
  letter-spacing: 1px;
}

nav {
  display: flex;
  gap: 25px;
}

nav a {
  text-decoration: none;
  color: #444;
  font-weight: 500;
}

.toggle {
  display: none;
  cursor: pointer;
  font-size: 24px;
}

/* Mobile */
@media (max-width: 768px) {
  nav {
    position: absolute;
    top: 60px;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 20px;
    width: 200px;
    border-left: 1px solid #eee;
    border-bottom: 1px solid #eee;
    display: none;
  }

  nav.open {
    display: flex;
  }

  .toggle {
    display: block;
  }
}
</style>
