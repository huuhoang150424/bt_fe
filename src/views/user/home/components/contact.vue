<script setup>
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone } from 'lucide-vue-next';
</script>

<template>
  <section
    class="wrapper flex flex-col md:flex-row justify-between items-start gap-4 py-8 md:py-12 lg:py-[70px] bg-[url('https://future-tech.monamedia.net/wp-content/uploads/2024/01/appointment_bg_1-1.jpg')] bg-cover bg-no-repeat"
  >
    <div class="flex flex-col md:flex-row justify-between items-start gap-4 w-full">
      <div class="w-full md:w-[45%]">
        <div class="flex items-center gap-2">
          <img
            src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
            alt=""
            class="w-6 h-6 md:w-8 md:h-8"
          />
          <h3 class="text-base md:text-xl font-[600] text-primaryColor">
            đội ngũ chuyên gia
          </h3>
        </div>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-[700] text-gray-800 mt-2 md:mt-4">
          Liên hệ nếu có <span class="text-primaryColor">thắc mắc</span>
        </h1>
        <p class="text-sm md:text-base text-gray-500 font-[400] mt-2 md:mt-3 mb-6 md:mb-10">
          Hãy gửi cho chúng tôi những câu hỏi, ý kiến hoặc yêu cầu của bạn và
          chúng tôi sẽ phản hồi trong thời gian sớm nhất.
        </p>
        <div class="w-full h-[1px] bg-gray-200 mb-6 md:mb-8"></div>
        <ul class="flex flex-col sm:flex-row items-center gap-4 w-full">
          <li
            v-for="i in 2"
            :key="i"
            class="bg-white p-4 md:p-6 lg:p-[30px] rounded-[12px] shadow-lg flex justify-between items-center w-full sm:w-1/2 gap-4"
          >
            <div
              class="p-2 md:p-3 lg:p-[12px] bg-primaryColor rounded-[8px] shadow-2xl"
            >
              <Phone class="w-5 h-5 md:w-6 md:h-6 stroke-white" />
            </div>
            <div>
              <p class="text-gray-400 font-[400] text-sm md:text-base">Liên hệ ngay:</p>
              <p class="font-[500] text-gray-800 text-sm md:text-base">(+84) 0313-728-397</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-[50%] self-start mt-6 md:mt-0">
        <h2 class="text-xl md:text-2xl lg:text-[30px] text-gray-900 font-[600] mb-4 md:mb-5">
          Đặt câu hỏi
        </h2>
        <form class="flex flex-col gap-4">
          <div class="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <Input
              type="text"
              placeholder="Họ tên *"
              class="outline-none w-full border border-gray-200 rounded-[4px] px-3 md:px-[12px] py-2 md:py-[10px] text-sm md:text-base"
              required
            />
            <Input
              type="email"
              placeholder="Email *"
              class="outline-none w-full border border-gray-200 rounded-[4px] px-3 md:px-[12px] py-2 md:py-[10px] text-sm md:text-base"
              required
            />
          </div>
          <div class="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <Input
              type="tel"
              placeholder="Số điện thoại *"
              class="outline-none w-full border border-gray-200 rounded-[4px] px-3 md:px-[12px] py-2 md:py-[10px] text-sm md:text-base"
              required
            />
            <Input
              type="text"
              placeholder="Chủ đề *"
              class="outline-none w-full border border-gray-200 rounded-[4px] px-3 md:px-[12px] py-2 md:py-[10px] text-sm md:text-base"
              required
            />
          </div>
          <Textarea
            placeholder="Nội dung"
            rows="6"
            class="outline-none w-full border border-gray-200 rounded-[4px] px-3 md:px-[12px] py-2 md:py-[10px] h-[150px] md:h-[200px] text-sm md:text-base"
          />
          <Button
            variant="outline"
            class="border-none bg-primaryColor text-white mt-4 md:mt-6 text-sm md:text-base"
          >
            Tìm hiểu thêm
          </Button>
        </form>
      </div>
    </div>
  </section>
</template>

