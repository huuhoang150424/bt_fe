<template>
  <div class="wrapper my-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
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
          <img v-if="post.imageUrl" :src="post.imageUrl" class="w-full h-64 object-cover rounded-lg mb-4" />
        </div>
      </div>
      <div v-else-if="loading" class="text-gray-500 flex items-center justify-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-500"></div>
        <span class="ml-2">Đang tải...</span>
      </div>
      <div v-else class="text-gray-500">Không tìm thấy bài viết.</div>

      <div class="bg-white rounded-xl shadow-md p-6 space-y-4 lg:col-span-3">
        <h3 class="text-xl font-semibold text-violet-600 flex items-center gap-2">
          <ChatBubbleLeftRightIcon class="w-5 h-5 text-violet-600" />
          Bình luận ({{ comments.length }})
        </h3>

        <div v-if="commentsLoading" class="text-gray-500 flex items-center gap-2">
          <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-violet-500"></div>
          Đang tải bình luận...
        </div>
        <div v-else-if="comments.length > 0" class="space-y-6">
          <div v-for="comment in comments" :key="comment.id" class="border-b pb-4 last:border-b-0">
            <div class="flex gap-4">
              <img :src="comment.avatar || '/default-avatar.png'" alt="avatar" class="w-12 h-12 rounded-full object-cover" />
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <h4 class="font-semibold text-gray-800">{{ comment.name }}</h4>
                  <span class="text-gray-500 text-sm flex items-center gap-1">
                    <CalendarDaysIcon class="w-4 h-4 text-violet-500" />
                    {{ formatDate(comment.date || comment.createdAt) }}
                  </span>
                </div>
                <p class="text-gray-700">{{ comment.content }}</p>

                <div v-if="comment.replies && comment.replies.length > 0" class="ml-8 mt-4 space-y-4">
                  <div v-for="reply in comment.replies" :key="reply.id" class="border-l-2 border-violet-200 pl-4">
                    <div class="flex gap-3">
                      <img :src="reply.avatar || '/default-avatar.png'" alt="avatar" class="w-8 h-8 rounded-full object-cover" />
                      <div class="flex-1">
                        <div class="flex items-center gap-2 mb-1">
                          <h5 class="font-medium text-gray-700 text-sm">{{ reply.name }}</h5>
                          <span class="text-gray-400 text-xs flex items-center gap-1">
                            <CalendarDaysIcon class="w-3 h-3" />
                            {{ formatDate(reply.date || reply.createdAt) }}
                          </span>
                        </div>
                        <p class="text-gray-600 text-sm">{{ reply.content }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-gray-500 italic">Chưa có bình luận nào.</div>
      </div>

      <div class="bg-white rounded-xl shadow-md p-6 space-y-4 lg:col-span-3">
        <h3 class="text-xl font-semibold text-violet-600 flex items-center gap-2">
          <ArrowRightIcon class="w-5 h-5" />
          <span>Để lại bình luận</span>
        </h3>

        <form @submit.prevent="submitComment" class="space-y-4">
          <textarea
            v-model="commentForm.content"
            class="w-full p-4 border rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            rows="4"
            placeholder="Viết bình luận *"
            required
          ></textarea>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              v-model="commentForm.name"
              type="text"
              class="w-full p-4 border rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              placeholder="Tên của bạn *"
              required
            />
            <input
              v-model="commentForm.email"
              type="email"
              class="w-full p-4 border rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              placeholder="Email *"
              required
            />
          </div>

          <div class="flex items-center space-x-2">
            <input
              type="checkbox"
              v-model="commentForm.remember"
              class="accent-violet-600"
              id="remember-checkbox"
            />
            <label for="remember-checkbox" class="text-sm cursor-pointer">Lưu tên và email cho lần sau</label>
          </div>

          <Button
            type="submit"
            class="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-md transition-colors"
            :disabled="submitLoading"
          >
            <span v-if="submitLoading" class="flex items-center gap-2">
              <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Đang gửi...
            </span>
            <span v-else>ĐĂNG BÌNH LUẬN</span>
          </Button>
        </form>
      </div>
    </div>
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
  ArrowRightIcon,
} from '@heroicons/vue/24/outline';
import api from '@/services/api';

const route = useRoute();
const postId = route.params.id;
const post = ref(null);
const comments = ref([]);
const commentForm = ref({
  content: '',
  postId: postId,
  name: '',
  email: '',
  parentId: '',
  remember: false
});


const loading = ref(false);
const commentsLoading = ref(false);
const submitLoading = ref(false);

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('vi-VN');
};



const fetchPost = async () => {
  loading.value = true;
  try {
    const data = await api.get(`/post/${postId}`);
    post.value = data.data || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    post.value = null;
  } finally {
    loading.value = false;
  }
};

const fetchComments = async () => {
  commentsLoading.value = true;
  try {
    const data = await api.get(`/comment/post/${postId}`);
    comments.value = data.data || [];
  } catch (error) {
    console.error('Error fetching comments:', error);
    comments.value = [];
  } finally {
    commentsLoading.value = false;
  }
};

const submitComment = async () => {
  // Validate required fields
  if (!commentForm.value.content.trim() || !commentForm.value.name.trim() || !commentForm.value.email.trim()) {
    alert('Vui lòng điền đầy đủ các trường bắt buộc.');
    return;
  }

  submitLoading.value = true;
  try {
    const commentData = {
      name: commentForm.value.name.trim(),
      content: commentForm.value.content.trim(),

      email: commentForm.value.email.trim(),
      postId: commentForm.value.postId,
      parentId: commentForm.value.parentId || null
    };

    console.log('Submitting comment:', commentData);

    const response = await api.post('/comment',commentData);
    console.log( response);


    await fetchComments();
    commentForm.value.content = '';
    if (!commentForm.value.remember) {
      commentForm.value.name = '';
      commentForm.value.email = '';
    }

    alert('Bình luận đã được gửi thành công!');
  } catch (error) {
    let errorMessage = 'Có lỗi xảy ra khi gửi bình luận. Vui lòng thử lại.';
    if (error.response) {
      console.error('Error response:', error.response.data);
    }
    alert(errorMessage);
  } finally {
    submitLoading.value = false;
  }
};

onMounted(async () => {
  await Promise.all([
    fetchPost(),
    fetchComments()
  ]);
});
</script>

