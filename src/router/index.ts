import ContactView from '@/views/contact.view.vue';
import FqaView from '@/views/fqa.view.vue';
import HomeView from '@/views/home.view.vue';
import IntroduceView from '@/views/introduce.view.vue';
import NewsView from '@/views/news.view.vue';
import ServiceView from '@/views/service.view.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/fqa',
    name: 'fqa',
    component: FqaView,
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: IntroduceView,
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
