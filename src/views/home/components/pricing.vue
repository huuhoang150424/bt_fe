<script setup>
  import { Button } from '@/components/ui/button';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const goToContact = () => {
    router.push('/contact');
  };

  const plans = [
    {
      name: 'Gói cơ bản',
      price: '3,990,000₫',
      features: [
        { name: 'Chiến lược kĩ thuật số toàn diện', color: '#684df4' },
        { name: 'Phân tích dữ liệu và báo cáo tiếp thị', color: '#684df4' },
        { name: 'Xây dựng và quản lý nội dung sáng tạo', color: '#808080' },
        { name: 'Quản lý tương tác khách hàng', color: '#684df4' },
        { name: 'Phân tích và nghiên cứu thị trường', color: '#808080' },
      ],
    },
    {
      name: 'Gói tiên tiến',
      price: '7,990,000₫',
      features: [
        { name: 'Chiến lược kĩ thuật số toàn diện', color: '#684df4' },
        { name: 'Phân tích dữ liệu và báo cáo tiếp thị', color: '#684df4' },
        { name: 'Xây dựng và quản lý nội dung sáng tạo', color: '#684df4' },
        { name: 'Quản lý tương tác khách hàng', color: '#808080' },
        { name: 'Phân tích và nghiên cứu thị trường', color: '#684df4' },
      ],
    },
    {
      name: 'Gói doanh nghiệp',
      price: '12,990,000₫',
      features: [
        { name: 'Chiến lược kĩ thuật số toàn diện', color: '#684df4' },
        { name: 'Phân tích dữ liệu và báo cáo tiếp thị', color: '#684df4' },
        { name: 'Xây dựng và quản lý nội dung sáng tạo', color: '#684df4' },
        { name: 'Quản lý tương tác khách hàng', color: '#684df4' },
        { name: 'Phân tích và nghiên cứu thị trường', color: '#684df4' },
      ],
    },
  ];
</script>

<template>
  <section
    class="w-full h-full py-[50px] wrapper flex flex-col justify-center items-center"
  >
    <div class="relative text-center">
      <h1
        class="text-[68px] font-[900]"
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
        PRICING
      </h1>
      <div class="flex items-center gap-2 justify-center mt-2">
        <img
          src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
          alt=""
        />
        <h3 class="text-[20px] font-[600] text-primaryColor">
          giới thiệu giải pháp
        </h3>
      </div>
    </div>

    <h1 class="text-[40px] text-gray-800 font-[700] mb-[20px] text-center">
      Bảng Giá <span class="text-primaryColor">Dịch Vụ</span>
    </h1>

    <ul class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      <li
        v-for="(plan, index) in plans"
        :key="index"
        class="rounded-[12px] shadow-lg overflow-hidden bg-[#f5f5f5] w-full"
      >
        <div class="relative bg-[#141d38] text-white">
          <h1 class="text-[32px] font-[600] px-[35px] pt-[30px]">
            {{ plan.name }}
          </h1>
          <p class="px-[35px]">Cung cấp các tính năng cần thiết</p>
          <div class="w-full h-[2px] bg-[#463aa8] my-6"></div>
          <div class="px-[35px] pb-[30px]">
            <h1 class="text-[30px] font-[500]">
              {{ plan.price }} <span class="text-[15px]">/ tháng</span>
            </h1>
          </div>
        </div>

        <div class="p-[25px]">
          <ul class="flex flex-col gap-4">
            <li
              v-for="(feature, j) in plan.features"
              :key="j"
              class="flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                :fill="feature.color"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <circle cx="12" cy="12" r="10" :fill="feature.color" />
                <path
                  fill="white"
                  d="M10.5 14.5l-2-2 1.4-1.4 0.6 0.6 3.6-3.6L15.5 9l-5 5.5z"
                />
              </svg>
              <span>{{ feature.name }}</span>
            </li>
          </ul>
          <Button
            variant="outline"
            @click="goToContact"
            class="border-none bg-primaryColor text-white mt-[20px] w-full"
          >
            Mua ngay
          </Button>
        </div>
      </li>
    </ul>
  </section>
</template>
