<script setup>
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-vue-next';
</script>

<template>
  <div class="">
    <section class="flex flex-col items-center justify-center py-4 md:py-8 lg:py-[30px] wrapper">
      <div class="relative">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-[900]" style="
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.0001) 0%,
          rgba(0, 0, 0, 1) 0.001%,
          rgba(0, 0, 0, 0) 80%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      ">
          SERVICES
        </h1>
        <div class="flex items-center gap-2 absolute top-[55%] left-4 sm:left-6 lg:left-10">
          <h3 class="text-base sm:text-lg md:text-xl lg:text-[20px] font-[600] text-primaryColor">
            Future Nội dung chất lượng
          </h3>
        </div>
      </div>
      <h1
        class="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-gray-800 font-[700] mb-6 md:mb-8 lg:mb-[40px] text-center">
        Thu Hút Sự Chú Ý Và Thúc Đẩy Chuyển Đổi Với
        <span class="text-primaryColor">Marketing</span>
      </h1>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-0">
        <li class="bg-white p-4 sm:p-6 lg:p-[30px] rounded-lg shadow-md relative overflow-hidden">
          <div class="flex justify-between items-center mb-2">
            <div class="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[100%] bg-[#e2e8fa]">
              <div class="px-2 py-2 sm:px-[14px] sm:py-[14px] bg-primaryColor rounded-[100%] absolute top-0 right-0">
              </div>
              <div
                class="px-1 py-1 sm:px-[6px] sm:py-[6px] bg-primaryColor rounded-[100%] absolute top-[80%] left-[10%]">
              </div>
            </div>
            <div class="text-5xl sm:text-7xl lg:text-[90px] font-[700] text-[#f6f8fd]">01</div>
          </div>
          <h2 class="text-lg sm:text-xl lg:text-[20px] text-gray-800 font-semibold mb-2">
            Chiến lược Marketing
          </h2>
          <p class="text-gray-500 text-sm sm:text-base">
            Chúng tôi cung cấp các giải pháp Marketing tùy chỉnh, phù hợp với
            nhu cầu và mục tiêu kinh doanh đặc thù của bạn.
          </p>
          <button
            class="mt-4 bg-[#e2e8fa] text-gray-700 border-none px-4 py-2 rounded-md hover:bg-[#d1d9f5] transition">
            Xem thêm
          </button>
          <!-- hiệu ứng phóng to -->
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[90%] right-0 rounded-[100%] bg-[#a494f8]">
          </div>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[75%] right-[-15%] rounded-[100%] bg-[#a494f8]">
          </div>
        </li>
        <li class="bg-white p-4 sm:p-6 lg:p-[30px] rounded-lg shadow-md relative overflow-hidden">
          <div class="flex justify-between items-center mb-2">
            <div class="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[100%] bg-[#e2e8fa]">
              <div class="px-2 py-2 sm:px-[14px] sm:py-[14px] bg-primaryColor rounded-[100%] absolute top-0 right-0">
              </div>
              <div
                class="px-1 py-1 sm:px-[6px] sm:py-[6px] bg-primaryColor rounded-[100%] absolute top-[80%] left-[10%]">
              </div>
            </div>
            <div class="text-5xl sm:text-7xl lg:text-[90px] font-[700] text-[#f6f8fd]">02</div>
          </div>
          <h2 class="text-lg sm:text-xl lg:text-[20px] text-gray-800 font-semibold mb-2">
            Chiến lược Marketing
          </h2>
          <p class="text-gray-500 text-sm sm:text-base">
            Chúng tôi cung cấp các giải pháp Marketing tùy chỉnh, phù hợp với
            nhu cầu và mục tiêu kinh doanh đặc thù của bạn.
          </p>
          <button
            class="mt-4 bg-[#e2e8fa] text-gray-700 border-none px-4 py-2 rounded-md hover:bg-[#d1d9f5] transition">
            Xem thêm
          </button>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[90%] right-0 rounded-[100%] bg-[#a494f8]">
          </div>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[75%] right-[-15%] rounded-[100%] bg-[#a494f8]">
          </div>
        </li>
        <li class="bg-white p-4 sm:p-6 lg:p-[30px] rounded-lg shadow-md relative overflow-hidden">
          <div class="flex justify-between items-center mb-2">
            <div class="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[100%] bg-[#e2e8fa]">
              <div class="px-2 py-2 sm:px-[14px] sm:py-[14px] bg-primaryColor rounded-[100%] absolute top-0 right-0">
              </div>
              <div
                class="px-1 py-1 sm:px-[6px] sm:py-[6px] bg-primaryColor rounded-[100%] absolute top-[80%] left-[10%]">
              </div>
            </div>
            <div class="text-5xl sm:text-7xl lg:text-[90px] font-[700] text-[#f6f8fd]">03</div>
          </div>
          <h2 class="text-lg sm:text-xl lg:text-[20px] text-gray-800 font-semibold mb-2">
            Chiến lược Marketing
          </h2>
          <p class="text-gray-500 text-sm sm:text-base">
            Chúng tôi cung cấp các giải pháp Marketing tùy chỉnh, phù hợp với
            nhu cầu và mục tiêu kinh doanh đặc thù của bạn.
          </p>
          <button
            class="mt-4 bg-[#e2e8fa] text-gray-700 border-none px-4 py-2 rounded-md hover:bg-[#d1d9f5] transition">
            Xem thêm
          </button>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[90%] right-0 rounded-[100%] bg-[#a494f8]">
          </div>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[75%] right-[-15%] rounded-[100%] bg-[#a494f8]">
          </div>
        </li>
        <li class="bg-white p-4 sm:p-6 lg:p-[30px] rounded-lg shadow-md relative overflow-hidden">
          <div class="flex justify-between items-center mb-2">
            <div class="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[100%] bg-[#e2e8fa]">
              <div class="px-2 py-2 sm:px-[14px] sm:py-[14px] bg-primaryColor rounded-[100%] absolute top-0 right-0">
              </div>
              <div
                class="px-1 py-1 sm:px-[6px] sm:py-[6px] bg-primaryColor rounded-[100%] absolute top-[80%] left-[10%]">
              </div>
            </div>
            <div class="text-5xl sm:text-7xl lg:text-[90px] font-[700] text-[#f6f8fd]">04</div>
          </div>
          <h2 class="text-lg sm:text-xl lg:text-[20px] text-gray-800 font-semibold mb-2">
            Chiến lược Marketing
          </h2>
          <p class="text-gray-500 text-sm sm:text-base">
            Chúng tôi cung cấp các giải pháp Marketing tùy chỉnh, phù hợp với
            nhu cầu và mục tiêu kinh doanh đặc thù của bạn.
          </p>
          <button
            class="mt-4 bg-[#e2e8fa] text-gray-700 border-none px-4 py-2 rounded-md hover:bg-[#d1d9f5] transition">
            Xem thêm
          </button>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[90%] right-0 rounded-[100%] bg-[#a494f8]">
          </div>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[75%] right-[-15%] rounded-[100%] bg-[#a494f8]">
          </div>
        </li>
        <li class="bg-white p-4 sm:p-6 lg:p-[30px] rounded-lg shadow-md relative overflow-hidden">
          <div class="flex justify-between items-center mb-2">
            <div class="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[100%] bg-[#e2e8fa]">
              <div class="px-2 py-2 sm:px-[14px] sm:py-[14px] bg-primaryColor rounded-[100%] absolute top-0 right-0">
              </div>
              <div
                class="px-1 py-1 sm:px-[6px] sm:py-[6px] bg-primaryColor rounded-[100%] absolute top-[80%] left-[10%]">
              </div>
            </div>
            <div class="text-5xl sm:text-7xl lg:text-[90px] font-[700] text-[#f6f8fd]">05</div>
          </div>
          <h2 class="text-lg sm:text-xl lg:text-[20px] text-gray-800 font-semibold mb-2">
            Chiến lược Marketing
          </h2>
          <p class="text-gray-500 text-sm sm:text-base">
            Chúng tôi cung cấp các giải pháp Marketing tùy chỉnh, phù hợp với
            nhu cầu và mục tiêu kinh doanh đặc thù của bạn.
          </p>
          <button
            class="mt-4 bg-[#e2e8fa] text-gray-700 border-none px-4 py-2 rounded-md hover:bg-[#d1d9f5] transition">
            Xem thêm
          </button>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[90%] right-0 rounded-[100%] bg-[#a494f8]">
          </div>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[75%] right-[-15%] rounded-[100%] bg-[#a494f8]">
          </div>
        </li>
        <li class="bg-white p-4 sm:p-6 lg:p-[30px] rounded-lg shadow-md relative overflow-hidden">
          <div class="flex justify-between items-center mb-2">
            <div class="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[100%] bg-[#e2e8fa]">
              <div class="px-2 py-2 sm:px-[14px] sm:py-[14px] bg-primaryColor rounded-[100%] absolute top-0 right-0">
              </div>
              <div
                class="px-1 py-1 sm:px-[6px] sm:py-[6px] bg-primaryColor rounded-[100%] absolute top-[80%] left-[10%]">
              </div>
            </div>
            <div class="text-5xl sm:text-7xl lg:text-[90px] font-[700] text-[#f6f8fd]">06</div>
          </div>
          <h2 class="text-lg sm:text-xl lg:text-[20px] text-gray-800 font-semibold mb-2">
            Chiến lược Marketing
          </h2>
          <p class="text-gray-500 text-sm sm:text-base">
            Chúng tôi cung cấp các giải pháp Marketing tùy chỉnh, phù hợp với
            nhu cầu và mục tiêu kinh doanh đặc thù của bạn.
          </p>
          <button
            class="mt-4 bg-[#e2e8fa] text-gray-700 border-none px-4 py-2 rounded-md hover:bg-[#d1d9f5] transition">
            Xem thêm
          </button>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[90%] right-0 rounded-[100%] bg-[#a494f8]">
          </div>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[75%] right-[-15%] rounded-[100%] bg-[#a494f8]">
          </div>
        </li>
        <li class="bg-white p-4 sm:p-6 lg:p-[30px] rounded-lg shadow-md relative overflow-hidden">
          <div class="flex justify-between items-center mb-2">
            <div class="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[100%] bg-[#e2e8fa]">
              <div class="px-2 py-2 sm:px-[14px] sm:py-[14px] bg-primaryColor rounded-[100%] absolute top-0 right-0">
              </div>
              <div
                class="px-1 py-1 sm:px-[6px] sm:py-[6px] bg-primaryColor rounded-[100%] absolute top-[80%] left-[10%]">
              </div>
            </div>
            <div class="text-5xl sm:text-7xl lg:text-[90px] font-[700] text-[#f6f8fd]">07</div>
          </div>
          <h2 class="text-lg sm:text-xl lg:text-[20px] text-gray-800 font-semibold mb-2">
            Chiến lược Marketing
          </h2>
          <p class="text-gray-500 text-sm sm:text-base">
            Chúng tôi cung cấp các giải pháp Marketing tùy chỉnh, phù hợp với
            nhu cầu và mục tiêu kinh doanh đặc thù của bạn.
          </p>
          <button
            class="mt-4 bg-[#e2e8fa] text-gray-700 border-none px-4 py-2 rounded-md hover:bg-[#d1d9f5] transition">
            Xem thêm
          </button>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[90%] right-0 rounded-[100%] bg-[#a494f8]">
          </div>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[75%] right-[-15%] rounded-[100%] bg-[#a494f8]">
          </div>
        </li>
        <li class="bg-white p-4 sm:p-6 lg:p-[30px] rounded-lg shadow-md relative overflow-hidden">
          <div class="flex justify-between items-center mb-2">
            <div class="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[100%] bg-[#e2e8fa]">
              <div class="px-2 py-2 sm:px-[14px] sm:py-[14px] bg-primaryColor rounded-[100%] absolute top-0 right-0">
              </div>
              <div
                class="px-1 py-1 sm:px-[6px] sm:py-[6px] bg-primaryColor rounded-[100%] absolute top-[80%] left-[10%]">
              </div>
            </div>
            <div class="text-5xl sm:text-7xl lg:text-[90px] font-[700] text-[#f6f8fd]">08</div>
          </div>
          <h2 class="text-lg sm:text-xl lg:text-[20px] text-gray-800 font-semibold mb-2">
            Chiến lược Marketing
          </h2>
          <p class="text-gray-500 text-sm sm:text-base">
            Chúng tôi cung cấp các giải pháp Marketing tùy chỉnh, phù hợp với
            nhu cầu và mục tiêu kinh doanh đặc thù của bạn.
          </p>
          <button
            class="mt-4 bg-[#e2e8fa] text-gray-700 border-none px-4 py-2 rounded-md hover:bg-[#d1d9f5] transition">
            Xem thêm
          </button>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[90%] right-0 rounded-[100%] bg-[#a494f8]">
          </div>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[75%] right-[-15%] rounded-[100%] bg-[#a494f8]">
          </div>
        </li>
        <li class="bg-white p-4 sm:p-6 lg:p-[30px] rounded-lg shadow-md relative overflow-hidden">
          <div class="flex justify-between items-center mb-2">
            <div class="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[100%] bg-[#e2e8fa]">
              <div class="px-2 py-2 sm:px-[14px] sm:py-[14px] bg-primaryColor rounded-[100%] absolute top-0 right-0">
              </div>
              <div
                class="px-1 py-1 sm:px-[6px] sm:py-[6px] bg-primaryColor rounded-[100%] absolute top-[80%] left-[10%]">
              </div>
            </div>
            <div class="text-5xl sm:text-7xl lg:text-[90px] font-[700] text-[#f6f8fd]">09</div>
          </div>
          <h2 class="text-lg sm:text-xl lg:text-[20px] text-gray-800 font-semibold mb-2">
            Chiến lược Marketing
          </h2>
          <p class="text-gray-500 text-sm sm:text-base">
            Chúng tôi cung cấp các giải pháp Marketing tùy chỉnh, phù hợp với
            nhu cầu và mục tiêu kinh doanh đặc thù của bạn.
          </p>
          <button
            class="mt-4 bg-[#e2e8fa] text-gray-700 border-none px-4 py-2 rounded-md hover:bg-[#d1d9f5] transition">
            Xem thêm
          </button>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[90%] right-0 rounded-[100%] bg-[#a494f8]">
          </div>
          <div
            class="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] absolute top-[75%] right-[-15%] rounded-[100%] bg-[#a494f8]">
          </div>
        </li>
      </ul>
    </section>
    <section
      class="py-6 sm:py-8 lg:py-[50px] bg-[url('https://future-tech.monamedia.net/wp-content/uploads/2024/01/cta_bg_3.jpg')] bg-cover bg-no-repeat w-full wrapper flex flex-col items-center justify-center">
      <div class="flex items-center gap-2">
        <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg" alt=""
          class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
        <h3 class="text-base sm:text-lg lg:text-[20px] font-[600] text-primaryColor">
          Future CONTACT US
        </h3>
      </div>
      <h1 class="text-2xl sm:text-3xl lg:text-[40px] text-white font-[700] mb-4 sm:mb-6 lg:mb-[20px] text-center">
        Liên hệ ngay nếu có thắc mắc
        <span class="text-primaryColor">thắc mắc</span>
      </h1>
      <p class="text-white font-[500] text-sm sm:text-base lg:text-lg text-center px-4 sm:px-6 lg:px-0">
        Hãy gửi cho chúng tôi những câu hỏi, ý kiến hoặc yêu cầu của bạn và
        chúng tôi sẽ phản hồi trong thời gian sớm nhất.
      </p>
      <button
        class="mt-4 bg-white text-primaryColor border-none rounded-[16px] px-4 sm:px-6 lg:px-[30px] py-2 sm:py-2.5 lg:py-[10px] hover:bg-gray-100 transition">
        Xem Ngay
      </button>
    </section>
    <section
      class="py-6 sm:py-8 lg:py-[90px] bg-[url('https://future-tech.monamedia.net/wp-content/uploads/2024/02/process_bg_1.png')] bg-cover bg-no-repeat w-full wrapper flex flex-col items-center justify-center">
      <div class="flex items-center gap-2">
        <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg" alt=""
          class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
        <h3 class="text-base sm:text-lg lg:text-[20px] font-[600] text-primaryColor">
          Future CONTACT US
        </h3>
      </div>
      <h1 class="text-2xl sm:text-3xl lg:text-[40px] text-gray-800 font-[700] mb-4 sm:mb-6 lg:mb-[20px] text-center">
        Quy trình làm việc
        <span class="text-primaryColor">hiệu quả</span>
      </h1>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 my-4 sm:my-6 lg:my-[20px] px-4 sm:px-6 lg:px-0">
        <li class="relative bg-white p-4 sm:p-6 lg:p-[30px] rounded-[8px] shadow-xl">
          <div
            class="absolute top-[-20px] sm:top-[-25px] lg:top-[-30px] left-[-20px] sm:left-[-25px] lg:left-[-30px] w-[50px] sm:w-[60px] lg:w-[70px] h-[50px] sm:h-[60px] lg:h-[70px] bg-primaryColor rounded-full flex items-center justify-center">
            <span class="text-white text-xl sm:text-2xl lg:text-[34px] font-[700]">01</span>
          </div>
          <h2 class="text-base sm:text-lg lg:text-[20px] text-gray-800 font-semibold mb-2">
            Phân tích nhu cầu
          </h2>
          <p class="text-gray-500 text-sm sm:text-base">
            Chúng tôi bắt đầu bằng việc phân tích nhu cầu và mục tiêu của bạn để
            hiểu rõ hơn về yêu cầu của dự án.
          </p>
        </li>
        <li class="relative bg-white p-4 sm:p-6 lg:p-[30px] rounded-[8px] shadow-xl">
          <div
            class="absolute top-[-20px] sm:top-[-25px] lg:top-[-30px] left-[-20px] sm:left-[-25px] lg:left-[-30px] w-[50px] sm:w-[60px] lg:w-[70px] h-[50px] sm:h-[60px] lg:h-[70px] bg-primaryColor rounded-full flex items-center justify-center">
            <span class="text-white text-xl sm:text-2xl lg:text-[34px] font-[700]">02</span>
          </div>
          <h2 class="text-base sm:text-lg lg:text-[20px] text-gray-800 font-semibold mb-2">
            Lập kế hoạch
          </h2>
          <p class="text-gray-500 text-sm sm:text-base">
            Chúng tôi xây dựng kế hoạch chi tiết, phù hợp với mục tiêu và ngân sách của bạn.
          </p>
        </li>
        <li class="relative bg-white p-4 sm:p-6 lg:p-[30px] rounded-[8px] shadow-xl">
          <div
            class="absolute top-[-20px] sm:top-[-25px] lg:top-[-30px] left-[-20px] sm:left-[-25px] lg:left-[-30px] w-[50px] sm:w-[60px] lg:w-[70px] h-[50px] sm:h-[60px] lg:h-[70px] bg-primaryColor rounded-full flex items-center justify-center">
            <span class="text-white text-xl sm:text-2xl lg:text-[34px] font-[700]">03</span>
          </div>
          <h2 class="text-base sm:text-lg lg:text-[20px] text-gray-800 font-semibold mb-2">
            Thực thi dự án
          </h2>
          <p class="text-gray-500 text-sm sm:text-base">
            Đội ngũ của chúng tôi triển khai dự án với sự chuyên nghiệp và đúng tiến độ.
          </p>
        </li>
        <li class="relative bg-white p-4 sm:p-6 lg:p-[30px] rounded-[8px] shadow-xl">
          <div
            class="absolute top-[-20px] sm:top-[-25px] lg:top-[-30px] left-[-20px] sm:left-[-25px] lg:left-[-30px] w-[50px] sm:w-[60px] lg:w-[70px] h-[50px] sm:h-[60px] lg:h-[70px] bg-primaryColor rounded-full flex items-center justify-center">
            <span class="text-white text-xl sm:text-2xl lg:text-[34px] font-[700]">04</span>
          </div>
          <h2 class="text-base sm:text-lg lg:text-[20px] text-gray-800 font-semibold mb-2">
            Đánh giá & tối ưu
          </h2>
          <p class="text-gray-500 text-sm sm:text-base">
            Chúng tôi đánh giá kết quả và tối ưu hóa để đảm bảo hiệu quả cao nhất.
          </p>
        </li>
      </ul>
    </section>
    <section
      class="py-6 sm:py-8 lg:py-[90px] bg-[url('https://future-tech.monamedia.net/wp-content/uploads/2024/01/testi_bg_2.png')] bg-cover bg-no-repeat w-full wrapper flex flex-col items-center justify-center">
      <div class="flex items-center gap-2">
        <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg" alt=""
          class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
        <h3 class="text-base sm:text-lg lg:text-[20px] font-[600] text-primaryColor">
          Future CONTACT US
        </h3>
      </div>
      <h1 class="text-2xl sm:text-3xl lg:text-[40px] text-gray-800 font-[700] mb-4 sm:mb-6 lg:mb-[20px] text-center">
        Những đánh giá
        <span class="text-primaryColor">tích cực</span>
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-4 my-6 sm:my-8 lg:my-[40px] w-full px-4 sm:px-6 lg:px-0">
        <div
          class="bg-white p-4 sm:p-6 lg:p-[30px] rounded-[12px] shadow-lg flex flex-col sm:flex-row justify-between items-center h-auto gap-4">
          <div class="w-full sm:w-[30%] relative rounded-[12px]">
            <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/testi_2_3.jpg" alt=""
              class="w-full h-48 sm:h-full object-cover rounded-[12px]" />
            <div
              class="absolute px-2 sm:px-3 lg:px-[12px] py-2 sm:py-3 lg:py-[12px] bg-primaryColor rounded-[100%] top-[85%] right-[10%] sm:right-[30%]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 sm:w-8 sm:h-8 lg:w-8 lg:h-8 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
              </svg>
            </div>
          </div>
          <div class="p-4 sm:p-6 lg:p-[30px] w-full sm:w-[68%] flex flex-col justify-between gap-4 sm:gap-5">
            <p class="text-sm sm:text-base lg:text-[15px] text-gray-400 font-[500]">
              Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây dựng
              một chiến lược marketing toàn diện và hiệu quả cho doanh nghiệp
              của tôi.
            </p>
            <div class="w-full h-[1px] bg-gray-200"></div>
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div class="flex flex-col gap-2">
                <h3 class="text-xl sm:text-2xl lg:text-[28px] font-[600] text-gray-800">Linh Linh</h3>
                <span class="text-sm sm:text-base lg:text-[15px] text-gray-400 font-[500]">
                  Khách hàng
                </span>
              </div>
              <ul class="flex items-center gap-0">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                    class="w-5 h-5 sm:w-6 sm:h-6 text-primaryColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                    class="w-5 h-5 sm:w-6 sm:h-6 text-primaryColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                    class="w-5 h-5 sm:w-6 sm:h-6 text-primaryColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                    class="w-5 h-5 sm:w-6 sm:h-6 text-primaryColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                    class="w-5 h-5 sm:w-6 sm:h-6 text-primaryColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="bg-white p-4 sm:p-6 lg:p-[30px] rounded-[12px] shadow-lg flex flex-col sm:flex-row justify-between items-center h-auto gap-4">
          <div class="w-full sm:w-[30%] relative rounded-[12px]">
            <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/testi_2_3.jpg" alt=""
              class="w-full h-48 sm:h-full object-cover rounded-[12px]" />
            <div
              class="absolute px-2 sm:px-3 lg:px-[12px] py-2 sm:py-3 lg:py-[12px] bg-primaryColor rounded-[100%] top-[85%] right-[10%] sm:right-[30%]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 sm:w-8 sm:h-8 lg:w-8 lg:h-8 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
              </svg>
            </div>
          </div>
          <div class="p-4 sm:p-6 lg:p-[30px] w-full sm:w-[68%] flex flex-col justify-between gap-4 sm:gap-5">
            <p class="text-sm sm:text-base lg:text-[15px] text-gray-400 font-[500]">
              Đội ngũ hỗ trợ rất nhiệt tình và chuyên nghiệp, giúp tôi đạt được mục tiêu kinh doanh nhanh chóng.
            </p>
            <div class="w-full h-[1px] bg-gray-200"></div>
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div class="flex flex-col gap-2">
                <h3 class="text-xl sm:text-2xl lg:text-[28px] font-[600] text-gray-800">Trần Anh</h3>
                <span class="text-sm sm:text-base lg:text-[15px] text-gray-400 font-[500]">
                  Doanh nhân
                </span>
              </div>
              <ul class="flex items-center gap-0">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                    class="w-5 h-5 sm:w-6 sm:h-6 text-primaryColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                    class="w-5 h-5 sm:w-6 sm:h-6 text-primaryColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                    class="w-5 h-5 sm:w-6 sm:h-6 text-primaryColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                    class="w-5 h-5 sm:w-6 sm:h-6 text-primaryColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6 text-primaryColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
