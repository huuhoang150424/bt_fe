<template>
  <div class="flex items-center justify-between">
    <Button
      class="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-[15px] px-4 py-2 rounded-md disabled:opacity-50 hover:bg-opacity-90 transition-colors shadow-sm"
      :disabled="currentPage === 1"
      @click="emit('update:currentPage', currentPage - 1)"
    >
      Trang trước
    </Button>
    <div class="flex items-center gap-2">
      <span
        v-for="p in pageRange"
        :key="p"
        class="px-3 py-1 text-[15px] rounded-md cursor-pointer transition-colors border border-gray-200"
        :class="{
          'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]':
            p === currentPage,
          'bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--muted))]':
            p !== currentPage,
        }"
        @click="emit('update:currentPage', p)"
      >
        {{ p }}
      </span>
    </div>
    <Button
      class="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-[15px] px-4 py-2 rounded-md disabled:opacity-50 hover:bg-opacity-90 transition-colors shadow-sm"
      :disabled="currentPage === totalPages"
      @click="emit('update:currentPage', currentPage + 1)"
    >
      Trang sau
    </Button>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { Button } from '@/components/ui/button';

  defineProps({
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  });

  const emit = defineEmits(['update:currentPage']);

  // Tạo dải trang hiển thị (tối đa 5 trang)
  const pageRange = computed(() => {
    const range = [];
    const maxPagesToShow = 5;
    let start = Math.max(1, props.currentPage - Math.floor(maxPagesToShow / 2));
    let end = Math.min(props.totalPages, start + maxPagesToShow - 1);

    if (end - start + 1 < maxPagesToShow) {
      start = Math.max(1, end - maxPagesToShow + 1);
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  });
</script>

