<script setup>
  import { Button } from '@/components/ui/button';
  import { CalendarDays } from 'lucide-vue-next';
</script>

<template>
  <section class="px-[30px]">
    <div
      class="relative bg-[url('/service_bg_2.jpg')] w-full h-[600px] bg-cover bg-no-repeat rounded-[12px] flex flex-col items-center justify-center"
    >
      <div class="text-center mb-8">
        <h1
          class="text-[68px] font-[900]"
          style="
            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.0001) 0%,
              rgba(255, 255, 255, 1) 0.001%,
              rgba(255, 255, 255, 0) 80%
            );
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          "
        >
          About Us
        </h1>
        <div class="flex justify-center items-center gap-2 mb-2">
          <img
            src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
            alt=""
          />
          <h3 class="text-[20px] font-[600] text-primaryColor">
            giới thiệu giải pháp
          </h3>
        </div>
        <h2 class="text-[32px] md:text-[40px] text-white font-[700] mb-[20px]">
          Thu hút sự chú ý và thúc đẩy chuyển đổi với
          <span class="text-primaryColor">Marketing</span>
        </h2>
        <Button
          variant="outline"
          class="border-none bg-primaryColor text-white hover:bg-white hover:text-primaryColor transition duration-300"
        >
          Xem tất cả dịch vụ
        </Button>
      </div>

      <div class="relative overflow-hidden w-full mt-4">
        <ul
          class="flex gap-10 w-max px-[30px] transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
          @mousedown="startDrag"
          @mousemove="onDrag"
          @mouseup="endDrag"
          @mouseleave="endDrag"
          ref="slider"
        >
          <li
            v-for="i in 4"
            :key="i"
            class="relative w-[300px] min-w-[300px] bg-white p-[30px] rounded-[12px] shadow-lg text-center transform transition duration-300 hover:scale-105 hover:bg-primaryColor hover:text-white"
          >
            <h1 class="text-[22px] font-[600] mb-[15px] mt-[30px]">
              Quảng cáo trực tiếp
            </h1>
            <p class="text-gray-500 text-[15px] font-[400] mb-5">
              Chúng tôi tạo triển khai các chiến dịch quảng cáo trực tuyến hiệu
              quả, từ quảng cáo trên mạng xã hội đến Google Ads.
            </p>
            <Button
              variant="outline"
              class="border-none bg-primaryColor text-white mt-[15px] hover:bg-white hover:text-primaryColor transition duration-300"
            >
              Xem thêm
            </Button>
            <div
              class="bg-primaryColor absolute top-[-30px] left-[50%] translate-x-[-50%] px-[18px] py-[18px] rounded-full"
            >
              <CalendarDays class="text-white w-6 h-6" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  import { ref } from 'vue';

  const slider = ref(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  function startDrag(e) {
    isDragging = true;
    startX = e.pageX - slider.value.offsetLeft;
    scrollLeft = slider.value.scrollLeft;
  }

  function onDrag(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.value.offsetLeft;
    const walk = (x - startX) * 2; // tăng tốc kéo
    slider.value.scrollLeft = scrollLeft - walk;
  }

  function endDrag() {
    isDragging = false;
  }
</script>

<style scoped>
  ul::-webkit-scrollbar {
    display: none;
  }
</style>
