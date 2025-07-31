<template>
  <div>
    <!-- Sidebar -->
    <div class="space-y-8">
      <!-- Tìm kiếm -->
      <div class="p-4 bg-white rounded-xl shadow">
        <Input placeholder="Tìm kiếm" class="w-full" />
      </div>

      <!-- Chuyên mục -->
      <div class="bg-white rounded-xl shadow p-4">
        <h3 class="font-semibold text-lg mb-4">Chuyên mục</h3>
        <ul class="space-y-2">
          <li v-for="(cat, i) in categories" :key="i">
            <Button variant="ghost" class="justify-between w-full">
              {{ cat }}
              <ArrowRight class="w-4 h-4" />
            </Button>
          </li>
        </ul>
      </div>

      <!-- Bài viết mới nhất -->
      <div class="bg-white rounded-xl shadow p-4">
        <h3 class="font-semibold text-lg mb-4">Bài viết mới nhất</h3>
        <div class="space-y-4">
          <div
            v-for="(recent, idx) in recentPosts"
            :key="idx"
            class="flex gap-3 items-start"
          >
            <img
              :src="recent.thumb"
              class="w-[60px] h-[60px] rounded object-cover"
            />
            <div>
              <p class="font-semibold text-sm leading-snug">
                {{ recent.title }}
              </p>
              <p class="text-xs text-muted-foreground">{{ recent.date }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Từ khóa phổ biến -->
      <div class="bg-white rounded-xl shadow p-4">
        <h3 class="font-semibold text-lg mb-4">Từ khóa phổ biến</h3>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="(tag, idx) in popularTags"
            :key="idx"
            class="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    posts,
    categories,
    recentPosts,
    popularTags,
  } from '@/assets/assets.js';
  import { Button } from '@/components/ui/button';
  import { ArrowRight } from 'lucide-vue-next';
</script>

<style lang="scss" scoped></style>
