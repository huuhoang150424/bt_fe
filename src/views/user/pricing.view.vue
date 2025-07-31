<template>
  <Header />
  <div class="container mx-auto py-12 px-4">
    <h1 class="text-4xl font-bold text-center mb-12">
      Bảng giá <span class="text-violet-700">Dịch vụ</span>
    </h1>

    <!-- Trạng thái tải -->
    <div v-if="isLoading" class="text-center text-gray-600 text-lg">
      Đang tải dữ liệu...
    </div>
    <!-- Lỗi -->
    <div v-else-if="error" class="text-center text-red-500 text-lg">
      {{ error }}
    </div>
    <!-- Danh sách gói giá -->
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      <div
        v-for="(plan, index) in pricingPlans"
        :key="index"
        class="bg-white rounded-lg shadow-lg p-8 text-center transform transition-all duration-300 hover:scale-105 hover:bg-violet-600 group"
      >
        <h3
          class="text-2xl font-bold mb-4 text-gray-800 group-hover:text-white"
        >
          {{ plan.name }}
        </h3>
        <p class="text-gray-600 mb-6 group-hover:text-white">
          {{ plan.description }}
        </p>
        <p
          class="text-4xl font-bold text-violet-700 mb-6 group-hover:text-white"
        >
          {{ formatPrice(plan.price, plan.currency, plan.period) }}
        </p>
        <ul class="text-gray-700 text-left mb-8 group-hover:text-white">
          <li
            v-for="(feature, fIndex) in plan.features"
            :key="fIndex"
            class="mb-2 flex items-center"
          >
            <svg
              v-if="feature.included"
              class="w-5 h-5 mr-2 text-green-500 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <svg
              v-else
              class="w-5 h-5 mr-2 text-red-500 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            {{ feature.name }}
          </li>
        </ul>
        <Button
          class="w-60 h-12 bg-blue-600 hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-violet-700"
        >
          MUA NGAY
        </Button>
      </div>
    </div>

    <div
      class="relative bg-cover bg-center py-20 px-4 rounded-lg overflow-hidden mb-20"
      style="
        background-image: url('https://future-tech.monamedia.net/wp-content/uploads/2024/01/bg-contact-1.png');
      "
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 text-center text-white">
        <h2 class="text-4xl font-bold mb-4">
          Liên hệ ngay với chúng tôi nếu có
          <span class="text-violet-400">Thắc mắc</span>
        </h2>
        <p class="text-lg mb-8">
          Chúng tôi luôn sẵn lòng giải đáp mọi thắc mắc của bạn.
        </p>
        <Button
          class="w-40 h-26 bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline"
        >
          LIÊN HỆ NGAY
        </Button>
      </div>
    </div>

    <h2 class="text-4xl font-bold text-center mb-12">
      Những đánh giá <span class="text-violet-700">Tích cực</span>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="bg-white rounded-lg shadow-lg p-8"
      >
        <div class="flex mb-3 text-blue-500 text-lg">
          <span v-for="n in 5" :key="n" class="mr-1">★</span>
        </div>
        <p class="text-gray-700 mb-4">{{ testimonial.text }}</p>
        <p class="font-bold text-gray-800">{{ testimonial.author }}</p>
        <p class="text-gray-600">{{ testimonial.role }}</p>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Button } from '@/components/ui/button';
import api from '@/services/api';

const pricingPlans = ref([]);
const isLoading = ref(false);
const error = ref(null);

const testimonials = ref([
  {
    text: 'Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây dựng một chiến lược marketing toàn diện và hiệu quả cho doanh nghiệp của tôi.',
    author: 'Sâm Nguyễn',
    role: 'Khách hàng',
  },
  {
    text: 'Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây dựng một chiến lược marketing toàn diện và hiệu quả cho doanh nghiệp của tôi.',
    author: 'An An',
    role: 'Khách hàng',
  },
  {
    text: 'Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây dựng một chiến lược marketing toàn diện và hiệu quả cho doanh nghiệp của tôi.',
    author: 'Huy Võ',
    role: 'Khách hàng',
  },
]);

const fetchPricingPlans = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await api.get('/pricings/get-all');
    console.log(response)
    if (response.statusCode === 200) {
      pricingPlans.value = response.data || [];
      if (pricingPlans.value.length === 0) {
        error.value = 'Không tìm thấy gói giá nào';
        toast({
          title: 'Cảnh báo',
          description: error.value,
          variant: 'destructive',
        });
      }
    } else {
      throw new Error(response.message || 'Lỗi khi lấy danh sách gói giá');
    }
  } catch (err) {
    error.value = err.message || 'Không thể tải danh sách gói giá';
    toast({
      title: 'Lỗi',
      description: error.value,
      variant: 'destructive',
    });
  } finally {
    isLoading.value = false;
  }
};

const formatPrice = (price, currency, period) => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: currency || 'VND',
    minimumFractionDigits: 0,
  });
  return `${formatter.format(price)} / ${period === 'monthly' ? 'tháng' : 'năm'}`;
};

onMounted(() => {
  fetchPricingPlans();
});
</script>
