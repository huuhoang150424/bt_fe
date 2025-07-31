
<template>
  <div class="wrapper my-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Bài viết chính -->
    <div class="lg:col-span-2 space-y-10">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div class="p-6">
          <div class="text-gray-500 text-sm flex flex-wrap gap-4 mb-2 items-center">
            <span class="flex items-center gap-1">
              <UserIcon class="w-4 h-4 text-violet-500" /> bởi {{ post.author }}
            </span>
            <span class="flex items-center gap-1">
              <CalendarDaysIcon class="w-4 h-4 text-violet-500" /> {{ post.date }}
            </span>
            <span class="flex items-center gap-1">
              <ChatBubbleLeftRightIcon class="w-4 h-4 text-violet-500" /> {{ post.comments }} Bình luận
            </span>
            <span class="flex items-center gap-1">
              <TagIcon class="w-4 h-4 text-violet-500" /> {{ post.category }}
            </span>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ post.title }}</h2>
          <p class="text-gray-600 mb-4">{{ post.description }}</p>
          <img :src="post.image" class="w-full h-64 object-cover rounded-lg mb-4" />
          <Button
              variant="default"
              class="flex items-center gap-2 bg-violet-600 text-white hover:bg-violet-700 w-40 h-16"
              @click="goToDetail(post.id)"
            >
              XEM THÊM <ArrowRight class="w-4 h-4 text-white" />
            </Button>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
      <Sidebar />
  </div>
</template>

<script setup>
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-vue-next"
import {
  UserIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  TagIcon
} from '@heroicons/vue/24/outline'
import {posts, categories, recentPosts, popularTags} from "@/assets/assets.js"
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

function goToDetail(id) {
  router.push(`/news/${id}`).then(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // cuộn mượt
    })
  })
}

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
