import { createRouter, createWebHistory } from 'vue-router'
// import MainView from '@/views/MainView.vue'
import MovieTicketBuy from '@/components/modules/movieTickets/views/MovieTicketBuy.vue'
import MainPage from '@/components/modules/mainPages/mainPage.vue'

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
  ],
})

export default router
