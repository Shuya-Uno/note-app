import { createRouter, createWebHistory } from 'vue-router'
import Note from '../views/Note.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Note',
    component: Note
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
