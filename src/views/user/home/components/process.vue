<script setup></script>

<template>
  <section
    class="bg-[url('/why_bg_2.jpg')] w-full h-auto bg-cover bg-no-repeat wrapper py-8 md:py-12 lg:py-16"
  >
    <div class="flex flex-col justify-center items-center">
      <div class="relative mt-4 md:mt-6 lg:mt-[15px]">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-[900] text-center"
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
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-gray-800 font-[700] text-center mt-4 md:mt-6 mb-6 md:mb-8 lg:mb-[45px]">
        Quy trình làm việc <span class="text-primaryColor">hiệu quả</span>
      </h1>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-20 mb-8 md:mb-12 lg:mb-[150px] w-full">
        <li
          v-for="i in 4"
          :key="i"
          class="relative shadow-md rounded-[12px] p-4 md:p-6 lg:p-[30px] bg-white flex flex-col items-center gap-3 md:gap-4"
        >
          <div
            class="absolute top-[-10%] sm:top-[-12%] lg:top-[-15%] left-[-10%] sm:left-[-12%] lg:left-[-15%] bg-primaryColor text-white rounded-full px-2 md:px-3 lg:px-[12px] py-1 md:py-2 lg:py-[4px]"
          >
            <span class="text-2xl md:text-3xl lg:text-[40px] font-[700]">{{
              String(i).padStart(2, '0')
            }}</span>
          </div>
          <img
            :src="`https://future-tech.monamedia.net/wp-content/uploads/2024/02/process_card_${i}.svg`"
            alt=""
            class="w-12 h-12 md:w-16 md:h-16"
          />
          <h2 class="text-base md:text-lg lg:text-[18px] text-gray-800 font-[700] text-center">
            Phân tích yêu cầu
          </h2>
          <p class="text-xs md:text-sm lg:text-[14px] text-gray-500 font-[400] text-center">
            Chúng tôi sẽ thảo luận về mục tiêu, đối tượng khách hàng, thông điệp
            cần truyền tải và yêu cầu đặc biệt khác.
          </p>
        </li>
      </ul>
      <div
        class="bg-[#141d38] w-full flex items-center justify-center px-4 md:px-6 lg:px-[40px] h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px]"
      >
        <ul class="flex flex-col sm:flex-row items-center w-full justify-between gap-4 sm:gap-0">
          <li v-for="i in 5" :key="i" class="flex justify-center">
            <img
              :src="`https://future-tech.monamedia.net/wp-content/uploads/2024/02/brand_2_${i + 1}.png`"
              alt=""
              class="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] h-auto"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
