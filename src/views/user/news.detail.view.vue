<template>
  <div class="wrapper my-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Bài viết chi tiết -->
    <div class="lg:col-span-2 space-y-10">
      <div v-if="post" class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="p-6">
          <div class="text-gray-500 text-sm flex flex-wrap gap-4 mb-2 items-center">
            <span class="flex items-center gap-1">
              <UserIcon class="w-4 h-4 text-violet-500" /> bởi {{ post.author || 'Admin' }}
            </span>
            <span class="flex items-center gap-1">
              <CalendarDaysIcon class="w-4 h-4 text-violet-500" />
              {{ formatDate(post.createdAt) }}
            </span>
            <span class="flex items-center gap-1">
              <ChatBubbleLeftRightIcon class="w-4 h-4 text-violet-500" />
              {{ comments.length }} Bình luận
            </span>
            <span class="flex items-center gap-1">
              <TagIcon class="w-4 h-4 text-violet-500" /> {{ post.category?.name }}
            </span>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ post.title }}</h2>
          <p class="text-gray-600 mb-4">{{ post.content }}</p>
          <img :src="post.imageUrl" class="w-full h-64 object-cover rounded-lg mb-4" />
        </div>
      </div>
      <div v-else class="text-gray-500">Không tìm thấy bài viết.</div>

      <!-- Danh sách bình luận -->
      <div class="bg-white rounded-xl shadow-md p-6 space-y-4 lg:col-span-3">
        <h3 class="text-xl font-semibold text-violet-600 flex items-center gap-2">
          <ChatBubbleLeftRightIcon class="w-5 h-5 text-violet-600" />
          Bình luận ({{ comments.length }})
        </h3>

        <div v-if="comments.length > 0" class="space-y-6">
          <div v-for="comment in comments" :key="comment.id" class="border-b pb-4">
            <div class="flex gap-4">
              <img :src="comment.avatar" alt="avatar" class="w-12 h-12 rounded-full object-cover" />
              <div>
                <p class="text-gray-500 text-sm flex items-center gap-2">
                  <CalendarDaysIcon class="w-4 h-4 text-violet-500" />
                  {{ formatDate(comment.date) }}
                </p>
                <h4 class="font-semibold text-gray-800">{{ comment.name }}</h4>
                <p class="text-gray-700 mt-1">{{ comment.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-gray-500 italic">Chưa có bình luận nào.</div>
      </div>

      <!-- Form bình luận -->
      <div class="bg-white rounded-xl shadow-md p-6 space-y-4 lg:col-span-3">
        <h3 class="text-xl font-semibold text-violet-600 flex items-center gap-2">
          <ArrowRight class="w-5 h-5" />
          <span>Để lại bình luận</span>
        </h3>

        <textarea v-model="commentForm.comment" class="w-full p-4 border rounded-md focus:ring-2 focus:ring-violet-500" rows="4" placeholder="Viết bình luận *"></textarea>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input v-model="commentForm.name" type="text" class="w-full p-4 border rounded-md" placeholder="Tên của bạn *" />
          <input v-model="commentForm.email" type="email" class="w-full p-4 border rounded-md" placeholder="Email *" />
        </div>

        <div class="flex items-center space-x-2">
          <input type="checkbox" v-model="commentForm.remember" class="accent-violet-600" />
          <label class="text-sm">Lưu tên và email cho lần sau</label>
        </div>

        <Button @click="submitComment" class="bg-violet-600 text-white px-6 py-3 rounded-md">
          ĐĂNG BÌNH LUẬN
        </Button>
      </div>
    </div>

    <!-- Sidebar -->
    <Sidebar />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Button } from '@/components/ui/button';
import Sidebar from '../sidebar/sidebar.view.vue';
import {
  UserIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  TagIcon,
} from '@heroicons/vue/24/outline';
import { ApiUrl } from '@/constant/api-url';

const route = useRoute();
const postId = route.params.id;
const post = ref(null);
const comments = ref([]);
const commentForm = ref({ comment: '', name: '', email: '', remember: false });

const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('vi-VN');

onMounted(async () => {
  try {
    const res = await fetch(`${ApiUrl}/post/${postId}`);
    const data = await res.json();
    post.value = data.data || null;
    comments.value = post.value?.commentList || [];
  } catch (e) {
    console.error('Error fetching post:', e);
    post.value = null;
    comments.value = [];
  }
});

function submitComment() {
  if (!commentForm.value.comment || !commentForm.value.name || !commentForm.value.email) {
    alert('Vui lòng điền đầy đủ các trường bắt buộc.');
    return;
  }
  console.log('Bình luận:', commentForm.value);
  if (!commentForm.value.remember) {
    commentForm.value = { comment: '', name: '', email: '', remember: false };
  }
}
</script>

<style scoped>
.wrapper {
  @apply max-w-screen-xl mx-auto px-4;
}
</style>
