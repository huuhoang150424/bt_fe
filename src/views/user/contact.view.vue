<template>
  <div class="wrapper py-12 space-y-16">
    <!-- Thông tin liên hệ -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(info, i) in contactInfos"
        :key="i"
        class="bg-white shadow-md rounded-xl p-6 flex items-start gap-4"
      >
        <div class="bg-primary/10 text-primary p-3 rounded-xl">
          <component :is="info.icon" class="w-10 h-10 text-violet-500" />
        </div>
        <div>
          <h4 class="font-semibold text-base mb-1">{{ info.title }}</h4>
          <p class="text-sm text-gray-600 whitespace-pre-line">
            {{ info.content }}
          </p>
        </div>
      </div>
    </div>

    <!-- Form liên hệ -->
    <div class="bg-[#f9fafc] rounded-xl p-8 w-2/3">
      <div class="mb-6 text-left">
        <h2 class="text-4xl text-gray-800 font-bold mb-2">Liên Hệ</h2>
        <p class="max-w-2xl mt-2 text-gray-500">
          Nếu bạn có bất kỳ câu hỏi hoặc quan tâm nào về dịch vụ marketing của
          chúng tôi, xin vui lòng liên hệ với chúng tôi bằng cách sử dụng thông
          tin dưới đây. Chúng tôi luôn sẵn lòng hỗ trợ bạn và sẽ cố gắng phản
          hồi trong thời gian sớm nhất.
        </p>
      </div>

      <form @submit.prevent="submitForm" class="space-y-4">
        <div class="grid md:grid-cols-2 gap-4">
          <Input
            v-model="form.name"
            placeholder="Họ tên *"
            required
            className="py-3 px-3"
          />
          <Input
            v-model="form.email"
            placeholder="Email *"
            required
            className="py-3 px-3"
            type="email"
          />
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <Input
            v-model="form.phone"
            placeholder="Số điện thoại *"
            required
            className="py-3 px-3"
          />
          <Input
            v-model="form.subject"
            placeholder="Chủ đề *"
            required
            className="py-3 px-3"
          />
        </div>
        <Textarea
          v-model="form.message"
          rows="5"
          placeholder="Nội dung"
          required
          className="py-3 px-3 w-full"
        />
        <Button
          type="submit"
          class="w-full mt-4h-14 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-6"
          >GỬI LIÊN HỆ</Button
        >
      </form>
    </div>

    <!-- Google Map -->
    <div class="overflow-hidden rounded-xl shadow-lg">
      <iframe
        class="w-full h-[400px] border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5257641072335!2d106.63759331411658!3d10.8465090608094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be09c6a9c6b%3A0x7e2fa4719d0a64f0!2zMTA3My8yMyDEkOG6oWNoIE3huqFuZyBUaOG6oW5nIDgsIFAuNywgUXXDoW4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgUXXDoW4gQsOsbmgsIFTDom4gSOG7kyBN4bqhaQ!5e0!3m2!1svi!2s!4v1722233229055!5m2!1svi!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';
  import { Input } from '@/components/ui/input';
  import { Textarea } from '@/components/ui/textarea';
  import { Button } from '@/components/ui/button';
  import { contactInfos } from '@/assets/assets.js';

  const form = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const submitForm = () => {
    console.log('Form submitted:', form);
  };
</script>

<style scoped>
  .wrapper {
    @apply max-w-screen-xl mx-auto px-4;
  }
</style>
