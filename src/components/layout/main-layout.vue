<script setup lang="ts">
  import { RouterView } from 'vue-router';
<<<<<<< HEAD
  import Header from '@/components/header.vue';
  import Footer from '@/components/footer.vue';
=======
  import Header from '@/components/user/header.vue';
  import Footer from '@/components/user/footer.vue';
>>>>>>> 90bce0762bc6abc436905e6608bed34490f8e9b7
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
