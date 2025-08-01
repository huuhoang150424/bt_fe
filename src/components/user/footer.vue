<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ref } from 'vue';

const email = ref('');

const services = [
  'Tư vấn thiết kế',
  'Thi công nội thất',
  'Bảo trì & sửa chữa',
  'Dịch vụ khách hàng'
];

const links = [
  'Trang chủ',
  'Giới thiệu',
  'Dịch vụ',
  'Dự án',
  'Liên hệ'
];

const subscribe = () => {
  if (email.value) {
    console.log(`Subscribed with email: ${email.value}`);
    email.value = '';
  }
};

const posts = [
  {
    title: 'Thiết kế nội thất hiện đại 2024',
    date: '01/06/2024',
    image: '/post1.jpg'
  },
  {
    title: 'Xu hướng màu sắc phòng khách',
    date: '25/05/2024',
    image: '/post2.jpg'
  },
  {
    title: 'Tối ưu không gian nhỏ',
    date: '15/05/2024',
    image: '/post3.jpg'
  }
];
</script>

<template>
  <div class="flex flex-col">
    <!-- Newsletter Section -->
    <div
      class="bg-[url('/footer_bg_2.png')] w-full bg-cover bg-no-repeat bg-[#080e1c]"
    >
      <div class="wrapper pt-10 pb-6 px-4 mx-auto">
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div class="flex items-center gap-4">
            <img
              src="../../../public/bg-footer.png"
              alt="Logo"
              class="object-cover w-auto h-10 sm:h-12"
            />
            <div class="h-10 w-[2px] bg-primaryColor"></div>
          </div>
          <div class="text-white text-center md:text-left">
            <h1 class="text-2xl sm:text-4xl font-bold">Bản tin mới nhất</h1>
            <h3 class="text-sm sm:text-base font-medium mt-3">
              Đăng ký ngay để nhận ưu đãi mới nhất
            </h3>
          </div>
          <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Input
              v-model="email"
              type="email"
              placeholder="Nhập email của bạn"
              class="w-full sm:w-64 border border-gray-200"
            />
            <Button
              @click="subscribe"
              class="bg-primaryColor text-white border-none"
              variant="outline"
              >Đăng ký</Button
            >
          </div>
        </div>
      </div>
      <div class="h-[1px] bg-gray-700 my-8 mx-auto w-[97%]"></div>

      <!-- Footer Columns -->
      <div class="wrapper px-4 pb-10">
        <ul
          class="flex flex-col md:flex-row justify-between gap-8 md:gap-4 text-sm sm:text-base"
        >
          <li class="flex flex-col gap-4 flex-1">
            <h2 class="text-white text-xl sm:text-2xl font-semibold">
              Giới thiệu công ty
            </h2>
            <div class="w-12 h-1 bg-primaryColor"></div>
            <span class="text-gray-400 mt-4 leading-relaxed">
              Professionally redefine transparent ROI through low-risk
              high-yield imperatives. Progressively create empowered, cost-effective
              users via team-driven solutions.
            </span>
            <ul class="flex gap-2 mt-4">
              <li
                v-for="n in 4"
                :key="n"
                class="p-2 rounded-full border-2 border-gray-200 text-gray-400"
              >
                <span>icon</span>
              </li>
            </ul>
          </li>
          <li class="flex flex-col gap-4 flex-1">
            <h2 class="text-white text-xl sm:text-2xl font-semibold">Liên kết</h2>
            <div class="w-12 h-1 bg-primaryColor"></div>
            <ul class="flex flex-col gap-3">
              <li v-for="link in links" :key="link">
                <router-link
                  :to="`/${link.toLowerCase()}`"
                  class="text-white text-sm sm:text-base hover:text-primaryColor transition duration-300 ease-in-out"
                  >{{ link }}</router-link
                >
              </li>
            </ul>
          </li>
          <li class="flex flex-col gap-4 flex-1">
            <h2 class="text-white text-xl sm:text-2xl font-semibold">Dịch vụ</h2>
            <div class="w-12 h-1 bg-primaryColor"></div>
            <ul class="flex flex-col gap-3">
              <li v-for="service in services" :key="service">
                <span
                  class="text-white text-sm sm:text-base hover:text-primaryColor transition duration-300 ease-in-out cursor-pointer"
                  >{{ service }}</span
                >
              </li>
            </ul>
          </li>
          <li class="flex flex-col gap-4 flex-1">
            <h2 class="text-white text-xl sm:text-2xl font-semibold">
              Bài viết mới nhất
            </h2>
            <div class="w-12 h-1 bg-primaryColor"></div>
            <ul class="flex flex-col gap-4">
              <li v-for="post in posts" :key="post.title" class="flex gap-3 text-white">
                <img
                  :src="post.image"
                  alt="Post thumbnail"
                  class="w-16 h-16 rounded-lg object-cover"
                />
                <div class="flex flex-col justify-center">
                  <h3 class="text-sm sm:text-base font-medium">{{ post.title }}</h3>
                  <span class="text-xs sm:text-sm text-gray-400">{{
                    post.date
                  }}</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-[#1a73e8] text-center py-4">
      <span class="text-white text-sm sm:text-base font-normal">
        © Thiết kế và lập trình bởi <strong>MonaMedia</strong>
      </span>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
