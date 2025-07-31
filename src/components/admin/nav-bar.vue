<template>
  <aside :class="['bg-white dark:bg-gray-800 shadow-lg flex flex-col transition-all duration-300', isSidebarOpen ? 'w-64' : 'w-16']">
    <div class="p-4 border-b dark:border-gray-700 flex items-center justify-between">
      <h1 v-if="isSidebarOpen" class="text-xl font-bold text-gray-900 dark:text-white">Bảng Điều Khiển</h1>
      <Button variant="ghost" size="icon" @click="$emit('toggle-sidebar')" aria-label="Đóng/m mở sidebar">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
        </svg>
      </Button>
    </div>
    <nav class="flex-1 p-4 space-y-2" v-if="isSidebarOpen">
      <router-link
        to="/admin/admin-dashboard"
        class="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        active-class="bg-gray-200 dark:bg-gray-700"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Bảng Điều Khiển
      </router-link>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';

defineProps<{
  isSidebarOpen: boolean;
}>();

defineEmits<{
  (e: 'toggle-sidebar'): void;
}>();
</script>
