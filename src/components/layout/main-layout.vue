<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import Header from '@/components/user/header.vue';
  import Footer from '@/components/user/footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
