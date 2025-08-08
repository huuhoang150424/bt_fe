<script setup>
import { Button } from '@/components/ui/button';
import { Database } from 'lucide-vue-next';
</script>

<template>
  <section
    class="bg-[url('https://future-tech.monamedia.net/wp-content/uploads/2024/01/appointment_bg_1-1.jpg')] bg-cover bg-no-repeat flex flex-col items-center py-8 md:py-12 lg:py-[50px]"
  >
    <div class="relative">
      <h1
        class="text-4xl sm:text-5xl md:text-[58px] font-[900]"
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
        Update
      </h1>
      <div class="flex items-center gap-2 absolute top-[55%] left-2 w-full sm:w-[200px]">
        <img
          src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
          alt=""
          class="w-6 h-6 md:w-8 md:h-8"
        />
        <h3 class="text-base md:text-xl font-[600] text-primaryColor">Tin tức & Blog</h3>
      </div>
    </div>
    <h1 class="text-2xl sm:text-3xl md:text-[36px] text-gray-800 font-[700] mt-4 md:mt-6">
      Cập nhật
      <span class="text-primaryColor"> tin tức</span>
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 wrapper mt-8 md:mt-10 lg:mt-[50px] mb-4 md:mb-6 lg:mb-[20px]">
      <div
        v-for="i in 3"
        :key="i"
        class="bg-white p-4 md:p-6 lg:p-[30px] rounded-[12px] shadow-lg flex flex-col gap-4"
      >
        <div class="w-full h-[150px] sm:h-[180px] md:h-[200px] rounded-[12px] relative">
          <img
            src="https://future-tech.monamedia.net/wp-content/uploads/2023/02/blog-s-1-4.jpg"
            alt=""
            class="w-full h-full object-cover rounded-[12px]"
          />
          <div
            class="absolute top-[85%] sm:top-[88%] md:top-[91%] left-1/2 -translate-x-1/2 bg-primaryColor px-2 md:px-3 lg:px-[12px] py-1 md:py-[4px] rounded-[8px] border border-gray-50"
          >
            <span class="text-white text-xs md:text-sm">UI/UX Design</span>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row items-center mt-4 md:mt-5 lg:mt-[20px] gap-4">
          <div class="flex items-center gap-2">
            <Database :size="14" md:size="16" class="stroke-primaryColor" />
            <span class="text-gray-500 text-xs md:text-[15px] font-[500]">
              11/10/2024
            </span>
          </div>
          <div class="flex items-center gap-2">
            <Database :size="14" md:size="16" class="stroke-primaryColor" />
            <span class="text-gray-500 text-xs md:text-[15px] font-[500]">
              11/10/2024
            </span>
          </div>
        </div>
        <h2 class="text-base md:text-lg lg:text-[20px] text-gray-800 font-[700]">Tiêu đề bài viết</h2>
        <Button
          variant="outline"
          class="w-auto border-none bg-none text-primaryColor shadow-none hover:bg-transparent hover:text-gray-700 text-sm md:text-[16px] font-[500] transition-all duration-200 ease-in-out"
        >
          Xem thêm
        </Button>
      </div>
    </div>
  </section>
</template>

