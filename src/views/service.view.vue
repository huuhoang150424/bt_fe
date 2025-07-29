<script setup>
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-vue-next"

// Dữ liệu từ mẫu website
const services = [
  { number: '01', title: 'Chiến lược Marketing', content: 'Chúng tôi cung cấp các giải pháp Marketing tùy chỉnh, phù hợp với nhu cầu và mục tiêu kinh doanh đặc thù của bạn.', link: '#' },
  { number: '02', title: 'Quảng cáo trực tuyến', content: 'Chúng tôi tạo ra và triển khai các chiến dịch quảng cáo trực tuyến hiệu quả, từ quảng cáo trên mạng xã hội đến Google Ads.', link: '#' },
  { number: '03', title: 'Xây dựng và tối ưu hóa', content: 'Xây dựng và tối ưu hóa trang web để đảm bảo trải nghiệm người dùng tốt nhất và tăng cường hiệu suất.', link: '#' },
  { number: '04', title: 'Sáng tạo nội dung', content: 'Với đội ngũ viết lách tài năng, chúng tôi tạo ra nội dung sáng tạo, hấp dẫn và tương tác, từ bài viết blog đến nội dung video.', link: '#' },
  { number: '05', title: 'Tiếp thị mạng xã hội', content: 'Chúng tôi quản lý và tối ưu hóa chiến dịch tiếp thị trên mạng xã hội, như Facebook, Instagram, Twitter và LinkedIn.', link: '#' },
  { number: '06', title: 'Email Marketing', content: 'Chúng tôi tạo ra các chiến dịch Email Marketing hiệu quả, từ viết nội dung cho đến quản lý danh sách và tối ưu hóa tương tác.', link: '#' },
  { number: '07', title: 'SEO', content: 'Chúng tôi cung cấp dịch vụ SEO để tối ưu hóa trang web của bạn và tăng cường sự xuất hiện trên các công cụ tìm kiếm.', link: '#' },
  { number: '08', title: 'Quản lý chiến dịch', content: 'Chúng tôi tối ưu hóa chiến dịch để đảm bảo bạn nhận được lưu lượng truy cập chất lượng và tăng cường tỷ lệ chuyển đổi.', link: '#' },
  { number: '09', title: 'Đánh giá và phân tích', content: 'Chúng tôi cung cấp dịch vụ đánh giá và phân tích dữ liệu để bạn có cái nhìn sâu sắc về hiệu quả của các chiến dịch tiếp thị.', link: '#' }
]

const processes = [
  { number: '01', title: 'Phân tích yêu cầu', content: 'Chúng tôi sẽ thảo luận về mục tiêu, đối tượng khách hàng, thông điệp cần truyền tải và yêu cầu đặc biệt khác' },
  { number: '02', title: 'Lên kế hoạch', content: 'Sau khi hiểu yêu cầu của bạn, chúng tôi sẽ tiến hành nghiên cứu sâu vào ngành, đối thủ và khách hàng mục tiêu.' },
  { number: '03', title: 'Tạo nội dung', content: 'Chúng tôi sẽ tạo ra nội dung sáng tạo, chất lượng và phù hợp với mục tiêu kinh doanh của bạn.' },
  { number: '04', title: 'Đánh giá tối ưu hóa', content: 'Đánh giá hiệu quả của nội dung thông qua các phương tiện đo lường, như phân tích và phản hồi khách hàng.' }
]

const feedbacks = [
  {
    name: 'Sâm Nguyễn',
    content: 'Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây dựng một chiến lược marketing toàn diện và hiệu quả cho doanh nghiệp của tôi.',
    rating: 5
  },
  {
    name: 'An An',
    content: 'Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây dựng một chiến lược marketing toàn diện và hiệu quả cho doanh nghiệp của tôi.',
    rating: 5
  },
  {
    name: 'Huy Võ',
    content: 'Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây dựng một chiến lược marketing toàn diện và hiệu quả cho doanh nghiệp của tôi.',
    rating: 5
  }
];

</script>

<template>
  <div>
    <Header />
    <div class="wrapper py-12">
      <!-- Heading -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-center">
  <span class="text-black">Thu Hút Sự Chú Ý Và Thúc Đẩy Chuyển Đổi Với </span>
  <span class="text-violet-700">Marketing</span>
</h1>

      </div>

      <!-- 9 Dịch vụ -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div v-for="(service, index) in services" :key="index" class="bg-white rounded-xl shadow-md p-6 text-center">
          <div class="bg-violet-100 text-violet-500 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center font-bold">{{ service.number }}</div>
          <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
          <p class="text-gray-600 mb-4">{{ service.content }}</p>
          <Button variant="link" class="text-violet-500 hover:text-violet-700">Xem thêm →</Button>
        </div>
      </div>

      <!-- Liên hệ ngay nếu có thắc mắc -->
      <div class="bg-violet-800 text-white rounded-xl p-8 mb-16 text-center">
       <h2 class="text-4xl font-bold mb-4">
        Liên Hệ Ngay Nếu Có <span class="text-violet-200">Thắc Mắc</span>
       </h2>

        <p class="mb-6">Hãy gửi cho chúng tôi những câu hỏi, ý kiến hoặc yêu cầu của bạn và chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
        <Button class="bg-white text-violet-900 hover:bg-gray-100">Liên hệ ngay</Button>
      </div>

      <!-- Quy trình làm việc hiệu quả -->
      <div class="mb-16">
       <h2 class="text-5xl font-bold text-center mb-8">
        Quy Trình Làm Việc <span class="text-violet-800">Hiệu Quả</span>
      </h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div v-for="(process, index) in processes" :key="index" class="bg-white rounded-xl shadow-md p-6 text-center">
            <div class="bg-violet-100 text-violet-500 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center font-bold">{{ process.number }}</div>
            <h3 class="text-xl font-semibold mb-2">{{ process.title }}</h3>
            <p class="text-gray-600">{{ process.content }}</p>
          </div>
        </div>
      </div>

      <!-- Những đánh giá tích cực -->
      <div>
     <h2 class="text-5xl font-bold text-center mb-8">
        Những đánh giá <span class="text-violet-800">Tích cực</span>
      </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div v-for="(feedback, index) in feedbacks" :key="index" class="bg-white rounded-xl shadow-md p-6">
  <p class="text-gray-600 mb-4">{{ feedback.content }}</p>

  <!-- Hiển thị sao -->
 <div class="flex items-center mb-2 text-yellow-500 text-lg">
  <span v-for="n in feedback.rating" :key="n">★</span>
</div>


  <p class="font-semibold">{{ feedback.name }}, Khách hàng</p>
</div>

        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  @apply max-w-screen-xl mx-auto px-4;
}
</style>
