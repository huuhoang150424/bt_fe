<template>
  <div
    class="min-h-screen flex font-sans text-[15px] text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
  >
    <NavBar :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
    <div class="flex-1 flex flex-col">
      <Header
        :isSidebarOpen="isSidebarOpen"
        :isDarkMode="isDarkMode"
        @toggle-theme="toggleTheme"
      />
      <main class="flex-1 p-6 bg-gray-100 dark:bg-gray-900">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterView } from 'vue-router';
  import NavBar from '@/components/admin/nav-bar.vue';
  import Header from '@/components/admin/header.vue';

  const isSidebarOpen = ref(true);
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  const isDarkMode = ref(false);
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark');
  };
</script>
