<script setup>
import { Button } from '@/components/ui/button';
import {
  MessageSquare,
  Phone,
  CheckIcon,
  ArrowUpIcon,
  SquareStackIcon,
  StarIcon,
  NewspaperIcon,
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

const showScrollButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <!-- About Us Section -->
  <section
    class="relative flex flex-col md:flex-row items-center justify-between gap-4 py-8 md:py-12 lg:py-[50px] wrapper"
  >
    <div
      class="absolute z-[10] top-[-5%] sm:top-[-8%] lg:top-[-10%] left-[50%] -translate-x-1/2 border-[6px] md:border-[8px] lg:border-[10px] border-white shadow-xl text-white w-[120px] sm:w-[140px] lg:w-[150px] h-[120px] sm:h-[140px] lg:h-[150px] flex flex-col items-center justify-center bg-primaryColor rounded-full"
    >
      <h3 class="text-base md:text-lg lg:text-xl">10</h3>
      <span class="text-center text-xs md:text-sm">Năm kinh nghiệm</span>
    </div>
    <div class="w-full md:w-[40%] mt-16 sm:mt-20 md:mt-0">
      <img src="/about_3_1.png" alt="" class="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover" />
    </div>
    <div class="w-full md:w-[45%] self-start">
      <div class="relative">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-[900] text-center md:text-left"
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
        <div class="flex items-center gap-2 absolute top-[55%] left-2 w-full sm:w-auto">
          <img
            src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
            alt=""
            class="w-6 h-6 md:w-8 md:h-8"
          />
          <h3 class="text-base md:text-xl font-[600] text-primaryColor">
            giới thiệu giải pháp
          </h3>
        </div>
      </div>
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-gray-800 font-[700] mb-4 md:mb-5 lg:mb-[20px] text-center md:text-left">
        Phát triển bằng các chiến <br class="hidden md:block" />
        lược <span class="text-primaryColor">Marketing</span>
      </h1>
      <span class="text-gray-500 font-[400] text-sm md:text-base my-4 md:my-5 lg:my-[20px] block text-center md:text-left">
        Với sự kết hợp của sự thông minh, sự sáng tạo và kiến thức sâu rộng về
        ngành marketing, chúng tôi đã giúp hàng trăm khách hàng từ các lĩnh vực
        khác nhau đạt được thành công trong môi trường kinh doanh cạnh tranh.
      </span>
      <ul class="flex flex-col sm:flex-row items-center gap-4 w-full my-6 md:my-8 lg:my-[30px]">
        <li
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
        <li
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
      <div class="w-full h-[1px] bg-gray-200 my-6 md:my-8 lg:my-[30px]"></div>
      <div class="flex flex-col sm:flex-row items-center gap-4 md:gap-6 lg:gap-10">
        <Button
          variant="outline"
          class="border-none bg-primaryColor text-white text-sm md:text-base"
        >
          Khám phá
        </Button>
        <div class="flex items-center gap-3 md:gap-4">
          <div
            class="w-10 h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px] bg-primaryColor rounded-full flex items-center justify-center"
          >
            <Phone class="w-5 h-5 md:w-6 md:h-6 stroke-white" />
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-gray-400 font-[400] text-sm md:text-base">liên hệ ngay</p>
            <p class="font-[500] text-gray-800 text-sm md:text-base">(+84) 0313-728-397</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section
    class="wrapper bg-[#f5f5f5] py-8 md:py-12 lg:py-[50px] flex flex-col items-center justify-center"
  >
    <div class="flex flex-col items-center justify-between w-full">
      <div class="flex items-center gap-2">
        <img
          src="https://future-tech.monamedia.net/wp-content/uploads/2024/02/title_shape_2.svg"
          alt=""
          class="w-6 h-6 md:w-8 md:h-8"
        />
        <span class="text-primaryColor text-base md:text-xl font-[600]"
          >Đội ngũ chuyên gia</span
        >
      </div>
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-[700] text-gray-800 mt-4 md:mt-6 text-center">
        Giới thiệu đội ngũ <span class="text-primaryColor">chuyên nghiệp</span>
      </h1>
      <ul class="w-full mt-6 md:mt-8 lg:mt-[35px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
        <li
          v-for="i in 4"
          :key="i"
          class="bg-white p-4 md:p-6 lg:p-[30px] rounded-[12px] shadow-lg flex flex-col items-center gap-2"
        >
          <h1 class="text-base md:text-lg lg:text-[20px] font-[500] text-gray-800">An An</h1>
          <span class="text-primaryColor text-sm md:text-base">Founder</span>
        </li>
      </ul>
    </div>
  </section>

  <!-- Stats Section -->
  <section
    class="relative w-full overflow-hidden bg-[#6A30F5] py-12 md:py-16 lg:py-20 wrapper"
    :style="{
      backgroundImage: 'url(/images/wave-pattern.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div class="mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 md:gap-4"
        >
          <div
            class="relative w-10 h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px] flex items-center justify-center"
          >
            <img
              src="https://png.pngtree.com/element_our/sm/20180509/sm_5af2d4cabfdf2.jpg"
              alt="Hình dạng blob"
              class="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          <div>
            <div class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {{ stat.value }}
            </div>
            <p class="text-base md:text-lg text-white">{{ stat.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="relative bg-white py-12 md:py-16 lg:py-24 overflow-hidden wrapper">
    <div class="mx-auto px-4 md:px-6 max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div class="flex flex-col">
          <div
            class="flex items-center text-sm md:text-base font-semibold text-gray-700 mb-4"
          >
            <div class="p-2 rounded-md bg-purple-100 mr-2">
              <SquareStackIcon class="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
            </div>
            WHY CHOOSE US
          </div>
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-6"
          >
            Khám Phá Tiềm Năng Của Thương Hiệu Với Dịch Vụ
            <span class="text-purple-600">Marketing Hiện Đại</span>
          </h2>
          <p class="text-gray-600 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
            Chúng tôi chia sẻ những dự án thành công, tăng trưởng doanh số, tăng
            cường nhận diện thương hiệu, tương tác khách hàng và những đánh giá
            tích cực từ khách hàng. Điều này giúp khách hàng tiềm năng hiểu rõ
            hơn về khả năng và sự chuyên nghiệp của chúng tôi trong việc cung
            cấp các dịch vụ tiếp thị chất lượng cao.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-center"
            >
              <div
                class="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-dashed border-purple-300 mr-2 md:mr-3"
              >
                <CheckIcon class="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
              </div>
              <span class="text-gray-700 text-sm md:text-lg">{{ feature }}</span>
            </div>
          </div>
        </div>
        <div class="relative flex justify-center lg:justify-end">
          <img
            src="/about_3_1.png"
            alt="Hình ảnh minh họa về tiếp thị hiện đại"
            class="w-full max-w-md lg:max-w-none h-auto object-contain"
          />
        </div>
      </div>
    </div>
    <button
      @click="scrollToTop"
      v-show="showScrollButton"
      class="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-purple-600 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 z-50"
      aria-label="Cuộn lên đầu trang"
    >
      <ArrowUpIcon class="h-5 w-5 md:h-6 md:w-6" />
    </button>
  </section>

  <!-- Testimonials Section -->
  <section
    class="relative py-12 md:py-16 lg:py-24 overflow-hidden bg-cover bg-center wrapper"
    :style="{
      backgroundImage:
        'ur[](https://future-tech.monamedia.net/wp-content/uploads/2024/02/testi_bg_3.jpg)',
    }"
  >
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
    >
      <span
        class="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[200px] font-extrabold text-gray-800 opacity-30 select-none"
      >
        TESTIMONIALS
      </span>
    </div>
    <div class="relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
      <div class="text-center mb-8 md:mb-12">
        <div
          class="flex items-center justify-center text-sm md:text-base font-semibold text-purple-400 mb-2"
        >
          CUSTOMER FEEDBACK
        </div>
        <h2
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
        >
          Những Đánh Giá Tích Cực
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white rounded-lg shadow-lg p-4 md:p-6 relative"
        >
          <div
            class="absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <div
              class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-purple-500 flex items-center justify-center overflow-hidden border-4 border-white"
            >
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-full h-full object-cover"
              />
            </div>
            <span class="text-white text-xs md:text-sm font-semibold mt-2">{{
              testimonial.avatarLabel
            }}</span>
          </div>
          <div class="pt-10 md:pt-12">
            <div class="flex justify-center mb-4">
              <StarIcon
                v-for="n in 5"
                :key="n"
                class="h-4 w-4 md:h-5 md:w-5 text-purple-500 fill-purple-500"
              />
            </div>
            <p class="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
              {{ testimonial.text }}
            </p>
            <p class="text-base md:text-lg font-bold text-gray-900">
              {{ testimonial.name }}
            </p>
            <p class="text-xs md:text-sm text-gray-500">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Blog Section -->
  <section
    class="relative py-8 md:py-12 lg:py-[50px] bg-cover bg-center wrapper"
    :style="{
      backgroundImage:
        'ur[](https://future-tech.monamedia.net/wp-content/uploads/2024/01/blog_bg_1.png)',
    }"
  >
    <div class="mx-auto px-4 md:px-6 max-w-7xl text-center">
      <div
        class="flex items-center justify-center text-sm md:text-base font-semibold text-purple-600 mb-2"
      >
        <div class="p-2 rounded-md bg-purple-100 mr-2">
          <NewspaperIcon class="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
        </div>
        TIN TỨC & BLOG
      </div>
      <h2
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-8 md:mb-12"
      >
        Cập Nhật <span class="text-purple-600">Tin Tức</span> Mới Nhất
      </h2>
      <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-8 md:mt-12 lg:mt-16">
        <img
          v-for="n in 5"
          :key="n"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRy1v-HORM03iF8XHspdGN3ujlo1ggdjqtXzJokuXEbLUuWnnqzWo9NU8dbG7nPeT2mJk&usqp=CAU"
          alt="Mona Future Logo"
          class="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain"
        />
      </div>
    </div>
  </section>
</template>


