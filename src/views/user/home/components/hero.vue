<script setup>
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-vue-next';
</script>

<template>
  <section class="w-full bg-[#f0f4ff] wrapper flex flex-col md:flex-row justify-between gap-4 pt-16 md:pt-20 lg:pt-[140px] pb-8 md:pb-12">
    <div class="w-full md:w-[50%]">
      <p class="text-base md:text-lg lg:text-[18px] text-primaryColor font-[700]">
        GIẢI PHÁP MARKETING MẠNH MẼ
      </p>
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-[700] text-gray-800 leading-tight md:leading-[60px] mb-4 md:mb-5 lg:mb-[20px]">
        Nâng Tầm Doanh Nghiệp <br class="hidden md:block" />
        Với Các Chiến Lược <br class="hidden md:block" />
        Marketing Đột Phá
      </h1>
      <p class="text-sm md:text-base lg:text-[15px] text-gray-500 font-[500] mt-3 md:mt-4">
        Với dịch vụ Marketing của chúng tôi, bạn sẽ tận hưởng sự thăng hoa của
        doanh nghiệp. Chúng tôi cung cấp các giải pháp Marketing mạnh mẽ để gia
        tăng hiệu quả kinh doanh của bạn.
      </p>
      <div class="flex flex-col sm:flex-row items-center gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8 lg:mt-[30px]">
        <Button
          variant="outline"
          class="border-none bg-primaryColor text-white rounded-[8px] px-4 md:px-6 py-2 md:py-3 hover:bg-primaryColor/90 transition-all duration-300 text-sm md:text-base"
        >
          <div class="flex items-center gap-2">
            <span>TÌM HIỂU THÊM</span>
            <ArrowRight class="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-[15px]" />
          </div>
        </Button>
        <a href="#" class="flex items-center gap-3 md:gap-4">
          <div
            class="p-3 md:p-[15px] rounded-full flex items-center bg-primaryColor"
          >
            <Play class="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <div>
            <p class="text-base md:text-lg lg:text-[18px] text-gray-800 font-[700]">Xem giới thiệu</p>
            <p class="text-sm md:text-[15px] text-gray-500 font-[400] mt-1">Đăng ký ngay</p>
          </div>
        </a>
      </div>
    </div>
    <div class="w-full md:w-[50%] mt-6 md:mt-0">
      <img
        src="/banner.png"
        alt="Man in suit pointing"
        class="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />
    </div>
  </section>
</template>


