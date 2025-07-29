<template>
  <div>
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

    <div class="bg-[#e1eaff]">
      <div class="flex justify-between items-center wrapper py-[17px]">
        <router-link to="/">
          <img src="../../public/logo.png" alt="Logo" class="object-cover w-auto h-[50px]" />
        </router-link>


        <div>
          <ul class="flex gap-8">
            <li v-for=" item in navItems " :key=" item.name ">
              <router-link :to=" item.path "
                class="text-gray-900 font-[600] text-[18px] hover:text-primaryColor transition duration-300 ease-in-out">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="px-[14px] py-[14px] rounded-[100%] border-[2px] border-gray-200 bg-white">
          <span>Tìm</span>
        </div>
      </div>
    </div>

    <div v-if=" route.name !== 'home' ">
      <img src="../../public/bg-header.jpg" alt="Search Icon" class="w-full object-cover" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { Phone, Mail, MapPin } from 'lucide-vue-next'

const route = useRoute()

const navItems = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Giới thiệu', path: '/about' },
  { name: 'Dịch vụ', path: '/services' },
  { name: 'Faq', path: '/faq' },
  { name: 'Bảng giá', path: '/pricing' },
  { name: 'Tin tức', path: '/news' },
  { name: 'Liên hệ', path: '/contact' }
]
</script>
