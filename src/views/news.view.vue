<template>
  <div
    class="wrapper my-6 md:my-10 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8"
  >
    <!-- Bài viết chính -->
    <div class="lg:col-span-2 space-y-6 md:space-y-10">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div class="p-4 sm:p-6">
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
          <h2
            class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2"
          >
            {{ post.title }}
          </h2>
          <p class="text-gray-600 text-sm sm:text-base mb-4">
            {{ post.description }}
          </p>
          <img
            :src="post.image"
            class="w-full h-40 sm:h-56 md:h-64 object-cover rounded-lg mb-4"
          />
          <Button
            variant="default"
            class="flex items-center gap-2 w-full sm:w-auto"
          >
            XEM THÊM <ArrowRight class="w-4 h-4 text-white" />
          </Button>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="space-y-4 md:space-y-8 mt-8 lg:mt-0">
      <!-- Tìm kiếm -->
      <div class="p-3 sm:p-4 bg-white rounded-xl shadow">
        <Input placeholder="Tìm kiếm" class="w-full" />
      </div>

      <!-- Chuyên mục -->
      <div class="bg-white rounded-xl shadow p-3 sm:p-4">
        <h3 class="font-semibold text-base sm:text-lg mb-2 sm:mb-4">
          Chuyên mục
        </h3>
        <ul class="space-y-1 sm:space-y-2">
          <li v-for="(cat, i) in categories" :key="i">
            <Button
              variant="ghost"
              class="justify-between w-full text-xs sm:text-sm"
            >
              {{ cat }} <ArrowRight class="w-4 h-4" />
            </Button>
          </li>
        </ul>
      </div>

      <!-- Bài viết mới nhất -->
      <div class="bg-white rounded-xl shadow p-3 sm:p-4">
        <h3 class="font-semibold text-base sm:text-lg mb-2 sm:mb-4">
          Bài viết mới nhất
        </h3>
        <div class="space-y-2 sm:space-y-4">
          <div
            v-for="(recent, idx) in recentPosts"
            :key="idx"
            class="flex gap-3 items-start"
          >
            <img
              :src="recent.thumb"
              class="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded object-cover"
            />
            <div>
              <p class="font-semibold text-xs sm:text-sm leading-snug">
                {{ recent.title }}
              </p>
              <p class="text-[10px] sm:text-xs text-muted-foreground">
                {{ recent.date }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Từ khóa phổ biến -->
      <div class="bg-white rounded-xl shadow p-3 sm:p-4">
        <h3 class="font-semibold text-base sm:text-lg mb-2 sm:mb-4">
          Từ khóa phổ biến
        </h3>
        <div class="flex flex-wrap gap-2 sm:gap-3">
          <span
            v-for="(tag, idx) in popularTags"
            :key="idx"
            class="px-2 sm:px-3 py-1 text-xs sm:text-sm border border-gray-300 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';
  import { ArrowRight } from 'lucide-vue-next';
  import {
    UserIcon,
    CalendarDaysIcon,
    ChatBubbleLeftRightIcon,
    TagIcon,
  } from '@heroicons/vue/24/outline';
  import {
    posts,
    categories,
    recentPosts,
    popularTags,
  } from '@/assets/assets.js';
</script>

<style scoped>
  .wrapper {
    @apply max-w-screen-xl mx-auto px-4;
  }
</style>
