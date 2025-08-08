<script setup>
import { Button } from '@/components/ui/button';
</script>

<template>
  <section class="py-8 md:py-12 lg:py-[50px] wrapper flex flex-col justify-center items-center">
    <div class="relative">
      <h1
        class="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-[900]"
        style="
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.0001) 0%,
            rgba(0, 0, 0, 1) 0.001%,
            rgba(0, 0, 0, 0) 80%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        "
      >
        PRICING
      </h1>
      <div class="flex items-center gap-2 absolute top-[55%] left-2 w-full sm:w-auto">
        <img
          src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
          alt=""
          class="w-6 h-6 md:w-8 md:h-8"
        />
        <h3 class="text-base md:text-xl font-[600] text-primaryColor">
          giới thiệu giải pháp
        </h3>
      </div>
    </div>
    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-gray-800 font-[700] mb-4 md:mb-5 lg:mb-[20px]">
      Bảng Giá <span class="text-primaryColor">Dịch Vụ</span>
    </h1>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-4 md:mb-6 lg:mb-[20px]">
      <li
        v-for="i in 3"
        :key="i"
        class="rounded-[12px] shadow-lg overflow-hidden bg-[#f5f5f5]"
      >
        <div class="relative bg-[#141d38] text-white">
          <h1 class="text-xl md:text-2xl lg:text-[32px] font-[600] px-4 md:px-6 lg:px-[35px] pt-4 md:pt-6 lg:pt-[30px]">
            Gói cơ bản
          </h1>
          <p class="px-4 md:px-6 lg:px-[35px] text-sm md:text-base">
            Cung cấp các tính năng cần thiết
          </p>
          <div class="w-full h-[2px] bg-[#463aa8] my-4 md:my-5 lg:my-6"></div>
          <div class="px-4 md:px-6 lg:px-[35px] pb-4 md:pb-6 lg:pb-[30px]">
            <h1 class="text-lg md:text-xl lg:text-[30px] font-[500]">
              3,990,000₫ <span class="text-sm md:text-[15px]">/ tháng</span>
            </h1>
          </div>
        </div>
        <div class="p-4 md:p-5 lg:p-[25px]">
          <ul class="flex flex-col gap-3 md:gap-4">
            <li v-for="j in 5" :key="j" class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#22c55e"
                viewBox="0 0 24 24"
                class="w-5 h-5 md:w-6 md:h-6"
              >
                <circle cx="12" cy="12" r="10" fill="#7259f4" />
                <path
                  fill="white"
                  d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z"
                />
              </svg>
              <span class="text-sm md:text-base">Tính năng cơ bản</span>
            </li>
          </ul>
          <Button
            variant="outline"
            class="border-none bg-primaryColor text-white mt-4 md:mt-5 lg:mt-[20px] w-full text-sm md:text-base"
          >
            Mua ngay
          </Button>
        </div>
      </li>
    </ul>
  </section>
</template>

