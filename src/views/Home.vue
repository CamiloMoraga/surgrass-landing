<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <GallerySection />
    <AboutSection />
    <ContactForm />
  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import GallerySection from "../components/GallerySection.vue";
import AboutSection from "../components/AboutSection.vue";
import ContactForm from "../components/ContactForm.vue";

export default {
  components: {
    HeroSection,
    ServicesSection,
    GallerySection,
    AboutSection,
    ContactForm,
  },
};
</script>
