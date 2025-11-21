<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <GallerySection />
    <ContactForm />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import GallerySection from "@/components/GallerySection.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  components: {
    HeroSection,
    AboutSection,
    ServicesSection,
    GallerySection,
    ContactForm,
  },
};
</script>
