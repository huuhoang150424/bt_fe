<script setup>
import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-vue-next';
</script>

<template>
  <section class="px-4 md:px-6 lg:px-[30px] py-8 md:py-12">
    <div
      class="relative bg-[url('/service_bg_2.jpg')] w-full h-auto bg-cover bg-no-repeat rounded-[12px] px-4 md:px-8 lg:px-[80px] py-6 md:py-8 lg:py-[30px]"
    >
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="w-full md:w-[50%]">
          <div class="relative">
            <h1
              class="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-[900] text-center md:text-left"
              style="
                background: linear-gradient(
                  to bottom,
                  rgba(255, 255, 255, 0.0001) 0%,
                  rgba(255, 255, 255, 1) 0.001%,
                  rgba(255, 255, 255, 0) 80%
                );
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              "
            >
              About Us
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
          <div>
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-white font-[700] mb-4 md:mb-5 lg:mb-[20px] text-center md:text-left">
              Thu hút sự chú ý và thúc đẩy chuyển đổi với
              <span class="text-primaryColor">Marketing</span>
            </h1>
          </div>
        </div>
        <div class="w-full md:w-[40%] flex justify-center md:justify-end">
          <Button
            variant="outline"
            class="border-none bg-primaryColor text-white mt-4 md:mt-6 lg:mt-[25px] text-sm md:text-base"
          >
            Xem tất cả dịch vụ
          </Button>
        </div>
      </div>
      <div
        class="relative mt-8 md:mt-12 lg:mt-0 lg:absolute lg:top-[70%] mx-auto left-[50%] lg:-translate-x-1/2 w-full lg:w-[85%]"
      >
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">
          <li
            v-for="i in 4"
            :key="i"
            class="relative bg-white p-4 md:p-6 lg:p-[30px] rounded-[12px] shadow-lg text-center"
          >
            <h1
              class="text-base md:text-lg lg:text-[22px] font-[600] text-gray-800 mb-3 md:mb-4 lg:mb-[15px] mt-8 md:mt-10 lg:mt-[30px]"
            >
              Quảng cáo trực tiếp
            </h1>
            <p class="text-xs md:text-sm lg:text-[15px] text-gray-500 font-[400] mb-4 md:mb-5">
              Chúng tôi tạo triển khai các chiến dịch quảng cáo trực tuyến hiệu
              quả, từ quảng cáo trên mạng xã hội đến Google Ads.
            </p>
            <Button
              variant="outline"
              class="border-none bg-primaryColor text-white mt-3 md:mt-4 lg:mt-[15px] text-sm md:text-base"
            >
              Xem thêm
            </Button>
            <div
              class="bg-primaryColor absolute top-[-20px] md:top-[-25px] lg:top-[-30px] left-[50%] -translate-x-1/2 p-3 md:p-4 lg:p-[18px] rounded-full"
            >
              <CalendarDays class="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

