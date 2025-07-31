<script setup>
  import { Button } from '@/components/ui/button';
  import {
    MessageSquare,
    Phone,
    CheckIcon,
    ArrowUpIcon,
    SquareStackIcon,
  } from 'lucide-vue-next';
  import { ref } from 'vue';
  const stats = ref([
    { value: '986+', description: 'Dự án thành công' },
    { value: '896+', description: 'Khách hàng hài lòng' },
    { value: '396+', description: 'Nhân viên chuyên gia' },
    { value: '496+', description: 'Khách hàng tiềm năng' },
  ]);

  const features = ref([
    'Phân tích dữ liệu',
    'Tối ưu hóa',
    'Hỗ trợ 24/7',
    'Quảng cáo trực tuyến',
    'Đào tạo và tư vấn',
    'Sáng tạo nội dung',
  ]);
  const testimonials = ref([
    {
      avatar: '/placeholder.svg?height=80&width=80',
      avatarLabel: 'Mona%20Fut.',
      text: 'Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây dựng một chiến lược marketing toàn diện và hiệu quả cho doanh nghiệp của tôi.',
      name: 'Sâm Nguyễn',
      role: 'Khách hàng',
    },
    {
      avatar: '/placeholder.svg?height=80&width=80',
      avatarLabel: 'Mona%20Fut.',
      text: 'Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây dựng một chiến lược marketing toàn diện và hiệu quả cho doanh nghiệp của tôi.',
      name: 'An An',
      role: 'Khách hàng',
    },
    {
      avatar: '/placeholder.svg?height=80&width=80',
      avatarLabel: 'Mona%20Fut.',
      text: 'Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây dựng một chiến lược marketing toàn diện và hiệu quả cho doanh nghiệp của tôi.',
      name: 'Phúc Lộc',
      role: 'Khách hàng',
    },
  ]);
</script>

<template>
  <section class="relative flex items-center justify-between py-[50px] wrapper">
    <div
      class="absolute z-[10] top-[-10%] left-[35%] border-[10px] border-white shadow-xl text-white w-[150px] h-[150px] flex flex-col items-center justify-center bg-primaryColor rounded-[100%]"
    >
      <h3 class="">10</h3>
      <span class="text-center">Năm kinh nghiệm</span>
    </div>
    <div class="w-[40%]">
      <img src="../../public/about_3_1.png" class="h" alt="" />
    </div>
    <div class="w-[45%] self-start">
      <div class="relative">
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
          About Us
        </h1>
        <div class="flex items-center gap-2 absolute top-[55%] left-2">
          <img
            src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
            alt=""
          />
          <h3 class="text-[20px] font-[600] text-primaryColor">
            giới thiệu giải pháp
          </h3>
        </div>
      </div>
      <h1 class="text-[40px] text-gray-800 font-[700] mb-[20px]">
        Phát triển bằng các chiến <br />
        lược <span class="text-primaryColor">Marketing</span>
      </h1>
      <span class="text-gray-500 font-[400] my-[20px]"
        >Với sự kết hợp của sự thông minh, sự sáng tạo và kiến thức sâu rộng về
        ngành marketing, chúng tôi đã giúp hàng trăm khách hàng từ các lĩnh vực
        khác nhau đạt được thành công trong môi trường kinh doanh cạnh
        tranh.</span
      >

      <ul className="flex items-center gap-4 w-full my-[30px]">
        <li
          className="bg-white p-[30px] rounded-[12px] shadow-lg flex justify-between items-center h-auto gap-4"
        >
          <div
            className="px-[12px] py-[12px] bg-primaryColor rounded-[8px] shadow-2xl "
          >
            <Phone class="w-6 h-6 stroke-white" />
          </div>
          <div>
            <p className="text-gray-400 font-[400]">Liên hệ ngay:</p>
            <p className="font-[500] text-gray-800 ">(+84) 0313-728-397</p>
          </div>
        </li>
        <li
          className="bg-white p-[30px] rounded-[12px] shadow-lg flex justify-between items-center h-auto gap-4"
        >
          <div
            className="px-[12px] py-[12px] bg-primaryColor rounded-[8px] shadow-2xl "
          >
            <Phone class="w-6 h-6 stroke-white" />
          </div>
          <div>
            <p className="text-gray-400 font-[400]">Liên hệ ngay:</p>
            <p className="font-[500] text-gray-800 ">(+84) 0313-728-397</p>
          </div>
        </li>
      </ul>
      <div class="w-full h-[1px] bg-gray-200 my-[30px]"></div>
      <div class="flex items-center gap-10">
        <Button
          variant="outline"
          class="border-none bg-primaryColor text-white"
        >
          Khám phá
        </Button>
        <div class="flex items-center gap-4">
          <div
            class="w-[50px] h-[50px] bg-primaryColor rounded-[100%] flex items-center justify-center"
          >
            <Phone class="w-6 h-6 stroke-white" />
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-gray-400 font-[400]">liên hệ ngay</p>
            <p class="font-[500] text-gray-800">(+84) 0313-728-397</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="wrapper bg-[#f5f5f5] py-[50px] flex items-center justify-center"
  >
    <div class="flex flex-col items-center justify-between w-full">
      <div class="flex items-center gap-2">
        <img
          src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
          alt=""
        />
        <span class="text-primaryColor text-[20px] font-[600]"
          >Đội ngũ chuyên gia</span
        >
      </div>
      <h1 class="text-[40px] font-[700] text-gray-800">
        Giới thiệu đội ngũ <span class="text-primaryColor">chuyên nghiệp</span>
      </h1>

      <ul class="w-full mt-[35px] grid grid-cols-4 grid-rows-1 gap-10">
        <li
          class="bg-white p-[30px] rounded-[12px] shadow-lg flex flex-col items-center gap-2"
        >
          <h1 class="text-gray-800 font-[500] text-[20px]">An An</h1>
          <span class="text-primaryColor">Founder</span>
        </li>
        <li
          class="bg-white p-[30px] rounded-[12px] shadow-lg flex flex-col items-center gap-2"
        >
          <h1 class="text-gray-800 font-[500] text-[20px]">An An</h1>
          <span class="text-primaryColor">Founder</span>
        </li>
        <li
          class="bg-white p-[30px] rounded-[12px] shadow-lg flex flex-col items-center gap-2"
        >
          <h1 class="text-gray-800 font-[500] text-[20px]">An An</h1>
          <span class="text-primaryColor">Founder</span>
        </li>
        <li
          class="bg-white p-[30px] rounded-[12px] shadow-lg flex flex-col items-center gap-2"
        >
          <h1 class="text-gray-800 font-[500] text-[20px]">An An</h1>
          <span class="text-primaryColor">Founder</span>
        </li>
      </ul>
    </div>
  </section>
  <section class="">
    <div
      class="relative w-full overflow-hidden bg-[#6A30F5] py-20 wrapper"
      :style="{
        backgroundImage: 'url(/images/wave-pattern.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <div class="mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="flex items-center text-center"
          >
            <div
              class="relative w-[50px] h-[50px] mb-4 flex items-center gap-4 justify-center"
            >
              <img
                src="https://png.pngtree.com/element_our/sm/20180509/sm_5af2d4cabfdf2.jpg"
                alt="Hình dạng blob"
                class="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <div class="">
              <div class="text-5xl font-bold text-white mb-2">
                {{ stat.value }}
              </div>
              <p class="text-lg text-white">{{ stat.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="relative bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
    <div class="wrapper mx-auto px-4 md:px-6 max-w-7xl">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content Column -->
        <div class="flex flex-col">
          <div
            class="flex items-center text-sm font-semibold text-gray-700 mb-4"
          >
            <div class="p-2 rounded-md bg-purple-100 mr-2">
              <SquareStackIcon class="h-5 w-5 text-purple-600" />
            </div>
            WHY CHOOSE US
          </div>
          <h2
            class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            Khám Phá Tiềm Năng Của Thương Hiệu Với Dịch Vụ
            <span class="text-purple-600">Marketing Hiện Đại</span>
          </h2>
          <p class="text-gray-600 text-lg mb-8 leading-relaxed">
            Chúng tôi chia sẻ những dự án thành công, tăng trưởng doanh số, tăng
            cường nhận diện thương hiệu, tương tác khách hàng và những đánh giá
            tích cực từ khách hàng. Điều này giúp khách hàng tiềm năng hiểu rõ
            hơn về khả năng và sự chuyên nghiệp của chúng tôi trong việc cung
            cấp các dịch vụ tiếp thị chất lượng cao.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-center"
            >
              <div
                class="flex items-center justify-center w-8 h-8 rounded-full border-2 border-dashed border-purple-300 mr-3"
              >
                <CheckIcon class="h-5 w-5 text-purple-600" />
              </div>
              <span class="text-gray-700 text-lg">{{ feature }}</span>
            </div>
          </div>
        </div>

        <!-- Right Image Column -->
        <div class="relative flex justify-center lg:justify-end">
          <img
            src="../../public/about_3_1.png"
            alt="Hình ảnh minh họa về tiếp thị hiện đại"
            class="w-full max-w-lg lg:max-w-none h-auto object-contain"
          />
        </div>
      </div>
    </div>

    <!-- Scroll to Top Button -->
    <button
      @click="scrollToTop"
      v-show="showScrollButton"
      class="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 z-50"
      aria-label="Cuộn lên đầu trang"
    >
      <ArrowUpIcon class="h-6 w-6" />
    </button>
  </section>
  <section
    class="relative py-16 overflow-hidden bg-cover bg-center"
    :style="{
      backgroundImage:
        'url(https://future-tech.monamedia.net/wp-content/uploads/2024/02/testi_bg_3.jpg)',
    }"
  >
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
    >
      <span
        class="text-[150px] md:text-[200px] lg:text-[250px] font-extrabold text-gray-800 opacity-30 select-none"
      >
        TESTIMONIALS
      </span>
    </div>

    <div class="relative z-10 wrapper mx-auto px-4 md:px-6 max-w-7xl">
      <div class="text-center mb-12">
        <div
          class="flex items-center justify-center text-sm font-semibold text-purple-400 mb-2"
        >
          <!-- <img src="/placeholder.svg?height=20&width=20" alt="Mona Future Logo" class="h-5 w-5 mr-2" /> -->
          CUSTOMER FEEDBACK
        </div>
        <h2
          class="text-4xl md:text-5xl font-extrabold text-white leading-tight"
        >
          Những Đánh Giá Tích Cực
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white rounded-lg shadow-lg p-6 relative"
        >
          <div
            class="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <div
              class="w-20 h-20 rounded-full bg-purple-500 flex items-center justify-center overflow-hidden border-4 border-white"
            >
              <!-- <img :src=" testimonial.avatar " :alt=" testimonial.name " class="w-full h-full object-cover" /> -->
            </div>
            <span class="text-white text-sm font-semibold mt-2">{{
              testimonial.avatarLabel
            }}</span>
          </div>

          <div class="pt-12">
            <div class="flex justify-center mb-4">
              <StarIcon
                v-for="n in 5"
                :key="n"
                class="h-5 w-5 text-purple-500 fill-purple-500"
              />
            </div>
            <p class="text-gray-700 text-base mb-4 leading-relaxed">
              {{ testimonial.text }}
            </p>
            <p class="text-lg font-bold text-gray-900">
              {{ testimonial.name }}
            </p>
            <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="relative py-[50px] bg-cover bg-center"
    :style="{
      backgroundImage:
        'url(https://future-tech.monamedia.net/wp-content/uploads/2024/01/blog_bg_1.png)',
    }"
  >
    <div class="wrapper mx-auto px-4 md:px-6 max-w-7xl text-center">
      <div
        class="flex items-center justify-center text-sm font-semibold text-purple-600 mb-2"
      >
        <div class="p-2 rounded-md bg-purple-100 mr-2">
          <NewspaperIcon class="h-5 w-5 text-purple-600" />
        </div>
        TIN TỨC & BLOG
      </div>
      <h2
        class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-12"
      >
        Cập Nhật <span class="text-purple-600">Tin Tức</span> Mới Nhất
      </h2>

      <div class="flex flex-wrap justify-center items-center gap-8 mt-16">
        <img
          v-for="n in 5"
          :key="n"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRy1v-HORM03iF8XHspdGN3ujlo1ggdjqtXzJokuXEbLUuWnnqzWo9NU8dbG7nPeT2mJk&usqp=CAU"
          alt="Mona Future Logo"
          class="h-24 w-24 object-contain"
        />
      </div>
    </div>
  </section>
</template>
