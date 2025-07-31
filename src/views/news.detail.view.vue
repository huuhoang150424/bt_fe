<template>
  <div class="wrapper my-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Bài viết chi tiết -->
    <div class="lg:col-span-2 space-y-10">
      <div v-if="post" class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="p-6">
          <div
            class="text-gray-500 text-sm flex flex-wrap gap-4 mb-2 items-center"
          >
            <span class="flex items-center gap-1">
              <UserIcon class="w-4 h-4 text-violet-500" /> bởi {{ post.author }}
            </span>
            <span class="flex items-center gap-1">
              <CalendarDaysIcon class="w-4 h-4 text-violet-500" />
              {{ post.date }}
            </span>
            <span class="flex items-center gap-1">
              <ChatBubbleLeftRightIcon class="w-4 h-4 text-violet-500" />
              {{ post.comments }} Bình luận
            </span>
            <span class="flex items-center gap-1">
              <TagIcon class="w-4 h-4 text-violet-500" /> {{ post.category }}
            </span>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            {{ post.title }}
          </h2>
          <p class="text-gray-600 mb-4">{{ post.description }}</p>
          <img
            :src="post.image"
            class="w-full h-64 object-cover rounded-lg mb-4"
          />
        </div>
      </div>
      <div v-else class="text-gray-500">Không tìm thấy bài viết.</div>

      <!-- Danh sách bình luận -->
      <div class="bg-white rounded-xl shadow-md p-6 space-y-4 lg:col-span-3">
        <h3
          class="text-xl font-semibold text-violet-600 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-violet-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 4V10a2 2 0 012-2h2"
            />
          </svg>
          Bình luận ({{ comments.length }})
        </h3>

        <div v-if="comments.length > 0" class="space-y-6">
          <div
            v-for="comment in comments"
            :key="comment.id"
            class="border-b pb-4"
          >
            <div class="flex gap-4">
              <img
                :src="comment.avatar"
                alt="avatar"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p class="text-gray-500 text-sm flex items-center gap-2">
                  <CalendarDaysIcon class="w-4 h-4 text-violet-500" />
                  {{ comment.date }}
                </p>
                <h4 class="font-semibold text-gray-800">{{ comment.name }}</h4>
                <p class="text-gray-700 mt-1">{{ comment.content }}</p>
                <button
                  class="text-sm text-violet-600 font-medium mt-2 hover:underline"
                >
                  ↩ Reply
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-gray-500 italic">Chưa có bình luận nào.</div>
      </div>

      <!-- Form bình luận -->
      <div class="bg-white rounded-xl shadow-md p-6 space-y-4 lg:col-span-3">
        <h3
          class="text-xl font-semibold text-violet-600 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          <span className="text-gray-800 font-semibold">Để lại bình luận</span>
        </h3>
        <p class="text-gray-500 text-sm">
          Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc được
          đánh dấu *
        </p>

        <textarea
          v-model="commentForm.comment"
          class="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          rows="4"
          placeholder="Viết bình luận *"
        ></textarea>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="relative">
            <input
              v-model="commentForm.name"
              type="text"
              class="w-full p-4 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Tên của bạn *"
            />
            <UserIcon class="absolute top-4 left-3 w-5 h-5 text-gray-400" />
          </div>
          <div class="relative">
            <input
              v-model="commentForm.email"
              type="email"
              class="w-full p-4 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Địa chỉ email *"
            />
            <svg
              class="absolute top-4 left-3 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <input
            type="checkbox"
            id="remember"
            v-model="commentForm.remember"
            class="accent-violet-600"
          />
          <label for="remember" class="text-sm text-gray-700"
            >Lưu tên và email của tôi trong trình duyệt này cho lần bình luận
            tiếp theo.</label
          >
        </div>

        <Button
          class="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-md"
          @click="submitComment"
        >
          ĐĂNG BÌNH LUẬN
        </Button>
      </div>
    </div>

    <!-- Sidebar -->
    <Sidebar />
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';
  import { defineAsyncComponent } from 'vue';
  import { posts } from '@/assets/assets.js';
  import { Button } from '@/components/ui/button';
  import { ArrowRight } from 'lucide-vue-next';
  import {
    UserIcon,
    CalendarDaysIcon,
    ChatBubbleLeftRightIcon,
    TagIcon,
  } from '@heroicons/vue/24/outline';
  import { ref } from 'vue';

  const commentForm = ref({
    comment: '',
    name: '',
    email: '',
    remember: false,
  });

  function submitComment() {
    if (
      !commentForm.value.comment ||
      !commentForm.value.name ||
      !commentForm.value.email
    ) {
      alert('Vui lòng điền đầy đủ các trường bắt buộc.');
      return;
    }

    console.log('Bình luận:', commentForm.value);

    // Reset nếu không muốn lưu thông tin
    if (!commentForm.value.remember) {
      commentForm.value = {
        comment: '',
        name: '',
        email: '',
        remember: false,
      };
    }
  }

  // Lấy ID từ URL
  const route = useRoute();
  const postId = route.params.id;

  // Tìm bài viết theo ID
  const post = computed(() => posts.find(p => p.id === postId));

  const comments = computed(() => post.value?.commentList || []);

  // Async sidebar
  const Sidebar = defineAsyncComponent({
    loader: () => import('./sidebar/sidebar.view.vue'),
    loadingComponent: () => import('@/components/loading.vue'),
    delay: 200,
    timeout: 3000,
  });
</script>

<style scoped>
  .wrapper {
    @apply max-w-screen-xl mx-auto px-4;
  }
</style>
