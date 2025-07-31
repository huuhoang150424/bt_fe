<script setup>
  import { Button } from '@/components/ui/button';
  import { CalendarDays } from 'lucide-vue-next';
</script>

<template>
  <section class="px-[30px]">
    <div
      class="relative bg-[url('/service_bg_2.jpg')] w-full h-[480px] bg-cover bg-no-repeat rounded-[12px] px-[80px]"
    >
      <div class="flex items-center justify-between py-[30px]">
        <div class="w-[50%]">
          <div class="relative">
            <h1
              class="text-[68px] font-[900]"
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
            <div class="flex items-center gap-2 absolute top-[55%] left-2">
              <img
                src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
                alt=""
              />
              <h3 class="text-[20px] font-[600] text-primaryColor">
                giới thiệu giải pháp
              </h3>
            </div>
          </div>
          <div>
            <h1 class="text-[40px] text-white font-[700] mb-[20px]">
              Thu hút sự chú ý và thúc đẩy chuyển đổi với
              <span class="text-primaryColor">Marketing</span>
            </h1>
          </div>
        </div>
        <div class="w-[40%] flex justify-end">
          <Button
            variant="outline"
            class="border-none bg-primaryColor text-white mt-[25px]"
          >
            Xem tất cả dịch vụ
          </Button>
        </div>
      </div>
      <div
        class="absolute top-[70%] mx-auto left-[50%] translate-x-[-50%] w-[85%]"
      >
        <ul class="grid grid-cols-4 grid-rows-1 gap-10">
          <li
            v-for="i in 4"
            :key="i"
            class="relative bg-white p-[30px] rounded-[12px] shadow-lg text-center"
          >
            <h1
              class="text-[22px] font-[600] text-gray-800 mb-[15px] mt-[30px]"
            >
              Quảng cáo trực tiếp
            </h1>
            <p class="text-gray-500 text-[15px] font-[400] mb-5">
              Chúng tôi tạo triển khai các chiến dịch quảng cáo trực tuyến hiệu
              quả, từ quảng cáo trên mạng xã hội đến Google Ads.
            </p>
            <Button
              variant="outline"
              class="border-none bg-primaryColor text-white mt-[15px]"
            >
              Xem thêm
            </Button>
            <div
              class="bg-primaryColor absolute top-[-30px] left-[50%] translate-x-[-50%] px-[18px] py-[18px] rounded-[100%]"
            >
              <CalendarDays class="text-white w-6 h-6" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
