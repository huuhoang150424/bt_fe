<script setup>
import { Button } from '@/components/ui/button';
</script>

<template>
  <section
    class="bg-[url('/why_bg_2.jpg')] w-full h-auto bg-cover bg-no-repeat mt-[-50px] sm:mt-[-75px] lg:mt-[-100px] wrapper py-8 md:py-12 lg:py-16"
  >
    <div class="flex flex-col md:flex-row justify-between gap-4 pt-16 sm:pt-20 md:pt-24 lg:pt-[300px]">
      <div class="w-full md:w-[50%]">
        <div class="relative">
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-[900] text-center md:text-left"
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
            CHOOSE US
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
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] text-gray-800 font-[700] mt-4 md:mt-6 text-center md:text-left">
          Hơn 24 năm kinh nghiệm dịch vụ
          <span class="text-primaryColor">Marketing</span>
        </h1>
        <p class="my-4 md:my-5 lg:my-[20px] text-gray-500 font-[400] text-sm md:text-base text-center md:text-left">
          Chúng tôi chia sẻ những dự án thành công, tăng trưởng doanh số, tăng
          cường nhận diện thương hiệu, tương tác khách hàng và những đánh giá
          tích cực từ khách hàng. Điều này giúp khách hàng tiềm năng hiểu rõ hơn
          về khả năng và sự chuyên nghiệp của chúng tôi trong việc cung cấp các
          dịch vụ tiếp thị chất lượng cao.
        </p>
        <div class="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
          <div v-for="i in 2" :key="i" class="flex items-center gap-3 md:gap-4">
            <div
              class="border-[3px] md:border-[4px] lg:border-[5px] border-primaryColor rounded-full p-1 md:p-2"
            >
              <div class="p-2 md:p-3 lg:p-[9px] bg-white rounded-full">
                <span class="text-gray-800 font-[600] text-lg md:text-xl lg:text-[28px]">90%</span>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <h2 class="text-base md:text-lg lg:text-[20px] font-[700] text-gray-800">
                Dự án thành công
              </h2>
              <p class="text-xs md:text-sm lg:text-[15px] font-[400] text-gray-500">
                Chiến lược tiếp thị áp dụng và kết quả đạt được
              </p>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          class="border-none bg-primaryColor text-white mt-4 md:mt-6 lg:mt-[25px] text-sm md:text-base"
        >
          Đọc thêm
        </Button>
      </div>
      <div class="relative w-full md:w-[47%] mt-6 md:mt-0">
        <img src="/why_2_1.png" alt="" class="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover" />
        <div
          class="absolute top-[15%] sm:top-[20%] left-[50%] -translate-x-[20%] border-[6px] md:border-[8px] lg:border-[10px] translate-y-[-50%] text-white text-center p-2 md:p-3 lg:p-[18px] lg:py-[34px] bg-primaryColor rounded-full"
        >
          <h1 class="text-base md:text-lg lg:text-[26px] font-[700]">10k+</h1>
          <span class="text-xs md:text-sm">Active Clients</span>
        </div>
      </div>
    </div>
  </section>
</template>

