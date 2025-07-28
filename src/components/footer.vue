<script setup lang="ts">
  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';
</script>

<template>
  <div class="flex flex-col">
    <div
      class="bg-[url('/footer_bg_2.png')] w-full h-[590px] bg-cover bg-no-repeat bg-[#080e1c] mt-[50px]"
    >
      <div class="flex items-center pt-[80px] px-4 max-w-7xl mx-auto wrapper">
        <div class="flex justify-between w-full h-[50px]">
          <div class="flex gap-8">
            <img
              src="/bg-footer.png"
              alt="Logo"
              class="object-cover w-auto h-[50px]"
            />
            <div class="h-[50px] w-[2px] bg-primaryColor"></div>
          </div>
          <div class="text-white">
            <h1 class="text-xl font-bold text-[40px]">Bản tin mới nhất</h1>
            <h3 class="text-[15px] font-[500] mt-[15px]">
              Đăng ký ngay để nhận ưu đãi mới nhất
            </h3>
          </div>
          <div class="mt-4 flex gap-2">
            <Input
              type="email"
              placeholder="Nhập email của bạn"
              class="w-[250px] border border-gray-200"
            />
            <Button
              @click=""
              class="bg-primaryColor text-white border-none"
              variant="outline"
              >Đăng ký</Button
            >
          </div>
        </div>
      </div>
      <div class="h-[1px] bg-gray-700 my-[50px] mx-auto w-[97%]"></div>
      <div class="wrapper">
        <ul class="flex justify-between">
          <li class="flex flex-col gap-4 flex-1">
            <h2 class="text-white text-[26px] font-[600]">
              giới thiệu công ty
            </h2>
            <div class="w-[50px] h-[4px] bg-primaryColor"></div>
            <span class="text-gray-600 mt-4"
              >Professionally redefine transparent ROI through low-risk
              high-yield imperatives. Progressively create empowered. cost
              effective users via team driven.</span
            >
            <ul class="flex gap-1">
              <li
                class="px-[8px] py-[11px] rounded-[100%] border-[2px] border-gray-200"
              >
                <span class="">icon</span>
              </li>
              <li
                class="px-[8px] py-[11px] rounded-[100%] border-[2px] border-gray-200"
              >
                <span class="">icon</span>
              </li>
              <li
                class="px-[8px] py-[11px] rounded-[100%] border-[2px] border-gray-200"
              >
                <span class="">icon</span>
              </li>
              <li
                class="px-[8px] py-[11px] rounded-[100%] border-[2px] border-gray-200"
              >
                <span class="">icon</span>
              </li>
            </ul>
          </li>
          <li class="flex flex-col gap-4 flex-1">
            <h2 class="text-white text-[26px] font-[600]">Liên kết</h2>
            <div class="w-[50px] h-[4px] bg-primaryColor"></div>

            <ul class="flex gap-4 flex-col">
              <li class="">
                <span
                  class="text-white text-[16px] hover:text-primaryColor transition duration-300 ease-in-out cursor-pointer"
                  >> Liên kết</span
                >
              </li>
              <li class="">
                <span
                  class="text-white text-[16px] hover:text-primaryColor transition duration-300 ease-in-out cursor-pointer"
                  >> Dịch vụ</span
                >
              </li>
              <li class="">
                <span
                  class="text-white text-[16px] hover:text-primaryColor transition duration-300 ease-in-out cursor-pointer"
                  >> Faq</span
                >
              </li>
              <li class="">
                <span
                  class="text-white text-[16px] hover:text-primaryColor transition duration-300 ease-in-out cursor-pointer"
                  >> Dự án</span
                >
              </li>
              <li class="">
                <span
                  class="text-white text-[16px] hover:text-primaryColor transition duration-300 ease-in-out cursor-pointer"
                  >> Liên hệ</span
                >
              </li>
            </ul>
          </li>
          <li class="flex flex-col gap-4 flex-1">
            <h2 class="text-white text-[26px] font-[600]">Dịch vụ</h2>
            <div class="w-[50px] h-[4px] bg-primaryColor"></div>
            <ul class="flex gap-4 flex-col">
              <li class="">
                <span
                  class="text-white text-[16px] hover:text-primaryColor transition duration-300 ease-in-out cursor-pointer"
                  >> Quảng cáo trực tuyến</span
                >
              </li>
              <li class="">
                <span
                  class="text-white text-[16px] hover:text-primaryColor transition duration-300 ease-in-out cursor-pointer"
                  >> Sáng tạo nội dung</span
                >
              </li>
              <li class="">
                <span
                  class="text-white text-[16px] hover:text-primaryColor transition duration-300 ease-in-out cursor-pointer"
                  >> Tiếp thị mạng xã hội
                </span>
              </li>
              <li class="">
                <span
                  class="text-white text-[16px] hover:text-primaryColor transition duration-300 ease-in-out cursor-pointer"
                  >> Chiến lượt tùy chỉnh</span
                >
              </li>
              <li class="">
                <span
                  class="text-white text-[16px] hover:text-primaryColor transition duration-300 ease-in-out cursor-pointer"
                  >> Tối ưu hóa</span
                >
              </li>
            </ul>
          </li>
          <li class="flex flex-col gap-4 flex-1">
            <h2 class="text-white text-[26px] font-[600]">Bài viết mới nhất</h2>
            <div class="w-[50px] h-[4px] bg-primaryColor"></div>
            <ul class="flex flex-col gap-4">
              <li class="flex gap-4 text-white">
                <img
                  src="https://future-tech.monamedia.net/wp-content/uploads/2023/02/blog-s-1-4-80x80.jpg"
                  class="rounded-[8px]"
                />
                <div class="">
                  <h2 class="text-[18px]">Regional Manager limited time</h2>
                  <div class="flex gap-[6px] items-center">
                    <span class="text-[14px]">Th5 30 2024</span>
                  </div>
                </div>
              </li>
              <li class="flex gap-4 text-white">
                <img
                  src="https://future-tech.monamedia.net/wp-content/uploads/2023/02/blog-s-1-4-80x80.jpg"
                  class="rounded-[8px]"
                />
                <div class="">
                  <h2 class="text-[18px]">Regional Manager limited time</h2>
                  <div class="flex gap-[6px] items-center">
                    <span class="text-[14px]">Th5 30 2024</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-[#1a73e8] text-center py-[15px]">
      <span class="text-white font-[400] text-[16px]">
        © Thiết kế và lập trình bởi <strong>MonaMedia</strong>
      </span>
    </div>
  </div>
</template>
