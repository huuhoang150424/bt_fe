<script setup>
  import { ref } from 'vue';
  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';
  import { Textarea } from '@/components/ui/textarea';

  const faqs = ref([
    {
      question: 'Dịch vụ marketing của bạn bao gồm những gì?',
      answer:
        'Chúng tôi cung cấp một loạt các dịch vụ marketing, bao gồm tiếp thị số, quảng cáo trực tuyến, SEO, quảng cáo trên mạng xã hội, email marketing và nhiều hơn nữa. Chúng tôi tạo ra các chiến lược tùy chỉnh để đáp ứng nhu cầu và mục tiêu kinh doanh của khách hàng.',
    },
    {
      question: 'Bạn sẽ tối ưu hóa website của chúng tôi không?',
      answer:
        'Đúng vậy, chúng tôi sẽ tối ưu hóa website của bạn để đạt được hiệu suất tốt nhất trên công cụ tìm kiếm và cải thiện trải nghiệm người dùng. Chúng tôi sẽ tối ưu hóa nội dung, từ khóa, cấu trúc trang web và tốc độ tải trang để đảm bảo website của bạn đạt được sự thân thiện với SEO và thu hút khách hàng.',
    },
    {
      question:
        'Làm thế nào dịch vụ marketing của bạn có thể giúp tăng doanh số bán hàng?',
      answer:
        'Chúng tôi sử dụng các phương pháp tiếp thị hiệu quả để tăng tương tác của khách hàng, tăng lưu lượng truy cập vào trang web và xây dựng thương hiệu. Bằng cách tối ưu hóa chiến lược marketing, chúng tôi đảm bảo rằng dịch vụ của bạn được đưa ra trước mắt đúng khách hàng mục tiêu và tạo ra hiệu quả kinh doanh.',
    },
    {
      question: 'Bạn có đảm bảo kết quả từ chiến dịch marketing?',
      answer:
        'Chúng tôi cam kết cung cấp báo cáo định kỳ về các hoạt động marketing và đánh giá tiến bộ của dự án. Bạn sẽ được cung cấp thông tin về lưu lượng truy cập, tương tác, kết quả chiến dịch và các chỉ số quan trọng khác để bạn có thể theo dõi hiệu suất của dự án.',
    },
    {
      question: 'Bạn có kinh nghiệm làm việc trong ngành của chúng tôi không?',
      answer:
        'Chúng tôi có kinh nghiệm làm việc với nhiều ngành công nghiệp khác nhau, bao gồm bán lẻ, dịch vụ, công nghệ, y tế, du lịch và nhiều ngành khác nữa. Chúng tôi tìm hiểu về ngành của bạn và tạo ra các chiến lược marketing phù hợp với mục tiêu và yêu cầu của ngành đó.',
    },
    {
      question: 'Bạn có hỗ trợ khách hàng sau khi dự án hoàn thành không?',
      answer:
        'Đúng vậy, chúng tôi cung cấp hỗ trợ khách hàng sau khi dự án hoàn thành. Chúng tôi sẽ tiếp tục hỗ trợ, tư vấn và giúp bạn duy trì và phát triển chiến lược marketing của mình. Chúng tôi tin rằng mối quan hệ lâu dài với khách hàng là quan trọng và chúng tôi sẵn sàng hỗ trợ bạn trong suốt quá trình.',
    },
    {
      question: 'Bạn có các gói dịch vụ linh hoạt không?',
      answer:
        'Chúng tôi cung cấp các gói dịch vụ linh hoạt để đáp ứng nhu cầu và ngân sách của khách hàng. Chúng tôi có thể tùy chỉnh các gói dịch vụ để điều chỉnh cho phù hợp với yêu cầu cụ thể của bạn. Liên hệ với chúng tôi để biết thêm thông tin về các gói dịch vụ và tư vấn tốt nhất cho bạn.',
    },
    {
      question: 'Làm thế nào để chúng tôi bắt đầu làm việc với bạn?',
      answer:
        'Để bắt đầu làm việc với chúng tôi, bạn có thể liên hệ qua thông tin trên trang web hoặc điền vào biểu mẫu liên hệ. Chúng tôi sẽ liên hệ lại để thảo luận chi tiết về dự án của bạn.',
    },
    {
      question: 'Làm thế nào để liên hệ với chúng tôi?',
      answer:
        'Để liên hệ với chúng tôi, bạn có thể sử dụng thông tin liên lạc mà chúng tôi cung cấp trên trang web hoặc điền vào biểu mẫu liên hệ. Chúng tôi sẽ liên hệ lại với bạn càng sớm càng tốt để trả lời các câu hỏi và bắt đầu làm việc cùng nhau.',
    },
    {
      question: 'Bạn sẽ cung cấp báo cáo và đánh giá tiến bộ không?',
      answer:
        'Chúng tôi cam kết cung cấp báo cáo định kỳ về các hoạt động marketing và đánh giá tiến bộ của dự án. Bạn sẽ được cung cấp thông tin về lưu lượng truy cập, tương tác, kết quả chiến dịch và các chỉ số quan trọng khác để bạn có thể theo dõi hiệu suất của dự án.',
    },
  ]);

  const activeIndex = ref(null);

  const toggleAccordion = index => {
    activeIndex.value = activeIndex.value === index ? null : index;
  };
</script>

<template>
  <Header />
  <div class="container mx-auto py-6 md:py-12 px-2 sm:px-4">
    <h1
      class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-black"
    >
      Các Câu Hỏi Và Trả Lời <span class="text-violet-700">Thường Gặp</span>
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <button
          @click="toggleAccordion(index)"
          class="w-full text-left p-4 sm:p-6 flex justify-between items-center bg-violet-600 text-white font-semibold text-base sm:text-lg focus:outline-none"
        >
          {{ faq.question }}
          <span
            class="transform transition-transform duration-300 text-xl sm:text-2xl"
            :class="{ 'rotate-180': activeIndex === index }"
          >
            +
          </span>
        </button>
        <div
          v-if="activeIndex === index"
          class="p-4 sm:p-6 bg-gray-50 text-gray-700 text-sm sm:text-base transition-all duration-300 ease-in-out"
        >
          {{ faq.answer }}
        </div>
      </div>
    </div>

    <h2
      class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-10 md:mt-20 mb-6 md:mb-12 text-black"
    >
      Đặt Câu Hỏi Nếu Có <span class="text-violet-700">Thắc Mắc</span>
    </h2>

    <div class="w-full bg-gray-100 py-8 md:py-16 px-2 sm:px-4">
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center bg-gray-100"
      >
        <!-- FORM -->
        <form
          class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-gray-100"
        >
          <Input
            type="text"
            id="name"
            placeholder="Họ tên *"
            class="w-full h-12 sm:h-14 px-3 sm:px-6 py-2 sm:py-4 text-base sm:text-lg bg-white rounded-lg shadow-md"
          />
          <Input
            type="email"
            id="email"
            placeholder="Email *"
            class="w-full h-12 sm:h-14 px-3 sm:px-6 py-2 sm:py-4 text-base sm:text-lg bg-white rounded-lg shadow-md"
          />
          <Input
            type="tel"
            id="phone"
            placeholder="Số điện thoại *"
            class="w-full h-12 sm:h-14 px-3 sm:px-6 py-2 sm:py-4 text-base sm:text-lg bg-white rounded-lg shadow-md"
          />
          <Input
            type="text"
            id="subject"
            placeholder="Chủ đề *"
            class="w-full h-12 sm:h-14 px-3 sm:px-6 py-2 sm:py-4 text-base sm:text-lg bg-white rounded-lg shadow-md"
          />
          <div class="md:col-span-2">
            <Textarea
              id="message"
              placeholder="Nội dung"
              class="w-full h-24 sm:h-32 p-2 sm:p-4 text-sm sm:text-base bg-white rounded-md shadow-sm resize-none"
            />
          </div>
          <div class="md:col-span-2 text-center">
            <Button
              type="submit"
              class="w-full h-12 sm:h-14 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 sm:py-3 rounded-full text-base sm:text-lg"
            >
              GỬI LIÊN HỆ
            </Button>
          </div>
        </form>

        <!-- IMAGE -->
        <div class="flex justify-center mt-6 md:mt-0">
          <img
            src="https://future-tech.monamedia.net/wp-content/uploads/2024/01/faq_2_1-1.png"
            alt="Liên hệ"
            class="w-full max-w-xs sm:max-w-md"
          />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
  /* Add any specific styles here if needed */
</style>
