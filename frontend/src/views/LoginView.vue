<script>
import Navbar from '@/components/Navbar.vue';

export default {
      components: {
            Navbar
      },
      data() {
            return {
                  auth_email: '',
                  auth_pwd: ''
            }
      }
}
</script>

<template>
      <Navbar />
      
      <section class="container">
            <div class="image-section">
                  <h1>Put some image here...</h1>
            </div>
            <div class="form-container">
                  <h1>Log In</h1>
                  <form> <!-- FIXME: Don't forget to update the form tag during submission -->
                        <div class="form-group">
                              <input v-model="auth_email" type="text" placeholder="Email" />
                        </div>
                        <div class="form-group">
                              <input v-model="auth_pwd" type="password" placeholder="Password" />
                        </div>
                        
                        <button type="submit" class="cta-with-border">Log In</button>
                  </form>
                  <RouterLink to="/forgot">Forgot password?</RouterLink>
                  <!-- TODO: to be disabled until user has filled all the inputs -->
                  <p>Don't have an account? <RouterLink to="/signup">Sign up</RouterLink></p>
            </div>
      </section>
</template>

<style scoped>
.container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15%;
      height: 90vh;
}

</style>