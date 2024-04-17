import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import LandingView from './views/LandingView.vue'
import LoginView from './views/LoginView.vue'
import SignupView from './views/SignupView.vue'
import AboutUsView from './views/AboutUsView.vue'
import WritersView from './views/WritersView.vue'

const routes = [
      {path: '/', component: LandingView},
      {path: '/login', component: LoginView},
      {path: '/signup', component: SignupView},
      {path: '/about', component: AboutUsView},
      {path: '/writers', component: WritersView},
]

const router = createRouter({
      history: createMemoryHistory(),
      routes,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
