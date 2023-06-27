import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import { createRouter, createWebHistory } from 'vue-router'
import i18n from './locales/i18n';
// import HomeView from './views/HomeView.vue'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const app = createApp(App)



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/HomeView.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import()
    // }
  ]
})

app.use(i18n)
app.use(router)

app.mount('#app')

export default i18n;