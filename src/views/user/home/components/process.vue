<script setup></script>

<template>
  <section
    class="bg-[url('/why_bg_2.jpg')] w-full h-[700px] bg-cover bg-no-repeat wrapper"
  >
    <div class="flex flex-col justify-center items-center">
      <div class="relative mt-[15px]">
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
          PROCESS
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
      <h1 class="text-[38px] text-gray-800 font-[700] text-center mb-[45px]">
        Quy trình làm việc <span class="text-primaryColor">hiệu quả</span>
      </h1>
      <ul class="grid grid-cols-4 grid-rows-1 gap-20 mb-[150px]">
        <li
          v-for="i in 4"
          :key="i"
          class="relative shadow-md rounded-[12px] p-[30px] bg-white flex flex-col items-center gap-4"
        >
          <div
            class="absolute top-[-15%] left-[-15%] bg-primaryColor text-white rounded-[100%] px-[12px] py-[4px]"
          >
            <span class="text-[40px] font-[700]">{{
              String(i).padStart(2, '0')
            }}</span>
          </div>
          <img
            :src="`https://future-tech.monamedia.net/wp-content/uploads/2024/02/process_card_${i}.svg`"
            alt=""
          />
          <h2 class="text-[18px] text-gray-800 font-[700]">
            Phân tích yêu cầu
          </h2>
          <p class="text-[14px] text-gray-500 font-[400] text-center">
            Chúng tôi sẽ thảo luận về mục tiêu, đối tượng khách hàng, thông điệp
            cần truyền tải và yêu cầu đặc biệt khác.
          </p>
        </li>
      </ul>
      <div
        class="bg-[#141d38] w-full flex items-center justify-center px-[40px] h-[200px]"
      >
        <ul class="flex items-center w-full justify-between">
          <li v-for="i in 5" :key="i">
            <img
              :src="`https://future-tech.monamedia.net/wp-content/uploads/2024/02/brand_2_${i + 1}.png`"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
