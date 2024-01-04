// Composables
import { createRouter, createWebHistory } from 'vue-router';
import home from '@/components/home-page';
import login from '../components/login-page.vue';
import search from '../components/search-page.vue';
import info from '../components/info-page.vue';
import detail from '../components/detail-page.vue';
import booking from '../components/booking-page.vue';

const routes = [
  {
    path: '/',
    name: 'root',
    component: home
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/info',
    name: 'info',
    component: info
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
  {
    path: '/book',
    name: 'booking',
    component: booking
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
