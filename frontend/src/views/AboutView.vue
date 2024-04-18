<script>
import NavBar from '@/components/NavBar.vue'

export default {
      components: {
            NavBar
      },
}
</script>

<template>
  <NavBar />
  <h1>This is our story</h1>
  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
