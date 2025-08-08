<script setup>
import { Button } from '@/components/ui/button';
</script>

<template>
  <section class="w-full wrapper flex flex-col md:flex-row justify-between py-8 md:py-16">
    <!-- Image Section -->
    <div class="relative w-full md:w-[44%] mb-8 md:mb-0">
      <img src="/about_3_1.png" alt="About Us" class="w-full h-auto object-cover" />
      <div
        class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 md:p-5 bg-white rounded-full cursor-pointer hover:bg-primaryColor transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="w-6 h-6 md:w-8 md:h-8 text-primaryColor group-hover:text-white transition-all duration-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>
      </div>
    </div>
    <!-- Content Section -->
    <div class="w-full md:w-[50%]">
      <div>
        <!-- Title Section -->
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
            About Us
          </h1>
          <div class="flex items-center gap-2 absolute top-[55%] left-2">
            <img
              src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
              alt="Title Shape"
              class="w-6 h-6 md:w-8 md:h-8"
            />
            <h3 class="text-base md:text-xl font-[600] text-primaryColor">
              giới thiệu giải pháp
            </h3>
          </div>
        </div>
        <!-- Description Section -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-[700] mb-4 md:mb-5">
            Phát triển bằng các chiến <br class="hidden md:block" />
            lược <span class="text-primaryColor">Marketing</span>
          </h1>
          <span class="text-gray-500 text-sm md:text-base font-[400] block my-4 md:my-5">
            Với sự kết hợp giữa sự sáng tạo, chuyên môn và dữ liệu, chúng tôi
            tạo ra những chiến lược Marketing độc đáo và hiệu quả.
          </span>
        </div>
        <!-- Tabs Section -->
        <div class="mt-8 md:mt-10 w-full shadow-lg">
          <ul class="flex items-center">
            <li
              class="w-1/2 text-center bg-primaryColor text-white py-2 md:py-3 text-sm md:text-lg font-[600]"
            >
              Sự khác biệt
            </li>
            <li
              class="w-1/2 text-center bg-[#141d38] text-white py-2 md:py-3 text-sm md:text-lg font-[600]"
            >
              Giá trị mang đến
            </li>
          </ul>
          <div class="p-4 md:p-6">
            <h1 class="text-gray-800 font-[600] text-lg md:text-xl lg:text-[22px]">
              Chúng tôi lắng nghe và hiểu rõ mục tiêu kinh doanh của bạn để xây
              dựng chiến lược
            </h1>
            <p class="text-gray-500 text-xs md:text-sm lg:text-[15px] mt-3 md:mt-4 font-[400]">
              Đội ngũ chuyên gia của chúng tôi sở hữu kiến thức sâu rộng và kinh
              nghiệm thực tế trong lĩnh vực Marketing. Chúng tôi luôn cập nhật
              với những xu hướng mới nhất và công nghệ tiên tiến nhất, giúp bạn
              tận dụng tối đa các cơ hội tiếp thị hiện đại. Chúng tôi cam kết
              mang đến cho bạn những giải pháp tiếp thị sáng tạo và hiệu quả.
            </p>
            <Button
              variant="outline"
              class="border-none bg-primaryColor text-white mt-4 md:mt-6 text-sm md:text-base"
            >
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

