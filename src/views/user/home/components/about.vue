<script setup>
  import { Button } from '@/components/ui/button';
</script>

<template>
  <section class="w-full wrapper flex justify-between py-16">
    <div class="relative w-[44%]">
      <img src="/about_3_1.png" alt="" />
      <div
        class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-[20px] py-[20px] bg-white rounded-[50%] cursor-pointer hover:bg-primaryColor transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="size-6 text-primaryColor group-hover:text-white transition-all duration-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>
      </div>
    </div>
    <div class="w-[50%]">
      <div>
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
          <h1 class="text-[40px] text-gray-800 font-[700] mb-[20px]">
            Phát triển bằng các chiến <br />
            lược <span class="text-primaryColor">Marketing</span>
          </h1>
          <span class="text-gray-500 font-[400] my-[20px]"
            >Với sự kết hợp giữa sự sáng tạo, chuyên môn và dữ liệu, chúng tôi
            tạo ra những chiến lược Marketing độc đáo và hiệu quả.</span
          >
        </div>
        <div class="mt-[40px] w-full shadow-lg">
          <ul class="flex items-center">
            <li
              class="w-[50%] text-center bg-primaryColor text-white py-[10px]"
            >
              <span class="text-[18px] font-[600]">Sự khác biệt</span>
            </li>
            <li class="w-[50%] text-center bg-[#141d38] text-white py-[10px]">
              <span class="text-[18px] font-[600]">Giá trị mang đến</span>
            </li>
          </ul>
          <div class="p-[25px]">
            <h1 class="text-gray-800 font-[600] text-[22px]">
              Chúng tôi lắng nghe và hiểu rõ mục tiêu kinh doanh của bạn để xây
              dựng chiến lược
            </h1>
            <p class="text-gray-500 text-[15px] mt-[15px] font-[400]">
              Đội ngũ chuyên gia của chúng tôi sở hữu kiến thức sâu rộng và kinh
              nghiệm thực tế trong lĩnh vực Marketing. Chúng tôi luôn cập nhật
              với những xu hướng mới nhất và công nghệ tiên tiến nhất, giúp bạn
              tận dụng tối đa các cơ hội tiếp thị hiện đại. Chúng tôi cam kết
              mang đến cho bạn những giải pháp tiếp thị sáng tạo và hiệu quả.
            </p>
            <Button
              variant="outline"
              class="border-none bg-primaryColor text-white mt-[25px]"
            >
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
