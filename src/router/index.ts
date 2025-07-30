import ContactView from '@/views/contact.view.vue'
import FqaView from '@/views/fqa.view.vue'
import HomeView from '@/views/home/home.view.vue'
import IntroduceView from '@/views/introduce.view.vue'
import NewsView from '@/views/news.view.vue'
import ServiceView from '@/views/service.view.vue'
import PricingView from '@/views/pricing.view.vue'
import newsDetailView from '@/views/news.detail.view.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { breadcrumb: 'Trang chủ' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { breadcrumb: 'Liên hệ' },
  },
  {
    path: '/fqa',
    name: 'fqa',
    component: FqaView,
    meta: { breadcrumb: 'Câu hỏi thường gặp' },
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: IntroduceView,
    meta: { breadcrumb: 'Giới thiệu' },
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingView,
    meta: { breadcrumb: 'Bảng giá' },
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    meta: { breadcrumb: 'Tin tức' },
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView,
    meta: { breadcrumb: 'Dịch vụ' },
  },
  {
    path: '/news/:id',
    name: 'news-detail',
    component: newsDetailView,
    meta: { breadcrumb: 'Chi tiết' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
