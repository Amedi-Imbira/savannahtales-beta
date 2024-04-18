<script>
import Navbar from '@/components/Navbar.vue';
import HeroSection from '@/components/HeroSection.vue';
import Features from '@/components/Features.vue';
import ValueProposition from '@/components/ValueProposition.vue';
import Footer from '@/components/Footer.vue';

export default {
      components: {
            Navbar,
            HeroSection,
            Features,
            ValueProposition,
            Footer
      }
}
</script>

<template>
      <Navbar />
      <HeroSection />
      <Features />
      <ValueProposition />
      <Footer />

</template>