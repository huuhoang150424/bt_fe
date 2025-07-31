<script setup>
  import { Button } from '@/components/ui/button';
  import { ArrowRight, Play } from 'lucide-vue-next';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const goToIntroduce = () => {
    router.push('/introduce');
  };
</script>

<template>
  <section
    class="w-full bg-[#f0f4ff] px-4 md:px-8 lg:px-16 py-[100px] md:py-[140px] flex flex-col-reverse lg:flex-row items-center justify-between gap-10"
  >
    <!-- Left content -->
    <div class="w-full lg:w-1/2 text-center lg:text-left">
      <!-- Tagline -->
      <p class="text-[16px] md:text-[18px] text-primaryColor font-bold mb-2">
        GIẢI PHÁP MARKETING MẠNH MẼ
      </p>

      <!-- Main Heading -->
      <h1
        class="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-gray-800 leading-tight mb-4"
      >
        Nâng Tầm Doanh Nghiệp <br />
        Với Các Chiến Lược <br />
        Marketing Đột Phá
      </h1>

      <!-- Subtext -->
      <p
        class="text-gray-500 text-[14px] md:text-[15px] font-medium max-w-[600px] mx-auto lg:mx-0"
      >
        Với dịch vụ Marketing của chúng tôi, bạn sẽ tận hưởng sự thăng hoa của
        doanh nghiệp. Chúng tôi cung cấp các giải pháp Marketing mạnh mẽ để gia
        tăng hiệu quả kinh doanh của bạn.
      </p>

      <!-- Action Buttons -->
      <div
        class="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8"
      >
        <!-- Tìm hiểu thêm -->
        <Button
          variant="outline"
          @click="goToIntroduce"
          class="bg-primaryColor text-white rounded-[8px] px-6 py-3 text-[15px] font-semibold shadow-md hover:scale-105 active:scale-95 transition-transform duration-300"
        >
          <div class="flex items-center gap-2">
            <span>TÌM HIỂU THÊM</span>
            <ArrowRight class="w-5 h-5" />
          </div>
        </Button>

        <!-- Xem giới thiệu -->
        <a
          href="https://youtu.be/7kO_ALcwNAw?si=JqEhK8qy13yCAEiX"
          class="flex items-center gap-4 group"
        >
          <div class="relative w-[60px] h-[60px]">
            <div
              class="absolute inset-0 rounded-full bg-primaryColor animate-ping opacity-70"
            ></div>
            <div
              class="relative z-10 w-full h-full rounded-full bg-primaryColor flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
            >
              <Play class="text-white w-6 h-6" />
            </div>
          </div>

          <!-- Text -->
          <div class="text-left">
            <p
              class="text-[16px] md:text-[18px] text-gray-800 font-bold leading-tight"
            >
              Xem giới thiệu
            </p>
            <p class="text-[14px] text-gray-500 font-normal mt-[2px]">
              Đăng ký ngay
            </p>
          </div>
        </a>
      </div>
    </div>

    <!-- Banner Image (ẩn trên mobile/tablet) -->
    <div class="w-full flex justify-start lg:w-1/2 hidden lg:block">
      <img
        src="../../../../public/banner.png"
        alt="Banner"
        class="w-full h-[600px] object-cover rounded-md"
      />
    </div>
  </section>
</template>
