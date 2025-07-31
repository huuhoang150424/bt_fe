<template>
  <div>
    <div class="wrapper bg-primaryColor py-2">
      <ul class="text-white flex flex-col sm:flex-row items-center gap-2 sm:gap-[15px] text-xs sm:text-sm">
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

    <div class="bg-[#e1eaff]">
      <div class="flex flex-col sm:flex-row justify-between items-center wrapper py-3 sm:py-[17px] gap-2 sm:gap-0">
        <router-link to="/">
          <img src="../../public/logo.png" alt="Logo" class="object-cover w-auto h-10 sm:h-[50px]" />
        </router-link>

        <div class="w-full sm:w-auto flex justify-center sm:justify-end">
          <ul class="hidden sm:flex gap-4 md:gap-8">
            <li v-for=" item in navItems " :key=" item.name ">
              <router-link :to=" item.path "
                class="text-gray-900 font-[600] text-base md:text-[18px] hover:text-primaryColor transition duration-300 ease-in-out">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
          <!-- Hamburger menu for mobile -->
          <div class="sm:hidden flex items-center">
            <button @click="showMobileMenu = !showMobileMenu" class="p-2 focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>

        <div class="px-3 py-3 sm:px-[14px] sm:py-[14px] rounded-full border-2 border-gray-200 bg-white mt-2 sm:mt-0">
          <span class="text-xs sm:text-base">Tìm</span>
        </div>
      </div>
      <!-- Mobile menu -->
      <transition name="fade">
        <div v-if="showMobileMenu" class="sm:hidden bg-white shadow-md rounded-b-xl px-4 py-2">
          <ul class="flex flex-col gap-2">
            <li v-for=" item in navItems " :key=" item.name ">
              <router-link :to=" item.path "
                class="block text-gray-900 font-[600] text-base py-2 hover:text-primaryColor transition duration-300 ease-in-out">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>

    <div v-if=" route.name !== 'home' " class="relative">
      <img src="../../public/bg-header.jpg" alt="Header Background" class="w-full object-cover max-h-40 sm:max-h-72" />
      <div
        class="absolute top-1/3 left-1/2 -translate-x-1/2 text-white gap-2 flex flex-col justify-center text-center w-full px-2">
        <span class="text-xl sm:text-3xl md:text-[38px] font-[600]">{{ route.meta.breadcrumb }}</span>
        <div class="">
          <span v-if=" route.meta.breadcrumb " class="flex flex-wrap justify-center items-center text-base sm:text-[18px] font-[500]">
            <router-link to="/" class="hover:text-primaryColor transition text-base sm:text-[18px] font-[500]">Trang chủ</router-link>
            <span class="mx-1 text-base sm:text-[18px] font-[500]"> >> </span>
            <span class="text-base sm:text-[18px] font-[500]">{{ route.meta.breadcrumb }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { Phone, Mail, MapPin } from 'lucide-vue-next'

const route = useRoute()

const navItems = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Giới thiệu', path: '/introduce' },
  { name: 'Dịch vụ', path: '/service' },
  { name: 'Faq', path: '/fqa' },
  { name: 'Bảng giá', path: '/pricing' },
  { name: 'Tin tức', path: '/news' },
  { name: 'Liên hệ', path: '/contact' }
]

import { ref } from 'vue'
const showMobileMenu = ref(false)
</script>
