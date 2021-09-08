import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../screens/Home.vue'

const routes = [
  {
    path: '/',
    beforeEnter: (to, from, next) => {
      const id = '12345'
      store.commit('setStoreId', id)
      store.dispatch('fetchStore', { id })
      store.dispatch('fetchComments', { id })
      next()
    },
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
