<script setup>
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone } from 'lucide-vue-next';
</script>

<template>
  <section
    class="wrapper flex justify-between items-center gap-4 py-[70px] bg-[url('https://future-tech.monamedia.net/wp-content/uploads/2024/01/appointment_bg_1-1.jpg')] bg-cover bg-no-repeat"
  >
    <div class="flex justify-between items-center gap-4 w-full">
      <div class="w-[45%]">
        <div class="flex items-center gap-2">
          <img
            src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
            alt=""
          />
          <h3 class="text-[20px] font-[600] text-primaryColor">
            đội ngũ chuyên gia
          </h3>
        </div>
        <h1 class="text-[40px] font-[700] text-gray-800">
          Liên hệ nếu có <span class="text-primaryColor">thắc mắc</span>
        </h1>
        <p class="text-[16px] text-gray-500 font-[400] mt-[10px] mb-[40px]">
          Hãy gửi cho chúng tôi những câu hỏi, ý kiến hoặc yêu cầu của bạn và
          chúng tôi sẽ phản hồi trong thời gian sớm nhất.
        </p>
        <div class="w-full h-[1px] bg-gray-200 mb-[30px]"></div>
        <ul class="flex items-center gap-4 w-full">
          <li
            v-for="i in 2"
            :key="i"
            class="bg-white p-[30px] rounded-[12px] shadow-lg flex justify-between items-center h-auto gap-4"
          >
            <div class="px-[12px] py-[12px] bg-primaryColor rounded-[8px] shadow-2xl">
              <Phone class="w-6 h-6 stroke-white" />
            </div>
            <div>
              <p class="text-gray-400 font-[400]">Liên hệ ngay:</p>
              <p class="font-[500] text-gray-800">(+84) 0313-728-397</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-[50%] self-start">
        <h2 class="text-[30px] text-gray-900 font-[600] mb-[20px]">
          Đặt câu hỏi
        </h2>
        <form class="flex flex-col gap-4">
          <div class="w-full flex items-center justify-between gap-[20px]">
            <Input
              type="text"
              placeholder="Họ tên *"
              class="outline-none w-full border border-gray-200 rounded-[4px] px-[12px] py-[10px]"
              required
            />
            <Input
              type="email"
              placeholder="Email *"
              class="outline-none w-full border border-gray-200 rounded-[4px] px-[12px] py-[10px]"
              required
            />
          </div>
          <div class="w-full flex items-center justify-between gap-[20px]">
            <Input
              type="tel"
              placeholder="Số điện thoại *"
              class="outline-none w-full border border-gray-200 rounded-[4px] px-[12px] py-[10px]"
              required
            />
            <Input
              type="text"
              placeholder="Chủ đề *"
              class="outline-none w-full border border-gray-200 rounded-[4px] px-[12px] py-[10px]"
              required
            />
          </div>
          <Textarea
            placeholder="Nội dung"
            rows="6"
            class="outline-none w-full border border-gray-200 rounded-[4px] px-[12px] py-[10px] h-[200px]"
          />
          <Button
            variant="outline"
            class="border-none bg-primaryColor text-white mt-[25px]"
          >
            Tìm hiểu thêm
          </Button>
        </form>
      </div>
    </div>
  </section>
</template>
