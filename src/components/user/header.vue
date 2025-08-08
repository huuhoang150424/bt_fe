<template>
  <div>
    <div class="wrapper bg-primaryColor py-2">
      <ul class="text-white flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm">
        <li class="flex items-center gap-2 mb-2 sm:mb-0">
          <MapPin class="w-4 h-4 text-white" />
          <span class="font-semibold">
            1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM
          </span>
        </li>
        <li class="flex items-center gap-2 mb-2 sm:mb-0">
          <Phone class="w-4 h-4 text-white" />
          <span class="font-semibold">(+84) 0313-728-397</span>
        </li>
        <li class="flex items-center gap-2">
          <Mail class="w-4 h-4 text-white" />
          <span class="font-semibold">info@themona.global</span>
        </li>
      </ul>
    </div>

    <div class="bg-[#e1eaff] relative">
      <div class="wrapper flex justify-between items-center py-4">
        <!-- Logo -->
        <router-link to="/" class="z-[1] relative">
          <img
            src="/logo.png"
            alt="Logo"
            class="object-cover w-auto h-10 sm:h-12 "
          />
        </router-link>

        <button
          class="sm:hidden text-gray-900 focus:outline-none z-30 relative p-2"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <div class="w-6 h-6 relative">
            <span
              :class="[
                'absolute left-0 w-6 h-0.5 bg-gray-900 transform transition-all duration-300 ease-in-out',
                isMenuOpen ? 'top-3 rotate-45' : 'top-1'
              ]"
            ></span>
            <span
              :class="[
                'absolute left-0 top-3 w-6 h-0.5 bg-gray-900 transform transition-all duration-300 ease-in-out',
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              ]"
            ></span>
            <span
              :class="[
                'absolute left-0 w-6 h-0.5 bg-gray-900 transform transition-all duration-300 ease-in-out',
                isMenuOpen ? 'top-3 -rotate-45' : 'top-5'
              ]"
            ></span>
          </div>
        </button>

        <div class="hidden sm:flex sm:items-center sm:gap-8">
          <ul class="flex flex-row gap-8">
            <li v-for="item in navItems" :key="item.name">
              <router-link
                :to="item.path"
                class="text-gray-900 font-semibold text-lg hover:text-primaryColor transition duration-300 ease-in-out relative group"
              >
                {{ item.name }}
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
              </router-link>
            </li>
          </ul>

          <div class="w-64">
            <Search v-model="searchTerm" />
          </div>
        </div>
      </div>

      <div
        :class="[
          'sm:hidden fixed inset-0 z-10 transition-all duration-300 ease-in-out',
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        ]"
      >
        <div
          class="absolute inset-0 bg-black bg-opacity-50"
          @click="closeMenu"
        ></div>

        <div
          :class="[
            'absolute top-0 left-0 w-full bg-[#e1eaff] shadow-lg transform transition-transform duration-300 ease-in-out',
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          ]"
          style="padding-top: 88px;"
        >
          <div class="wrapper">
            <ul class="py-6 space-y-4">
              <li v-for="item in navItems" :key="item.name">
                <router-link
                  :to="item.path"
                  class="block text-gray-900 font-semibold text-lg py-2 px-4 rounded-lg hover:bg-white hover:text-primaryColor transition duration-300 ease-in-out"
                  @click="closeMenu"
                >
                  {{ item.name }}
                </router-link>
              </li>
            </ul>

            <div class="pb-6 px-4">
              <div class="w-full">
                <Search v-model="searchTerm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="route.name !== 'home'" class="relative">
      <img
        src="/bg-header.jpg"
        alt="Header Background"
        class="w-full object-cover h-48 sm:h-64"
      />
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col justify-center text-center gap-2 px-4"
      >
        <span class="text-2xl sm:text-4xl font-semibold">{{ route.meta.breadcrumb }}</span>
        <div>
          <span
            v-if="route.meta.breadcrumb"
            class="flex items-center justify-center text-sm sm:text-lg font-medium"
          >
            <router-link
              to="/"
              class="hover:text-primaryColor transition"
            >
              Trang chủ
            </router-link>
            <span class="mx-1"> >> </span>
            <span>{{ route.meta.breadcrumb }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { Phone, Mail, MapPin } from 'lucide-vue-next';
import Search from '@/components/user/search.vue';

const route = useRoute();
const searchTerm = ref('');
const isMenuOpen = ref(false);

const navItems = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Giới thiệu', path: '/introduce' },
  { name: 'Dịch vụ', path: '/service' },
  { name: 'Faq', path: '/fqa' },
  { name: 'Bảng giá', path: '/pricing' },
  { name: 'Tin tức', path: '/news' },
  { name: 'Liên hệ', path: '/contact' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

const handleResize = () => {
  if (window.innerWidth >= 640 && isMenuOpen.value) {
    closeMenu();
  }
};

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  window.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('keydown', handleEscape);
  document.body.style.overflow = '';
});
</script>
