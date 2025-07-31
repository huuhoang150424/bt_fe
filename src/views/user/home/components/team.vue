<script setup>
import { Plus } from 'lucide-vue-next';
</script>

<template>
  <section class="wrapper flex flex-col items-center justify-center">
    <div class="relative">
      <div
        class="absolute z-[-1] bg-[url('/tech_shape_5.png')] w-full h-[600px] bg-cover bg-no-repeat"
      ></div>
      <div class="flex items-center gap-2 mt-[190px]">
        <img
          src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
          alt=""
        />
        <h3 class="text-[20px] font-[600] text-primaryColor">
          đội ngũ chuyên gia
        </h3>
      </div>
    </div>
    <h1 class="text-[40px] font-[700] text-gray-800">
      Giới thiệu đội ngũ <span class="text-primaryColor">chuyên nghiệp</span>
    </h1>
    <ul class="grid grid-cols-3 grid-rows-1 gap-4 my-[50px] w-full">
      <li
        v-for="i in 3"
        :key="i"
        class="relative bg-white rounded-[12px] shadow-xl overflow-hidden p-[20px] flex flex-col items-center"
      >
        <div class="rounded-[12px]">
          <img
            class="rounded-[12px] object-cover"
            src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/team_3_2.jpg"
            alt=""
          />
        </div>
        <div
          class="top-[80%] right-[0%] flex items-center justify-center px-[4px] py-[4px] bg-primaryColor rounded-[100%]"
        >
          <Plus :size="32" class="text-white" />
        </div>
        <h1 class="text-gray-800 text-[22px] font-[700]">Xuân Trung</h1>
        <p class="text-[16px] text-primaryColor">Founder & CEO</p>
      </li>
    </ul>
  </section>
</template>
