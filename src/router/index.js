import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import MovieTickeBuy from '@/components/modules/movieTickets/MovieTicketBuy.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: '',
      component: MainView,
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: MovieTickeBuy,
    },
  ],
})

export default router
