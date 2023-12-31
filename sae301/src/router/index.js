import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InscriptionView from '../views/InscriptionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: () => import('../views/InscriptionView.vue') // Assurez-vous d'avoir un fichier ConnexionView.vue dans votre répertoire views.
    },
    {
      path: '/personnalisation',
      name: 'personnalisation',
      component: () => import('../views/PersonnalisationView.vue') // Assurez-vous d'avoir un fichier ConnexionView.vue dans votre répertoire views.
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue') // Assurez-vous d'avoir un fichier ConnexionView.vue dans votre répertoire views.
    }
  ]
})

export default router
