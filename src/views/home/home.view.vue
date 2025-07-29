<script setup>
import { ref, onMounted } from 'vue';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

import {
  Package,
  Phone,
  Mail,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Badge,
  User,
  Play,
  Plus,
  MessageSquare,
  Database,
} from 'lucide-vue-next';
import { Input } from '@/components/ui/input';
</script>

<template>
  <div class="w-full">
    <section className="w-full bg-[#f0f4ff] wrapper flex justify-between pt-[140px] ">
      <div className="w-[50%] ">
        <p className="text-[18px] text-primaryColor font-[700]">
          GIẢI PHÁP MARKETING MẠNH MẼ
        </p>
        <h1 className="text-[48px] font-[700] text-gray-800 leading-[60px] mb-[20px] ">
          Nâng Tầm Doanh Nghiệp <br className="" />
          Với Các Chiến Lược <br className="" />
          Marketing Đột Phá
        </h1>
        <p className="text-gray-500 text-[15px] mt-[15px] font-[500]">
          Với dịch vụ Marketing của chúng tôi, bạn sẽ tận hưởng sự thăng hoa của
          doanh nghiệp. Chúng tôi cung cấp các giải pháp Marketing mạnh mẽ để
          gia tăng hiệu quả kinh doanh của bạn.
        </p>

        <div className="flex items-center gap-8   mt-[30px]">
          <Button variant="outline"
            className=" border-none bg-primaryColor text-white rounded-[8px] px-6 py-3 hover:bg-primaryColor/90 transition-all duration-300">
            <div class="flex items-center gap-2">
              <span class="">TÌM HIỂU THÊM</span>
              <ArrowRight className="w-5 h-5 ml-[15px]" />
            </div>
          </Button>
          <a href="#" className="flex items-center gap-4">
            <div className="px-[15px] py-[15px]  rounded-[100%] flex items-center gap-2 bg-primaryColor ">
              <Play className="text-white " />
            </div>
            <div>
              <p className="text-[18px] text-gray-800 font-[700]">
                Xem giới thiệu
              </p>
              <p className="text-[15px] text-gray-500 font-[400] mt-[2px]">
                Đăng ký ngay
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="w-[50%]">
        <img src="../../../public/banner.png" alt="Man in suit pointing" fill className="w-full h-[600px] object-cover "
          priority />
      </div>
    </section>

    <section class="w-full wrapper flex justify-between py-16">
      <div class="relative w-[44%]">
        <img src="../../../public/about_3_1.png" alt="" />
        <div
          class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-[20px] py-[20px] bg-white rounded-[50%] cursor-pointer hover:bg-primaryColor transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
            class="size-6 text-primaryColor group-hover:text-white transition-all duration-300">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
        </div>
      </div>
      <div class="w-[50%]">
        <div class="">
          <div class="relative">
            <h1 class="text-[68px] font-[900]" style="
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
              About Us
            </h1>
            <div class="flex items-center gap-2 absolute top-[55%] left-2">
              <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg" alt="" />
              <h3 class="text-[20px] font-[600] text-primaryColor">
                giới thiệu giải pháp
              </h3>
            </div>
          </div>
          <div class="">
            <h1 class="text-[40px] text-gray-800 font-[700] mb-[20px]">
              Phát triển bằng các chiến <br />
              lược <span class="text-primaryColor">Marketing</span>
            </h1>
            <span class="text-gray-500 font-[400] my-[20px]">Với sự kết hợp giữa sự sáng tạo, chuyên môn và dữ liệu,
              chúng tôi
              tạo ra những chiến lược Marketing độc đáo và hiệu quả.</span>
          </div>
          <div class="mt-[40px] w-full shadow-lg">
            <ul class="flex items-center">
              <li class="w-[50%] text-center bg-primaryColor text-white py-[10px]">
                <span class="text-[18px] font-[600]">Sự khác biệt</span>
              </li>
              <li class="w-[50%] text-center bg-[#141d38] text-white py-[10px]">
                <span class="text-[18px] font-[600]">Giá trị mang đến</span>
              </li>
            </ul>
            <div class="p-[25px]">
              <h1 class="text-gray-800 font-[600] text-[22px]">
                Chúng tôi lắng nghe và hiểu rõ mục tiêu kinh doanh của bạn để
                xây dựng chiến lược
              </h1>
              <p class="text-gray-500 text-[15px] mt-[15px] font-[400]">
                Đội ngũ chuyên gia của chúng tôi sở hữu kiến thức sâu rộng và
                kinh nghiệm thực tế trong lĩnh vực Marketing. Chúng tôi luôn cập
                nhật với những xu hướng mới nhất và công nghệ tiên tiến nhất,
                giúp bạn tận dụng tối đa các cơ hội tiếp thị hiện đại. Chúng tôi
                cam kết mang đến cho bạn những giải pháp tiếp thị sáng tạo và
                hiệu quả.
              </p>
              <Button variant="outline" class="border-none bg-primaryColor text-white mt-[25px]">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="px-[30px]">
      <div
        class="relative bg-[url('/service_bg_2.jpg')] w-full h-[480px] bg-cover bg-no-repeat rounded-[12px] px-[80px]">
        <div class="flex items-center justify-between py-[30px]">
          <div class="w-[50%]">
            <div class="relative">
              <h1 class="text-[68px] font-[900]" style="
                  background: linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0.0001) 0%,
                    rgba(255, 255, 255, 1) 0.001%,
                    rgba(255, 255, 255, 0) 80%
                  );
                  -webkit-background-clip: text;
                  background-clip: text;
                  -webkit-text-fill-color: transparent;
                ">
                About Us
              </h1>

              <div class="flex items-center gap-2 absolute top-[55%] left-2">
                <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg" alt="" />
                <h3 class="text-[20px] font-[600] text-primaryColor">
                  giới thiệu giải pháp
                </h3>
              </div>
            </div>
            <div class="">
              <h1 class="text-[40px] text-white font-[700] mb-[20px]">
                Thu hút sự chú ý và thúc đẩy chuyển đổi với
                <span class="text-primaryColor">Marketing</span>
              </h1>
            </div>
          </div>

          <div class="w-[40%] flex justify-end">
            <Button variant="outline" class="border-none bg-primaryColor text-white mt-[25px]">
              Xem tất cả dịch vụ
            </Button>
          </div>
        </div>
        <div class="absolute top-[70%] mx-auto left-[50%] translate-x-[-50%] w-[85%]">
          <ul class="grid grid-cols-4 grid-rows-1 gap-10">
            <li class="relative bg-white p-[30px] rounded-[12px] shadow-lg text-center">
              <h1 class="text-[22px] font-[600] text-gray-800 mb-[15px] mt-[30px]">
                Quảng cáo trực tiếp
              </h1>
              <p class="text-gray-500 text-[15px] font-[400] mb-5">
                Chúng tôi tạo triển khai các chiến dịch quảng cáo trực tuyến
                hiệu quả, từ quảng cáo trên mạng xã hội đến Google Ads.
              </p>
              <Button variant="outline" class="border-none bg-primaryColor text-white mt-[15px]">Xem thêm</Button>
              <div
                class="bg-primaryColor absolute top-[-30px] left-[50%] translate-x-[-50%] px-[18px] py-[18px] rounded-[100%]">
                <CalendarDays class="text-white w-6 h-6" />
              </div>
            </li>
            <li class="relative bg-white p-[30px] rounded-[12px] shadow-lg text-center">
              <h1 class="text-[22px] font-[600] text-gray-800 mb-[15px] mt-[30px]">
                Quảng cáo trực tiếp
              </h1>
              <p class="text-gray-500 text-[15px] font-[400] mb-5">
                Chúng tôi tạo triển khai các chiến dịch quảng cáo trực tuyến
                hiệu quả, từ quảng cáo trên mạng xã hội đến Google Ads.
              </p>
              <Button variant="outline" class="border-none bg-primaryColor text-white mt-[15px]">Xem thêm</Button>
              <div
                class="bg-primaryColor absolute top-[-30px] left-[50%] translate-x-[-50%] px-[18px] py-[18px] rounded-[100%]">
                <CalendarDays class="text-white w-6 h-6" />
              </div>
            </li>
            <li class="relative bg-white p-[30px] rounded-[12px] shadow-lg text-center">
              <h1 class="text-[22px] font-[600] text-gray-800 mb-[15px] mt-[30px]">
                Quảng cáo trực tiếp
              </h1>
              <p class="text-gray-500 text-[15px] font-[400] mb-5">
                Chúng tôi tạo triển khai các chiến dịch quảng cáo trực tuyến
                hiệu quả, từ quảng cáo trên mạng xã hội đến Google Ads.
              </p>
              <Button variant="outline" class="border-none bg-primaryColor text-white mt-[15px]">Xem thêm</Button>
              <div
                class="bg-primaryColor absolute top-[-30px] left-[50%] translate-x-[-50%] px-[18px] py-[18px] rounded-[100%]">
                <CalendarDays class="text-white w-6 h-6" />
              </div>
            </li>
            <li class="relative bg-white p-[30px] rounded-[12px] shadow-lg text-center">
              <h1 class="text-[22px] font-[600] text-gray-800 mb-[15px] mt-[30px]">
                Quảng cáo trực tiếp
              </h1>
              <p class="text-gray-500 text-[15px] font-[400] mb-5">
                Chúng tôi tạo triển khai các chiến dịch quảng cáo trực tuyến
                hiệu quả, từ quảng cáo trên mạng xã hội đến Google Ads.
              </p>
              <Button variant="outline" class="border-none bg-primaryColor text-white mt-[15px]">Xem thêm</Button>
              <div
                class="bg-primaryColor absolute top-[-30px] left-[50%] translate-x-[-50%] px-[18px] py-[18px] rounded-[100%]">
                <CalendarDays class="text-white w-6 h-6" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="bg-[url('/why_bg_2.jpg')] w-full h-[950px] bg-cover bg-no-repeat mt-[-100px] wrapper">
      <div class="flex justify-between pt-[300px]">
        <div class="w-[50%]">
          <div class="relative">
            <h1 class="text-[68px] font-[900]" style="
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
              CHOOSE US
            </h1>
            <div class="flex items-center gap-2 absolute top-[55%] left-2">
              <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg" alt="" />
              <h3 class="text-[20px] font-[600] text-primaryColor">
                giới thiệu giải pháp
              </h3>
            </div>
          </div>
          <h1 class="text-[36px] text-gray-800 font-[700]">
            Hơn 24 năm kinh nghiệm dịch vụ
            <span class="text-primaryColor">Marketing</span>
          </h1>
          <p class="my-[20px] text-gray-500 font-[400]">
            Chúng tôi chia sẻ những dự án thành công, tăng trưởng doanh số, tăng
            cường nhận diện thương hiệu, tương tác khách hàng và những đánh giá
            tích cực từ khách hàng. Điều này giúp khách hàng tiềm năng hiểu rõ
            hơn về khả năng và sự chuyên nghiệp của chúng tôi trong việc cung
            cấp các dịch vụ tiếp thị chất lượng cao.
          </p>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-4">
              <div class="border-[5px] border-primaryColor rounded-[100%] px-[9px] py-[11px]">
                <div class="px-[9px] py-[14px] bg-white rounded-[100%]">
                  <span class="text-gray-800 font-[600] text-[28px]">90%</span>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <h2 class="text-[20px] font-[700] text-gray-800">
                  Dự án thành công
                </h2>
                <p class="text-[15px] font-[400] text-gray-500">
                  Chiến lược tiếp thị áp dụng và kết quả đạt được
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="border-[5px] border-primaryColor rounded-[100%] px-[9px] py-[11px]">
                <div class="px-[9px] py-[14px] bg-white rounded-[100%]">
                  <span class="text-gray-800 font-[600] text-[28px]">90%</span>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <h2 class="text-[20px] font-[700] text-gray-800">
                  Dự án thành công
                </h2>
                <p class="text-[15px] font-[400] text-gray-500">
                  Chiến lược tiếp thị áp dụng và kết quả đạt được
                </p>
              </div>
            </div>
          </div>
          <Button variant="outline" class="border-none bg-primaryColor text-white mt-[25px]">
            Đọc thêm
          </Button>
        </div>
        <div class="relative w-[47%]">
          <img src="../../../public/why_2_1.png" alt="" />
          <div
            class="absolute top-[20%] left-[50%] translate-x-[-20%] border-[10px] translate-y-[-50%] text-white text-center px-[18px] py-[34px] bg-primaryColor rounded-[100%]">
            <h1 class="text-[26px] font-[700]">10k+</h1>
            <span class="">Active Clients</span>
          </div>
        </div>
      </div>
    </section>
    <section class="py-[50px] wrapper flex flex-col justify-center items-center">
      <div class="relative">
        <h1 class="text-[68px] font-[900]" style="
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
          PRICING
        </h1>
        <div class="flex items-center gap-2 absolute top-[55%] left-2">
          <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg" alt="" />
          <h3 class="text-[20px] font-[600] text-primaryColor">
            giới thiệu giải pháp
          </h3>
        </div>
      </div>
      <h1 class="text-[40px] text-gray-800 font-[700] mb-[20px]">
        Bảng Giá <span class="text-primaryColor">Dịch Vụ</span>
      </h1>

      <ul class="grid grid-cols-3 grid-rows-1 gap-4 w-full mb-[20px]">
        <li class="rounded-[12px] shadow-lg overflow-hidden bg-[#f5f5f5]">
          <div class="relative bg-[#141d38] text-white">
            <!-- <img src="../../public/price_particle.png" alt="" class=""> -->
            <h1 class="text-[32px] font-[600] px-[35px] pt-[30px]">
              Gói cơ bản
            </h1>
            <p class="px-[35px]">Cung cấp các tính năng cần thiết</p>
            <div class="w-full h-[2px] bg-[#463aa8] my-6"></div>
            <div class="px-[35px] pb-[30px]">
              <h1 class="text-[30px] font-[500]">
                3,990,000₫ <span class="text-[15px]">/ tháng</span>
              </h1>
            </div>
          </div>
          <div class="p-[25px]">
            <ul class="flex flex-col gap-4">
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
            </ul>
            <Button variant="outline" class="border-none bg-primaryColor text-white mt-[20px] w-full">Mua ngay</Button>
          </div>
        </li>
        <li class="rounded-[12px] shadow-lg overflow-hidden bg-[#f5f5f5]">
          <div class="relative bg-[#141d38] text-white">
            <!-- <img src="../../public/price_particle.png" alt="" class=""> -->
            <h1 class="text-[32px] font-[600] px-[35px] pt-[30px]">
              Gói cơ bản
            </h1>
            <p class="px-[35px]">Cung cấp các tính năng cần thiết</p>
            <div class="w-full h-[2px] bg-[#463aa8] my-6"></div>
            <div class="px-[35px] pb-[30px]">
              <h1 class="text-[30px] font-[500]">
                3,990,000₫ <span class="text-[15px]">/ tháng</span>
              </h1>
            </div>
          </div>
          <div class="p-[25px]">
            <ul class="flex flex-col gap-4">
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
            </ul>
            <Button variant="outline" class="border-none bg-primaryColor text-white mt-[20px] w-full">Mua ngay</Button>
          </div>
        </li>
        <li class="rounded-[12px] shadow-lg overflow-hidden bg-[#f5f5f5]">
          <div class="relative bg-[#141d38] text-white">
            <!-- <img src="../../public/price_particle.png" alt="" class=""> -->
            <h1 class="text-[32px] font-[600] px-[35px] pt-[30px]">
              Gói cơ bản
            </h1>
            <p class="px-[35px]">Cung cấp các tính năng cần thiết</p>
            <div class="w-full h-[2px] bg-[#463aa8] my-6"></div>
            <div class="px-[35px] pb-[30px]">
              <h1 class="text-[30px] font-[500]">
                3,990,000₫ <span class="text-[15px]">/ tháng</span>
              </h1>
            </div>
          </div>
          <div class="p-[25px]">
            <ul class="flex flex-col gap-4">
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" class="w-6 h-6">
                  <circle cx="12" cy="12" r="10" fill="#7259f4" />
                  <path fill="white" d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z" />
                </svg>

                <span class="">Tính năng cơ bản</span>
              </li>
            </ul>
            <Button variant="outline" class="border-none bg-primaryColor text-white mt-[20px] w-full">Mua ngay</Button>
          </div>
        </li>
      </ul>
    </section>
    <section class="bg-[url('/why_bg_2.jpg')] w-full h-[700px] bg-cover bg-no-repeat wrapper">
      <div class="flex flex-col justify-center items-center">
        <div class="relative mt-[15px]">
          <h1 class="text-[68px] font-[900]" style="
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
            PROCESS
          </h1>
          <div class="flex items-center gap-2 absolute top-[55%] left-2">
            <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg" alt="" />
            <h3 class="text-[20px] font-[600] text-primaryColor">
              giới thiệu giải pháp
            </h3>
          </div>
        </div>
        <h1 class="text-[38px] text-gray-800 font-[700] text-center mb-[45px]">
          Quy trình làm việc <span class="text-primaryColor">hiệu quả</span>
        </h1>
        <ul class="grid grid-cols-4 grid-rows-1 gap-20 mb-[150px]">
          <li class="relative shadow-md rounded-[12px] p-[30px] bg-white flex flex-col items-center gap-4">
            <div class="absolute top-[-15%] left-[-15%] bg-primaryColor text-white rounded-[100%] px-[12px] py-[4px]">
              <span class="text-[40px] font-[700]">01</span>
            </div>
            <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/process_card_1.svg" alt="" />
            <h2 class="text-[18px] text-gray-800 font-[700]">
              Phân tích yêu cầu
            </h2>
            <p class="text-[14px] text-gray-500 font-[400] text-center">
              Chúng tôi sẽ thảo luận về mục tiêu, đối tượng khách hàng, thông
              điệp cần truyền tải và yêu cầu đặc biệt khác.
            </p>
          </li>
          <li class="relative shadow-md rounded-[12px] p-[30px] bg-white flex flex-col items-center gap-4">
            <div class="absolute top-[-15%] left-[-15%] bg-primaryColor text-white rounded-[100%] px-[12px] py-[4px]">
              <span class="text-[40px] font-[700]">01</span>
            </div>
            <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/process_card_2.svg" alt="" />
            <h2 class="text-[18px] text-gray-800 font-[700]">
              Phân tích yêu cầu
            </h2>
            <p class="text-[14px] text-gray-500 font-[400] text-center">
              Chúng tôi sẽ thảo luận về mục tiêu, đối tượng khách hàng, thông
              điệp cần truyền tải và yêu cầu đặc biệt khác.
            </p>
          </li>
          <li class="relative shadow-md rounded-[12px] p-[30px] bg-white flex flex-col items-center gap-4">
            <div class="absolute top-[-15%] left-[-15%] bg-primaryColor text-white rounded-[100%] px-[12px] py-[4px]">
              <span class="text-[40px] font-[700]">01</span>
            </div>
            <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/process_card_3.svg" alt="" />
            <h2 class="text-[18px] text-gray-800 font-[700]">
              Phân tích yêu cầu
            </h2>
            <p class="text-[14px] text-gray-500 font-[400] text-center">
              Chúng tôi sẽ thảo luận về mục tiêu, đối tượng khách hàng, thông
              điệp cần truyền tải và yêu cầu đặc biệt khác.
            </p>
          </li>
          <li class="relative shadow-md rounded-[12px] p-[30px] bg-white flex flex-col items-center gap-4">
            <div class="absolute top-[-15%] left-[-15%] bg-primaryColor text-white rounded-[100%] px-[12px] py-[4px]">
              <span class="text-[40px] font-[700]">01</span>
            </div>
            <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/process_card_4.svg" alt="" />
            <h2 class="text-[18px] text-gray-800 font-[700]">
              Phân tích yêu cầu
            </h2>
            <p class="text-[14px] text-gray-500 font-[400] text-center">
              Chúng tôi sẽ thảo luận về mục tiêu, đối tượng khách hàng, thông
              điệp cần truyền tải và yêu cầu đặc biệt khác.
            </p>
          </li>
        </ul>
        <div class="bg-[#141d38] w-full flex items-center justify-center px-[40px] h-[200px]">
          <ul class="flex items-center w-full justify-between">
            <li class="">
              <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/brand_2_2.png" alt="" />
            </li>
            <li class="">
              <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/brand_2_3.png" alt="" />
            </li>
            <li class="">
              <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/brand_2_4.png" alt="" />
            </li>
            <li class="">
              <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/brand_2_5.png" alt="" />
            </li>
            <li class="">
              <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/brand_2_6.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="wrapper flex flex-col items-center justify-center">
      <div class="relative">
        <div class="absolute z-[-1] bg-[url('/tech_shape_5.png')] w-full h-[600px] bg-cover bg-no-repeat"></div>
        <div class="flex items-center gap-2 mt-[190px]">
          <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg" alt="" />
          <h3 class="text-[20px] font-[600] text-primaryColor">
            đội ngũ chuyên gia
          </h3>
        </div>
      </div>
      <h1 class="text-[40px] font-[700] text-gray-800">
        Giới thiệu đội ngũ <span class="text-primaryColor">chuyên nghiệp</span>
      </h1>
      <ul class="grid grid-cols-3 grid-rows-1 gap-4 my-[50px] w-full">
        <li class="relative bg-white rounded-[12px] shadow-xl overflow-hidden p-[20px] flex flex-col items-center">
          <div class="rounded-[12px]">
            <img clas="rounded-[12px] object-cover "
              src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/team_3_2.jpg" alt="" />
          </div>
          <div
            class="top-[80%] right-[0%] flex items-center justify-center px-[4px] py-[4px] bg-primaryColor rounded-[100%]">
            <Plus :size=" 32 " class="text-white" />
          </div>
          <h1 class="text-gray-800 text-[22px] font-[700]">Xuân Trung</h1>
          <p class="text-[16px] text-primaryColor">Founder & CEO</p>
        </li>
        <li class="relative bg-white rounded-[12px] shadow-xl overflow-hidden p-[20px] flex flex-col items-center">
          <div class="rounded-[12px]">
            <img clas="rounded-[12px] object-cover "
              src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/team_3_2.jpg" alt="" />
          </div>
          <div
            class="top-[80%] right-[0%] flex items-center justify-center px-[4px] py-[4px] bg-primaryColor rounded-[100%]">
            <Plus :size=" 32 " class="text-white" />
          </div>
          <h1 class="text-gray-800 text-[22px] font-[700]">Xuân Trung</h1>
          <p class="text-[16px] text-primaryColor">Founder & CEO</p>
        </li>
        <li class="relative bg-white rounded-[12px] shadow-xl overflow-hidden p-[20px] flex flex-col items-center">
          <div class="rounded-[12px]">
            <img clas="rounded-[12px] object-cover "
              src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/team_3_2.jpg" alt="" />
          </div>
          <div
            class="top-[80%] right-[0%] flex items-center justify-center px-[4px] py-[4px] bg-primaryColor rounded-[100%]">
            <Plus :size=" 32 " class="text-white" />
          </div>
          <h1 class="text-gray-800 text-[22px] font-[700]">Xuân Trung</h1>
          <p class="text-[16px] text-primaryColor">Founder & CEO</p>
        </li>
      </ul>
    </section>
    <section
      class="bg-[url('/testi_bg_3.jpg')] w-full bg-cover bg-no-repeat wrapper flex flex-col items-center justify-center">
      <div class="px-[30px] flex flex-col items-center justify-center">
        <div class="relative mt-[15px] w-auto">
          <h1 class="text-[78px] font-[900]" style="
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
            PROCESS
          </h1>
          <div class="flex items-center gap-2 absolute top-[55%] left-2">
            <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg" alt="" />
            <h3 class="text-[20px] font-[600] text-primaryColor">
              giới thiệu giải pháp
            </h3>
          </div>
        </div>
        <h1 class="text-[34px] font-[700] text-white">
          Những đánh giá <span class="text-primaryColor">tích cực</span>
        </h1>

        <div className="grid grid-cols-2 gap-4 my-[40px]  w-full">
          <div class="bg-white p-[30px] rounded-[12px] shadow-lg flex justify-between items-center h-auto gap-4">
            <div class="w-[30%] relative roudned-[12px]">
              <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/testi_2_3.jpg" alt=""
                class="w-full h-full object-cover rounded-[12px]" />
              <div class="absolute px-[12px] py-[12px] bg-primaryColor rounded-[100%] top-[85%] right-[30%]">
                <MessageSquare :size=" 32 " class="text-white" />
              </div>
            </div>
            <div class="p-[30px] w-[68%] flex flex-col justify-between gap-5">
              <p class="text-[15px] text-gray-400 font-[500]">
                Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây
                dựng một chiến lược marketing toàn diện và hiệu quả cho doanh
                nghiệp của tôi.
              </p>
              <div class="w-full h-[1px] bg-gray-200"></div>
              <div class="flex items-center justify-between">
                <div class="flex flex-col gap-2">
                  <h3 class="text-[28px] font-[600] text-gray-800">
                    Linh Linh
                  </h3>
                  <span class="text-[15px] text-gray-400 font-[500]">
                    Khách hàng
                  </span>
                </div>
                <ul class="flex items-center gap-0">
                  <li class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                      class="size-6 text-primaryColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </li>
                  <li class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                      class="size-6 text-primaryColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </li>
                  <li class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                      class="size-6 text-primaryColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </li>
                  <li class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                      class="size-6 text-primaryColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </li>
                  <li class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                      class="size-6 text-primaryColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bg-white p-[30px] rounded-[12px] shadow-lg flex justify-between items-center h-auto gap-4">
            <div class="w-[30%] relative roudned-[12px]">
              <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/testi_2_3.jpg" alt=""
                class="w-full h-full object-cover rounded-[12px]" />
              <div class="absolute px-[12px] py-[12px] bg-primaryColor rounded-[100%] top-[85%] right-[30%]">
                <MessageSquare :size=" 32 " class="text-white" />
              </div>
            </div>
            <div class="p-[30px] w-[68%] flex flex-col justify-between gap-5">
              <p class="text-[15px] text-gray-400 font-[500]">
                Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây
                dựng một chiến lược marketing toàn diện và hiệu quả cho doanh
                nghiệp của tôi.
              </p>
              <div class="w-full h-[1px] bg-gray-200"></div>
              <div class="flex items-center justify-between">
                <div class="flex flex-col gap-2">
                  <h3 class="text-[28px] font-[600] text-gray-800">
                    Linh Linh
                  </h3>
                  <span class="text-[15px] text-gray-400 font-[500]">
                    Khách hàng
                  </span>
                </div>
                <ul class="flex items-center gap-0">
                  <li class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                      class="size-6 text-primaryColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </li>
                  <li class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                      class="size-6 text-primaryColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </li>
                  <li class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                      class="size-6 text-primaryColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </li>
                  <li class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                      class="size-6 text-primaryColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </li>
                  <li class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                      class="size-6 text-primaryColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      className="wrapper flex justify-between items-center gap-4 py-[70px]  bg-[url('https://future-tech.monamedia.net/wp-content/uploads/2024/01/appointment_bg_1-1.jpg')]  bg-cover bg-no-repeat ">
      <div className="flex justify-between items-center gap-4 w-full">
        <div className="w-[45%]">
          <div class="flex items-center gap-2">
            <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg" alt="" />
            <h3 class="text-[20px] font-[600] text-primaryColor">
              đội ngũ chuyên gia
            </h3>
          </div>
          <h1 class="text-[40px] font-[700] text-gray-800">
            Liên hệ nếu có <span class="text-primaryColor">thắc mắc</span>
          </h1>
          <p className="text-[16px] text-gray-500 font-[400] mt-[10px] mb-[40px]">
            Hãy gửi cho chúng tôi những câu hỏi, ý kiến hoặc yêu cầu của bạn và
            chúng tôi sẽ phản hồi trong thời gian sớm nhất.
          </p>
          <div class="w-full h-[1px] bg-gray-200 mb-[30px]"></div>
          <ul className="flex items-center gap-4 w-full ">
            <li className="bg-white p-[30px] rounded-[12px] shadow-lg flex justify-between items-center h-auto gap-4">
              <div className="px-[12px] py-[12px] bg-primaryColor rounded-[8px] shadow-2xl ">
                <Phone class="w-6 h-6 stroke-white" />
              </div>
              <div>
                <p className="text-gray-400 font-[400]">Liên hệ ngay:</p>
                <p className="font-[500] text-gray-800 ">(+84) 0313-728-397</p>
              </div>
            </li>
            <li className="bg-white p-[30px] rounded-[12px] shadow-lg flex justify-between items-center h-auto gap-4">
              <div className="px-[12px] py-[12px] bg-primaryColor rounded-[8px] shadow-2xl ">
                <Phone class="w-6 h-6 stroke-white" />
              </div>
              <div>
                <p className="text-gray-400 font-[400]">Liên hệ ngay:</p>
                <p className="font-[500] text-gray-800 ">(+84) 0313-728-397</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-[50%] self-start">
          <h2 className="text-[30px] text-gray-900 font-[600] mb-[20px]">
            Đặt câu hỏi
          </h2>
          <form className="flex flex-col gap-4 ">
            <div className="w-full flex items-center justify-between gap-[20px]">
              <Input type="text" placeholder="Họ tên *"
                className="outline-none w-full border border-gray-200 rounded-[4px] px-[12px] py-[10px] " required />
              <Input type="email" placeholder="Email *"
                className="outline-none w-full border border-gray-200 rounded-[4px] px-[12px] py-[10px] " required />
            </div>
            <div className="w-full flex items-center justify-between gap-[20px] ">
              <Input type="tel" placeholder="Số điện thoại *"
                className="outline-none w-full border border-gray-200 rounded-[4px] px-[12px] py-[10px]" required />
              <Input type="text" placeholder="Chủ đề *"
                className="outline-none w-full border border-gray-200 rounded-[4px] px-[12px] py-[10px]" required />
            </div>
            <Textarea placeholder="Nội dung" rows="{6}"
              className="outline-none w-full border border-gray-200 rounded-[4px] px-[12px] py-[10px] h-[200px]" />
            <Button variant="outline" class="border-none bg-primaryColor text-white mt-[25px]">
              Tìm hiểu thêm
            </Button>
          </form>
        </div>
      </div>
    </section>
    <section
      class="bg-[url('https://future-tech.monamedia.net/wp-content/uploads/2024/01/appointment_bg_1-1.jpg')] bg-cover bg-no-repeat flex flex-col items-center py-[50px]">
      <div class="relative">
        <h1 class="text-[58px] font-[900]" style="
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
          Update
        </h1>
        <div class="flex items-center gap-2 absolute top-[55%] left-2 w-[200px]">
          <img src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg" alt="" />
          <h3 class="text-[20px] font-[600] text-primaryColor">
            Tin tức & Blog
          </h3>
        </div>
      </div>
      <h1 class="text-[36px] text-gray-800 font-[700]">
        Cập nhật
        <span class="text-primaryColor"> tin tức</span>
      </h1>

      <div className="grid grid-cols-3 grid-rows-1 gap-4 wrapper mt-[50px] mb-[20px]">
        <div class="bg-white p-[30px] rounded-[12px] shadow-lg flex flex-col gap-4">
          <div class="w-full h-[200px] rounded-[12px] relative ">
            <img src="https://future-tech.monamedia.net/wp-content/uploads/2023/02/blog-s-1-4.jpg" alt=""
              class="w-full h-[200px] object-cover rounded-[12px]" />
            <div
              class="absolute top-[91%] left-[120px] bg-primaryColor px-[12px] py-[4px] rounded-[8px] border border-gray-50 ">
              <span class="text-white ">UI/UX Design</span>
            </div>
          </div>
          <div class="flex items-center mt-[20px] gap-[20px]">
            <div class="flex items-center gap-2 ">
              <Database :size=" 16 " class="stroke-primaryColor" />
              <span class="text-gray-500 text-[15px] font-[500]">
                11/10/2024
              </span>
            </div>
            <div class="flex items-center gap-2 ">
              <Database :size=" 16 " class="stroke-primaryColor" />
              <span class="text-gray-500 text-[15px] font-[500]">
                11/10/2024
              </span>
            </div>
          </div>
          <h2 class="text-[20px] text-gray-800 font-[700]">Tiêu đề bài viết</h2>
          <Button variant="outline"
            class="w-auto border-none bg-none text-primaryColor shadow-none hover:bg-transparent hover:text-gray-700 text-[16px] font-[500] transition-all duration-200 ease-in-out ">
            Xem thêm
          </Button>
        </div>
        <div class="bg-white p-[30px] rounded-[12px] shadow-lg flex flex-col gap-4">
          <div class="w-full h-[200px] rounded-[12px] relative ">
            <img src="https://future-tech.monamedia.net/wp-content/uploads/2023/02/blog-s-1-4.jpg" alt=""
              class="w-full h-[200px] object-cover rounded-[12px]" />
            <div
              class="absolute top-[91%] left-[120px] bg-primaryColor px-[12px] py-[4px] rounded-[8px] border border-gray-50 ">
              <span class="text-white ">UI/UX Design</span>
            </div>
          </div>
          <div class="flex items-center mt-[20px] gap-[20px]">
            <div class="flex items-center gap-2 ">
              <Database :size=" 16 " class="stroke-primaryColor" />
              <span class="text-gray-500 text-[15px] font-[500]">
                11/10/2024
              </span>
            </div>
            <div class="flex items-center gap-2 ">
              <Database :size=" 16 " class="stroke-primaryColor" />
              <span class="text-gray-500 text-[15px] font-[500]">
                11/10/2024
              </span>
            </div>
          </div>
          <h2 class="text-[20px] text-gray-800 font-[700]">Tiêu đề bài viết</h2>
          <Button variant="outline"
            class="w-auto border-none bg-none text-primaryColor shadow-none hover:bg-transparent hover:text-gray-700 text-[16px] font-[500] transition-all duration-200 ease-in-out ">
            Xem thêm
          </Button>
        </div>
        <div class="bg-white p-[30px] rounded-[12px] shadow-lg flex flex-col gap-4">
          <div class="w-full h-[200px] rounded-[12px] relative ">
            <img src="https://future-tech.monamedia.net/wp-content/uploads/2023/02/blog-s-1-4.jpg" alt=""
              class="w-full h-[200px] object-cover rounded-[12px]" />
            <div
              class="absolute top-[91%] left-[120px] bg-primaryColor px-[12px] py-[4px] rounded-[8px] border border-gray-50 ">
              <span class="text-white ">UI/UX Design</span>
            </div>
          </div>
          <div class="flex items-center mt-[20px] gap-[20px]">
            <div class="flex items-center gap-2 ">
              <Database :size=" 16 " class="stroke-primaryColor" />
              <span class="text-gray-500 text-[15px] font-[500]">
                11/10/2024
              </span>
            </div>
            <div class="flex items-center gap-2 ">
              <Database :size=" 16 " class="stroke-primaryColor" />
              <span class="text-gray-500 text-[15px] font-[500]">
                11/10/2024
              </span>
            </div>
          </div>
          <h2 class="text-[20px] text-gray-800 font-[700]">Tiêu đề bài viết</h2>
          <Button variant="outline"
            class="w-auto border-none bg-none text-primaryColor shadow-none hover:bg-transparent hover:text-gray-700 text-[16px] font-[500] transition-all duration-200 ease-in-out ">
            Xem thêm
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
