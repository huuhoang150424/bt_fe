
import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/components/layout/main-layout.vue';
import AdminLayout from '@/components/layout/admin-layout.vue';
import LoginView from '@/views/admin/auth/login.view.vue';
import ContactView from '@/views/user/contact.view.vue';
import FqaView from '@/views/user/fqa.view.vue';
import HomeView from '@/views/user/home/home.view.vue';
import IntroduceView from '@/views/user/introduce.view.vue';
import NewsView from '@/views/user/news.view.vue';
import ServiceView from '@/views/user/service.view.vue';
import DashboardView from '@/views/admin/dashbroad.view.vue';
import { useAuthStore } from '@/stores/auth';
import PricingView from '@/views/user/pricing.view.vue';
import PricingAdminView from '@/views/admin/pricing/pricing.view.vue';
import CategoryView from '@/views/admin/category/category.view.vue';
import PostView from '@/views/admin/post/post.view.vue';
import NewsDetailView from '@/views/news.detail.view.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requiresAuth: false, breadcrumb: 'Đăng nhập' },
  },
  {
    path: '/',
    component: MainLayout,
    meta: { requiresAuth: false },
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
        meta: { breadcrumb: 'Trang chủ', requiresAuth: false },
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
        path: '/news/:id',
        name: 'news-detail',
        component: NewsDetailView,
        meta: { breadcrumb: 'Tin tức' },
      },
      {
        path: '/service',
        name: 'service',
        component: ServiceView,
        meta: { breadcrumb: 'Dịch vụ' },
      },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: DashboardView,
        meta: { breadcrumb: 'Bảng điều khiển', requiresAuth: true },
      },
      {
        path: 'categories',
        name: 'categories',
        component: CategoryView,
        meta: { breadcrumb: 'Chuyên mục', requiresAuth: true },
      },
      {
        path: 'pricing',
        name: 'pricing-admin',
        component: PricingAdminView,
        meta: { breadcrumb: 'Gói giá', requiresAuth: true },
      },
      {
        path: 'posts',
        name: 'posts',
        component: PostView,
        meta: { breadcrumb: 'Bài viết', requiresAuth: true },
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated && localStorage.getItem('token')) {
    authStore.initializeAuth();
  }

  if (to.name === 'login' && authStore.isLoggedIn) {
    next('/admin/dashboard');
    return;
  }

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next('/login');
    return;
  }

  next();
});

export default router;
