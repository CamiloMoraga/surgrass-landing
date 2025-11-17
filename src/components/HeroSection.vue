<template>
  <section id="inicio" class="hero">
    <div class="overlay">
      <h1>Control de Praderas y Análisis de Suelo</h1>
      <p>Soluciones modernas para la gestión agrícola en el sur de Chile.</p>
      <a href="#contacto" class="btn">Contáctanos</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 85vh;
  background: url('../assets/img/login-bg.jpeg') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.overlay {
  background: rgba(0, 0, 0, 0.45);
  color: white;
  text-align: center;
  padding: 30px;
  border-radius: 10px;
}

h1 {
  font-size: 42px;
  margin-bottom: 15px;
}

p {
  font-size: 18px;
  margin-bottom: 25px;
}

.btn {
  background: #3a7d44;
  color: white;
  padding: 12px 28px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 18px;
}
</style>
