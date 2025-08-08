<script setup>
import { Plus } from 'lucide-vue-next';
</script>

<template>
  <section class="wrapper flex flex-col items-center justify-center py-8 md:py-12 lg:py-16">
    <div class="relative">
      <div
        class="absolute z-[-1] bg-[url('/tech_shape_5.png')] w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-no-repeat"
      ></div>
      <div class="flex items-center gap-2 mt-[100px] sm:mt-[140px] md:mt-[160px] lg:mt-[190px]">
        <img
          src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
          alt=""
          class="w-6 h-6 md:w-8 md:h-8"
        />
        <h3 class="text-base md:text-xl font-[600] text-primaryColor">
          đội ngũ chuyên gia
        </h3>
      </div>
    </div>
    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-[700] text-gray-800 mt-4 md:mt-6">
      Giới thiệu đội ngũ <span class="text-primaryColor">chuyên nghiệp</span>
    </h1>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 my-6 md:my-8 lg:my-[50px] w-full">
      <li
        v-for="i in 3"
        :key="i"
        class="relative bg-white rounded-[12px] shadow-xl overflow-hidden p-4 md:p-5 lg:p-[20px] flex flex-col items-center"
      >
        <div class="rounded-[12px] w-full">
          <img
            class="rounded-[12px] object-cover w-full h-[200px] sm:h-[250px] md:h-[300px]"
            src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/team_3_2.jpg"
            alt=""
          />
        </div>
        <div
          class="absolute top-[75%] sm:top-[80%] right-[5%] sm:right-[2%] flex items-center justify-center p-2 md:p-3 lg:p-[4px] bg-primaryColor rounded-full"
        >
          <Plus :size="24" md:size="28" lg:size="32" class="text-white" />
        </div>
        <h1 class="text-base md:text-lg lg:text-[22px] font-[700] text-gray-800 mt-3 md:mt-4">
          Xuân Trung
        </h1>
        <p class="text-sm md:text-base lg:text-[16px] text-primaryColor">Founder & CEO</p>
      </li>
    </ul>
  </section>
</template>
