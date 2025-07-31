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
    class="bg-[url('/why_bg_2.jpg')] w-full min-h-[950px] bg-cover bg-no-repeat mt-[-100px] wrapper"
  >
    <div
      class="flex flex-col lg:flex-row justify-between pt-[200px] lg:pt-[300px] px-4 lg:px-[80px]"
    >
      <!-- LEFT SIDE -->
      <div
        class="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left"
      >
        <div class="relative mb-4">
          <h1
            class="text-[48px] lg:text-[68px] font-[900]"
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
            CHOOSE US
          </h1>
          <div
            class="flex items-center justify-center lg:justify-start gap-2 absolute top-[55%] left-2"
          >
            <img
              src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
              alt=""
              class="w-[20px] h-[20px]"
            />
            <h3 class="text-[18px] lg:text-[20px] font-[600] text-primaryColor">
              giới thiệu giải pháp
            </h3>
          </div>
        </div>

        <h1 class="text-[28px] lg:text-[36px] text-gray-800 font-[700]">
          Hơn 24 năm kinh nghiệm dịch vụ
          <span class="text-primaryColor">Marketing</span>
        </h1>
        <p class="my-[16px] text-gray-500 font-[400] max-w-[700px]">
          Chúng tôi chia sẻ những dự án thành công, tăng trưởng doanh số, tăng
          cường nhận diện thương hiệu, tương tác khách hàng và những đánh giá
          tích cực từ khách hàng. Điều này giúp khách hàng tiềm năng hiểu rõ hơn
          về khả năng và sự chuyên nghiệp của chúng tôi trong việc cung cấp các
          dịch vụ tiếp thị chất lượng cao.
        </p>

        <!-- THẺ THÀNH CÔNG -->
        <div
          class="flex flex-col lg:flex-row items-center lg:items-start gap-6 mt-4"
        >
          <div
            v-for="i in 2"
            :key="i"
            class="flex flex-col sm:flex-row items-center gap-4"
          >
            <div
              class="border-[5px] border-primaryColor rounded-full px-[9px] py-[11px]"
            >
              <div class="px-[9px] py-[14px] bg-white rounded-full">
                <span class="text-gray-800 font-[600] text-[24px]">90%</span>
              </div>
            </div>
            <div
              class="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left"
            >
              <h2 class="text-[18px] lg:text-[20px] font-[700] text-gray-800">
                Dự án thành công
              </h2>
              <p class="text-[14px] text-gray-500">
                Chiến lược tiếp thị áp dụng và kết quả đạt được
              </p>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          @click="goToIntroduce"
          class="border-none bg-primaryColor text-white mt-[25px] mx-auto lg:mx-0"
        >
          Đọc thêm
        </Button>
      </div>

      <!-- RIGHT SIDE IMAGE (Ẩn trên mobile) -->
      <div class="relative w-full lg:w-[47%] mt-10 lg:mt-0 hidden lg:block">
        <img src="../../../../public/why_2_1.png" alt="" />
        <div
          class="absolute top-[20%] left-[50%] translate-x-[-20%] translate-y-[-50%] border-[10px] text-white text-center px-[18px] py-[34px] bg-primaryColor rounded-full"
        >
          <h1 class="text-[26px] font-[700]">10k+</h1>
          <span>Active Clients</span>
        </div>
      </div>
    </div>
  </section>
</template>
