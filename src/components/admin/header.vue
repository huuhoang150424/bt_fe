<template>
  <header
    class="bg-white dark:bg-gray-800 shadow-sm p-4 flex justify-between items-center"
  >
    <div class="flex items-center space-x-4">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
        Chào mừng, Quản trị viên
      </h2>
    </div>
    <div class="flex items-center space-x-4">
      <Button
        variant="ghost"
        size="icon"
        @click="$emit('toggle-theme')"
        aria-label="Chuyển đổi chủ đề"
      >
        <svg
          v-if="isDarkMode"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <svg
          v-else
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" class="flex items-center space-x-2">
            <img
              src="https://ui-avatars.com/api/?name=Quản+trị+viên&size=32"
              alt="Avatar người dùng"
              class="w-8 h-8 rounded-full"
            />
            <span v-if="isSidebarOpen">Quản trị viên</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-48">
          <DropdownMenuItem class="p-0">
            <Button
              @click="handleLogout"
              variant="outline"
              href="#"
              class="border-none shadow-none w-full text-left"
              >Đăng xuất</Button
            >
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { Button } from '@/components/ui/button';
  import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
  } from '@/components/ui/dropdown-menu';
  import { useAuthStore } from '@/stores/auth';
  import { useRouter } from 'vue-router';

  const authStore = useAuthStore();
  const router = useRouter();
  defineProps<{
    isSidebarOpen: boolean;
    isDarkMode: boolean;
  }>();

  defineEmits<{
    (e: 'toggle-theme'): void;
  }>();

  const handleLogout = () => {
    authStore.logout();
    router.push('/login');
  };
</script>
