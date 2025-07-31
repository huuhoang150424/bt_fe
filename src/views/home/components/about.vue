<script setup>
  import { Button } from '@/components/ui/button';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const goToIntroduce = () => {
    router.push('/introduce');
  };
</script>

<template>
  <section
    class="w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 flex flex-col lg:flex-row items-center gap-10"
  >
    <!-- Hình ảnh -->
    <div class="relative w-full lg:w-1/2 flex justify-center">
      <img
        src="../../../../public/about_3_1.png"
        alt="About Image"
        class="w-full max-w-[500px] object-cover rounded-md shadow-md"
      />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-5 bg-white rounded-full cursor-pointer hover:bg-primaryColor transition-all duration-300 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="w-6 h-6 text-primaryColor group-hover:text-white transition-all duration-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>
      </div>
    </div>

    <!-- Nội dung -->
    <div class="w-full lg:w-1/2 space-y-6 text-center">
      <!-- Tiêu đề -->
      <h1
        class="text-[40px] md:text-[48px] lg:text-[68px] font-black leading-tight"
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

      <!-- Sub tiêu đề -->
      <div class="flex justify-center items-center gap-2">
        <img
          src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
          alt=""
          class="w-6 h-6 md:w-8 md:h-8"
        />
        <h3 class="text-lg md:text-xl font-semibold text-primaryColor">
          giới thiệu giải pháp
        </h3>
      </div>

      <!-- Heading chính -->
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
        Phát triển bằng các chiến lược <br />
        <span class="text-primaryColor">Marketing</span>
      </h2>

      <!-- Mô tả ngắn -->
      <p class="text-gray-500 text-sm md:text-base px-4 md:px-10">
        Với sự kết hợp giữa sáng tạo, chuyên môn và dữ liệu, chúng tôi tạo ra
        những chiến lược Marketing độc đáo và hiệu quả.
      </p>

      <!-- Tabs -->
      <div class="w-full shadow-lg rounded-md overflow-hidden mt-6">
        <ul class="flex">
          <li class="w-1/2 text-center bg-primaryColor text-white py-4">
            <span class="text-lg font-semibold">Sự khác biệt</span>
          </li>
          <li class="w-1/2 text-center bg-[#141d38] text-white py-4">
            <span class="text-lg font-semibold">Giá trị mang đến</span>
          </li>
        </ul>
        <div class="p-6 text-left text-gray-700">
          <h3 class="text-xl font-semibold mb-2">
            Chúng tôi lắng nghe và hiểu rõ mục tiêu kinh doanh của bạn để xây
            dựng chiến lược
          </h3>
          <p class="text-sm md:text-base">
            Đội ngũ chuyên gia của chúng tôi sở hữu kiến thức sâu rộng và kinh
            nghiệm thực tế trong lĩnh vực Marketing. Chúng tôi luôn cập nhật các
            xu hướng mới và công nghệ tiên tiến nhất, giúp bạn tận dụng tối đa
            cơ hội tiếp thị hiện đại.
          </p>
        </div>
      </div>

      <!-- Button căn giữa và to -->
      <div class="w-full flex justify-center mt-6">
        <Button
          variant="outline"
          @click="goToIntroduce"
          class="bg-primaryColor text-white text-lg md:text-xl px-8 py-4 rounded-md hover:opacity-90 transition-all"
        >
          Tìm hiểu thêm
        </Button>
      </div>
    </div>
  </section>
</template>
