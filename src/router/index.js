import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import MovieTicketBuy from '@/components/modules/movieTickets/views/MovieTicketBuy.vue'
import MainPage from '@/components/modules/mainPages/mainPage.vue'
import Login from '@/components/modules/mainPages/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: MovieTicketBuy,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
})

export default router
