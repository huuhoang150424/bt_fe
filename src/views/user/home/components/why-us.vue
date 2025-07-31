<script setup>
import { Button } from '@/components/ui/button';
</script>

<template>
  <section
    class="bg-[url('/why_bg_2.jpg')] w-full h-[950px] bg-cover bg-no-repeat mt-[-100px] wrapper"
  >
    <div class="flex justify-between pt-[300px]">
      <div class="w-[50%]">
        <div class="relative">
          <h1
            class="text-[68px] font-[900]"
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
        <h1 class="text-[36px] text-gray-800 font-[700]">
          Hơn 24 năm kinh nghiệm dịch vụ
          <span class="text-primaryColor">Marketing</span>
        </h1>
        <p class="my-[20px] text-gray-500 font-[400]">
          Chúng tôi chia sẻ những dự án thành công, tăng trưởng doanh số, tăng
          cường nhận diện thương hiệu, tương tác khách hàng và những đánh giá tích
          cực từ khách hàng. Điều này giúp khách hàng tiềm năng hiểu rõ hơn về khả
          năng và sự chuyên nghiệp của chúng tôi trong việc cung cấp các dịch vụ
          tiếp thị chất lượng cao.
        </p>
        <div class="flex items-center gap-4">
          <div
            v-for="i in 2"
            :key="i"
            class="flex items-center gap-4"
          >
            <div class="border-[5px] border-primaryColor rounded-[100%] px-[9px] py-[11px]">
              <div class="px-[9px] py-[14px] bg-white rounded-[100%]">
                <span class="text-gray-800 font-[600] text-[28px]">90%</span>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <h2 class="text-[20px] font-[700] text-gray-800">
                Dự án thành công
              </h2>
              <p class="text-[15px] font-[400] text-gray-500">
                Chiến lược tiếp thị áp dụng và kết quả đạt được
              </p>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          class="border-none bg-primaryColor text-white mt-[25px]"
        >
          Đọc thêm
        </Button>
      </div>
      <div class="relative w-[47%]">
        <img src="../../../../../public/why_2_1.png" alt="" />
        <div
          class="absolute top-[20%] left-[50%] translate-x-[-20%] border-[10px] translate-y-[-50%] text-white text-center px-[18px] py-[34px] bg-primaryColor rounded-[100%]"
        >
          <h1 class="text-[26px] font-[700]">10k+</h1>
          <span>Active Clients</span>
        </div>
      </div>
    </div>
  </section>
</template>
