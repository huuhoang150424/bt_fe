<template>
  <div>
    <!-- Phần top bar -->
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

    <!-- Phần menu chính -->
    <div class="bg-[#e1eaff]">
      <div class="flex justify-between items-center wrapper py-4">
        <!-- Logo -->
        <router-link to="/">
          <img
            src="../../../public/logo.png"
            alt="Logo"
            class="object-cover w-auto h-10 sm:h-12"
          />
        </router-link>

        <!-- Menu toggle for mobile -->
        <button
          class="sm:hidden text-gray-900 focus:outline-none"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <!-- Menu -->
        <div
          :class="[
            'sm:flex sm:items-center sm:gap-8 absolute sm:static top-full left-0 w-full sm:w-auto bg-[#e1eaff] sm:bg-transparent transition-all duration-300 ease-in-out',
            isMenuOpen ? 'block' : 'hidden'
          ]"
        >
          <ul class="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-0">
            <li v-for="item in navItems" :key="item.name">
              <router-link
                :to="item.path"
                class="text-gray-900 font-semibold text-base sm:text-lg hover:text-primaryColor transition duration-300 ease-in-out"
                @click="closeMenu"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>

          <!-- Tìm kiếm -->
          <div class="mt-4 sm:mt-0 sm:ml-8 w-full sm:w-64">
            <Search v-model="searchTerm" />
          </div>
        </div>
      </div>
    </div>

    <!-- Banner Header -->
    <div v-if="route.name !== 'home'" class="relative">
      <img
        src="../../../public/bg-header.jpg"
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
              >Trang chủ</router-link
            >
            <span class="mx-1"> >> </span>
            <span>{{ route.meta.breadcrumb }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

