<script setup>
import { MessageSquare } from 'lucide-vue-next';
</script>

<template>
  <section
    class="bg-[url('/testi_bg_3.jpg')] w-full bg-cover bg-no-repeat wrapper flex flex-col items-center justify-center py-8 md:py-12 lg:py-16"
  >
    <div class="px-4 md:px-6 lg:px-[30px] flex flex-col items-center justify-center">
      <div class="relative mt-4 md:mt-6 lg:mt-[15px] w-full sm:w-auto">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-[78px] font-[900] text-center"
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
          PROCESS
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
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[34px] font-[700] text-white mt-4 md:mt-6 text-center">
        Những đánh giá <span class="text-primaryColor">tích cực</span>
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 my-6 md:my-8 lg:my-[40px] w-full">
        <div
          v-for="i in 2"
          :key="i"
          class="bg-white p-4 md:p-6 lg:p-[30px] rounded-[12px] shadow-lg flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div class="w-full sm:w-[30%] relative rounded-[12px]">
            <img
              src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/testi_2_3.jpg"
              alt=""
              class="w-full h-[150px] sm:h-[200px] md:h-[250px] object-cover rounded-[12px]"
            />
            <div
              class="absolute p-2 md:p-3 lg:p-[12px] bg-primaryColor rounded-full top-[80%] sm:top-[85%] right-[10%] sm:right-[30%]"
            >
              <MessageSquare :size="20" md:size="24" lg:size="32" class="text-white" />
            </div>
          </div>
          <div class="p-4 md:p-6 lg:p-[30px] w-full sm:w-[68%] flex flex-col justify-between gap-4 md:gap-5">
            <p class="text-xs md:text-sm lg:text-[15px] text-gray-400 font-[500]">
              Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây dựng
              một chiến lược marketing toàn diện và hiệu quả cho doanh nghiệp
              của tôi.
            </p>
            <div class="w-full h-[1px] bg-gray-200"></div>
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div class="flex flex-col gap-2">
                <h3 class="text-base md:text-xl lg:text-[28px] font-[600] text-gray-800">
                  Linh Linh
                </h3>
                <span class="text-xs md:text-sm lg:text-[15px] text-gray-400 font-[500]">
                  Khách hàng
                </span>
              </div>
              <ul class="flex items-center gap-0">
                <li v-for="j in 5" :key="j">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primaryColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.563.563 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
