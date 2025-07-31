<template>
  <div class="wrapper my-6 md:my-10 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
    <!-- Bài viết chính -->
    <div class="lg:col-span-2 space-y-6 md:space-y-10">
      <div
        v-for="(post, index) in posts"
        :key="post.id"
        class="bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div class="p-4 sm:p-6">
          <!-- Thông tin bài viết -->
          <div class="text-gray-500 text-sm flex flex-wrap gap-4 mb-2 items-center">
            <span class="flex items-center gap-1">
              <UserIcon class="w-4 h-4 text-violet-500" /> bởi {{ post.author?.username || 'Ẩn danh' }}
            </span>
            <span class="flex items-center gap-1">
              <CalendarDaysIcon class="w-4 h-4 text-violet-500" />
              {{ formatDate(post.createdAt) }}
            </span>
            <span class="flex items-center gap-1">
              <TagIcon class="w-4 h-4 text-violet-500" /> {{ post.category?.name || 'Không có chuyên mục' }}
            </span>
          </div>

          <!-- Tiêu đề và mô tả -->
          <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
            {{ post.title }}
          </h2>
          <p class="text-gray-600 text-sm sm:text-base mb-4">
            {{ post.content.slice(0, 120) }}...
          </p>

          <!-- Ảnh minh hoạ -->
          <img
            :src="post.imageUrl"
            alt="Ảnh bài viết"
            class="w-full h-40 sm:h-56 md:h-64 object-cover rounded-lg mb-4"
          />

          <!-- Nút xem thêm -->
          <router-link :to="`/news/${post.id}`">
            <Button variant="default" class="flex items-center gap-2 w-full sm:w-auto h-14 bg-violet-600 text-white hover:bg-violet-700">
              XEM THÊM <ArrowRight class="w-4 h-4 text-white" />
            </Button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <Sidebar />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-vue-next';
import {
  UserIcon,
  CalendarDaysIcon,
  TagIcon,
} from '@heroicons/vue/24/outline';
import { ApiUrl } from '@/constant/api-url';

// State
const posts = ref<any[]>([]);

// Fetch all posts
const fetchPosts = async () => {
  try {
    const res = await fetch(`${ApiUrl}/post`);
    const data = await res.json();
    posts.value = data.data;
  } catch (err) {
    console.error('Lỗi khi tải bài viết:', err);
  }
};

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('vi-VN');
};

onMounted(fetchPosts);

    // Async sidebar
    const Sidebar = defineAsyncComponent({
      loader: () => import('../sidebar/sidebar.view.vue'),
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
