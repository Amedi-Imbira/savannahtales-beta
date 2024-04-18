<script>
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import KeyValue from '@/components/KeyValue.vue'
import ValueProp from '@/components/ValueProp.vue'
import Footer from '@/components/Footer.vue'

export default {
      components: {
            NavBar,
            HeroSection,
            KeyValue,
            ValueProp,
            Footer
      },
}
</script>

<template>
      <NavBar />
      <HeroSection />
      <KeyValue />
      <ValueProp />
      <Footer />
</template>
