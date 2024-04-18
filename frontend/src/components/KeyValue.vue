<script>
import KeyValueCards from './KeyValueCards.vue'

export default {
      components: {
            KeyValueCards
      }
}
</script>

<template>
      <!-- TODO: Need to bring in fonts -->
      <section>
            <h1>What do we do?</h1>
            <div class="card-section">
                  <KeyValueCards />
                  <KeyValueCards />
                  <KeyValueCards />
            </div>
      </section>
</template>

<style scoped></style>