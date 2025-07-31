<template>
  <div>
    <!-- Phần top bar -->
    <div class="wrapper bg-primaryColor py-[8px]">
      <ul class="text-white flex items-center gap-[15px]">
        <li class="flex items-center gap-2">
          <MapPin class="w-4 h-4 text-white" />
          <span class="font-600">
            1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM
          </span>
        </li>
        <li class="flex items-center gap-2">
          <Phone class="w-4 h-4 text-white" />
          <span class="font-600">(+84) 0313-728-397</span>
        </li>
        <li class="flex items-center gap-2">
          <Mail class="w-4 h-4 text-white" />
          <span class="font-600">info@themona.global</span>
        </li>
      </ul>
    </div>

    <!-- Phần menu chính -->
    <div class="bg-[#e1eaff]">
      <div class="flex justify-between items-center wrapper py-[17px]">
        <!-- Logo -->
        <router-link to="/">
          <img
            src="../../../public/logo.png"
            alt="Logo"
            class="object-cover w-auto h-[50px]"
          />
        </router-link>

        <!-- Menu -->
        <ul class="flex gap-8">
          <li v-for="item in navItems" :key="item.name">
            <router-link
              :to="item.path"
              class="text-gray-900 font-[600] text-[18px] hover:text-primaryColor transition duration-300 ease-in-out"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>

        <!-- Tìm kiếm -->
        <div class="relative w-[250px]">
          <Search v-model="searchTerm" />
        </div>
      </div>
    </div>

    <!-- Banner Header -->
    <div v-if="route.name !== 'home'" class="relative">
      <img
        src="../../../public/bg-header.jpg"
        alt="Header Background"
        class="w-full object-cover"
      />
      <div
        class="absolute top-[30%] left-[50%] translate-x-[-50%] text-white gap-2 flex flex-col justify-center text-center"
      >
        <span class="text-[38px] font-[600]">{{ route.meta.breadcrumb }}</span>
        <div class="">
          <span
            v-if="route.meta.breadcrumb"
            class="flex items-center text-[18px] font-[500]"
          >
            <router-link
              to="/"
              class="hover:text-primaryColor transition text-[18px] font-[500]"
              >Trang chủ</router-link
            >
            <span class="mx-1 text-[18px] font-[500]"> >> </span>
            <span class="text-[18px] font-[500]">{{
              route.meta.breadcrumb
            }}</span>
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

const navItems = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Giới thiệu', path: '/introduce' },
  { name: 'Dịch vụ', path: '/service' },
  { name: 'Faq', path: '/fqa' },
  { name: 'Bảng giá', path: '/pricing' },
  { name: 'Tin tức', path: '/news' },
  { name: 'Liên hệ', path: '/contact' },
];
</script>
