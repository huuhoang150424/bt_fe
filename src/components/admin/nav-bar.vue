<template>
  <aside
    :class="[
      'bg-white dark:bg-gray-800 shadow-lg flex flex-col transition-all duration-300',
      isSidebarOpen ? 'w-64' : 'w-16',
    ]"
  >
    <div
      class="p-4 border-b dark:border-gray-700 flex items-center justify-between"
    >
      <h1
        v-if="isSidebarOpen"
        class="text-xl font-bold text-gray-900 dark:text-white"
      >
        Bảng Điều Khiển
      </h1>
      <Button
        variant="ghost"
        size="icon"
        @click="$emit('toggle-sidebar')"
        aria-label="Đóng/mở sidebar"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="
              isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
            "
          />
        </svg>
      </Button>
    </div>
    <nav v-if="isSidebarOpen" class="flex-1 p-4 space-y-1">
      <router-link
        to="/admin/dashboard"
        class="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        active-class="bg-gray-200 dark:bg-gray-700"
      >
        <svg
          class="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        Bảng Điều Khiển
      </router-link>
      <Accordion type="single" collapsible class="space-y-2">
        <AccordionItem value="posts">
          <AccordionTrigger
            class="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Bài Viết
          </AccordionTrigger>
          <AccordionContent class="pl-8 space-y-1">
            <router-link
              to="/admin/posts"
              class="block p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              active-class="bg-gray-200 dark:bg-gray-700"
            >
              Danh Sách
            </router-link>
            <router-link
              to="/admin/create-posts"
              class="block p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              active-class="bg-gray-200 dark:bg-gray-700"
            >
              Thêm Mới
            </router-link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="pricing">
          <AccordionTrigger
            class="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Bảng Giá
          </AccordionTrigger>
          <AccordionContent class="pl-8 space-y-1">
            <router-link
              to="/admin/pricing"
              class="block p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              active-class="bg-gray-200 dark:bg-gray-700"
            >
              Danh Sách
            </router-link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="categories">
          <AccordionTrigger
            class="flex items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Danh Mục Bài Viết
          </AccordionTrigger>
          <AccordionContent class="pl-8 space-y-1">
            <router-link
              to="/admin/categories"
              class="block p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              active-class="bg-gray-200 dark:bg-gray-700"
            >
              Danh Sách
            </router-link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  </aside>
</template>

<script setup lang="ts">
  import { Button } from '@/components/ui/button';
  import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from '@/components/ui/accordion';

  defineProps<{
    isSidebarOpen: boolean;
  }>();

  defineEmits<{
    (e: 'toggle-sidebar'): void;
  }>();
</script>
