<script setup>
  import { Button } from '@/components/ui/button';
  import { ArrowRight, Play } from 'lucide-vue-next';
</script>

<template>
  <section class="w-full bg-[#f0f4ff] wrapper flex justify-between pt-[140px]">
    <div class="w-[50%]">
      <p class="text-[18px] text-primaryColor font-[700]">
        GIẢI PHÁP MARKETING MẠNH MẼ
      </p>
      <h1 class="text-[48px] font-[700] text-gray-800 leading-[60px] mb-[20px]">
        Nâng Tầm Doanh Nghiệp <br />
        Với Các Chiến Lược <br />
        Marketing Đột Phá
      </h1>
      <p class="text-gray-500 text-[15px] mt-[15px] font-[500]">
        Với dịch vụ Marketing của chúng tôi, bạn sẽ tận hưởng sự thăng hoa của
        doanh nghiệp. Chúng tôi cung cấp các giải pháp Marketing mạnh mẽ để gia
        tăng hiệu quả kinh doanh của bạn.
      </p>
      <div class="flex items-center gap-8 mt-[30px]">
        <Button
          variant="outline"
          class="border-none bg-primaryColor text-white rounded-[8px] px-6 py-3 hover:bg-primaryColor/90 transition-all duration-300"
        >
          <div class="flex items-center gap-2">
            <span>TÌM HIỂU THÊM</span>
            <ArrowRight class="w-5 h-5 ml-[15px]" />
          </div>
        </Button>
        <a href="#" class="flex items-center gap-4">
          <div
            class="px-[15px] py-[15px] rounded-[100%] flex items-center gap-2 bg-primaryColor"
          >
            <Play class="text-white" />
          </div>
          <div>
            <p class="text-[18px] text-gray-800 font-[700]">Xem giới thiệu</p>
            <p class="text-[15px] text-gray-500 font-[400] mt-[2px]">
              Đăng ký ngay
            </p>
          </div>
        </a>
      </div>
    </div>
    <div class="w-[50%]">
      <img
        src="/banner.png"
        alt="Man in suit pointing"
        class="w-full h-[600px] object-cover"
      />
    </div>
  </section>
</template>
