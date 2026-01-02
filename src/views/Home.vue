<template>
  <!-- Ancla superior -->
  <div id="top"></div>

  <HeroSection />
  <AboutSection />
  <ServicesSection />
  <ShowcaseSection />
  <ContactForm />
</template>

<script setup>
import HeroSection from '@components/HeroSection.vue';
import AboutSection from '@components/AboutSection.vue';
import ServicesSection from '@components/ServicesSection.vue';
import ShowcaseSection from '@components/ShowcaseSection.vue';
import ContactForm from '@components/ContactForm.vue';
</script>
