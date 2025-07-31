<script setup>
  const processSteps = [
    {
      title: 'Phân tích yêu cầu',
      desc: 'Chúng tôi sẽ thảo luận về mục tiêu, đối tượng khách hàng, thông điệp cần truyền tải và yêu cầu đặc biệt khác.',
    },
    {
      title: 'Lên kế hoạch',
      desc: 'Sau khi hiểu yêu cầu của bạn, chúng tôi sẽ tiến hành nghiên cứu sâu vào ngành, đối thủ và khách hàng mục tiêu.',
    },
    {
      title: 'Tạo nội dung',
      desc: 'Chúng tôi sẽ tạo ra nội dung sáng tạo, chất lượng và phù hợp với mục tiêu kinh doanh của bạn.',
    },
    {
      title: 'Đánh giá tối ưu hóa',
      desc: 'Đánh giá hiệu quả của nội dung thông qua các phương tiện đo lường, như phân tích và phản hồi khách hàng.',
    },
  ];
</script>

<template>
  <section
    class="bg-[url('/why_bg_2.jpg')] w-full bg-cover bg-no-repeat wrapper py-10 lg:py-20"
  >
    <div class="flex flex-col justify-center items-center">
      <!-- Header -->
      <div class="relative mt-4">
        <h1
          class="text-[40px] md:text-[68px] font-[900] text-center"
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
          PROCESS
        </h1>
        <div class="flex items-center gap-2 absolute top-[55%] left-2">
          <img
            src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
            alt=""
          />
          <h3 class="text-[16px] md:text-[20px] font-[600] text-primaryColor">
            giới thiệu giải pháp
          </h3>
        </div>
      </div>

      <!-- Sub heading -->
      <h1
        class="text-[24px] md:text-[38px] text-gray-800 font-[700] text-center my-10"
      >
        Quy trình làm việc <span class="text-primaryColor">hiệu quả</span>
      </h1>

      <!-- Step cards -->
      <ul
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 w-full max-w-7xl mb-20"
      >
        <li
          v-for="(step, i) in processSteps"
          :key="i"
          class="relative shadow-md rounded-[12px] p-6 bg-white flex flex-col items-center gap-4"
        >
          <div
            class="absolute -top-4 -left-4 bg-primaryColor text-white rounded-full px-3 py-1"
          >
            <span class="text-[24px] md:text-[32px] font-[700]">{{
              String(i + 1).padStart(2, '0')
            }}</span>
          </div>
          <img
            :src="`https://future-tech.monamedia.net/wp-content/uploads/2024/02/process_card_${i + 1}.svg`"
            alt=""
            class="w-[80px] md:w-auto"
          />
          <h2 class="text-[18px] text-gray-800 font-[700] text-center">
            {{ step.title }}
          </h2>
          <p class="text-[14px] text-gray-500 font-[400] text-center">
            {{ step.desc }}
          </p>
        </li>
      </ul>

      <!-- Brand logos -->
      <div
        class="bg-[#141d38] w-full flex items-center justify-center px-4 md:px-[40px] py-10 md:h-[200px]"
      >
        <ul
          class="grid grid-cols-2 sm:grid-cols-3 md:flex items-center w-full justify-between gap-6"
        >
          <li v-for="i in 5" :key="i" class="flex justify-center">
            <img
              :src="`https://future-tech.monamedia.net/wp-content/uploads/2024/02/brand_2_${i + 1}.png`"
              alt=""
              class="max-h-[50px] object-contain"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
