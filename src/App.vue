<template>
  <div id="app">
    <Navbar />

    <main>
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navbar, Footer },
};
</script>

<style>
main {
  min-height: calc(100vh - 200px);
  padding-top: 70px; /* deja espacio para navbar fijo */
}
</style>
