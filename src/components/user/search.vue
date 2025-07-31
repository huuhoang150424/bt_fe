<template>
<div class="relative w-full max-w-sm">
    <input type="text" v-model="searchQuery" @input="$emit('update:modelValue', searchQuery)" placeholder="Tìm kiếm..." class="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
        <i class="fas fa-search"></i>
    </span>

    <!-- Dropdown kết quả -->
    <ul v-if="results.length && searchQuery.trim()" class="absolute z-50 top-full mt-2 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
        <li v-for="item in results" @click="goToPost(item.id)" :key="item.id" class="p-2 hover:bg-gray-100 cursor-pointer">
            <strong>{{ item.title }}</strong>
            <p class="text-sm text-gray-600">{{ item.excerpt || item.content?.slice(0, 60) + '...' }}</p>
        </li>
        <li v-if="!results.length" class="p-2 text-sm text-gray-500">Không có kết quả</li>
    </ul>
</div>
</template>

<script setup lang="ts">
import {
    ref,
    watch,
    defineProps,
    defineEmits
} from 'vue';
import {
    ApiUrl
} from '@/constant/api-url';
import {
    useRouter
} from 'vue-router';

const router = useRouter();

const props = defineProps < {
    modelValue: string
} > ();
const emit = defineEmits < {
    (e: 'update:modelValue', value: string): void
} > ();

const searchQuery = ref(props.modelValue || '');
const results = ref < any[] > ([]);

watch(() => props.modelValue, val => {
    if (val !== searchQuery.value) {
        searchQuery.value = val;
    }
});

watch(searchQuery, async (val) => {
    emit('update:modelValue', val);
    if (val.trim() === '') {
        results.value = [];
        return;
    }
    try {
        const res = await fetch(`${ApiUrl}/post/search/${val.trim()}`);
        const data = await res.json();
        results.value = data.data || [];
    } catch (err) {
        console.error('Search failed:', err);
        results.value = [];
    }
});

// Điều hướng đến chi tiết bài viết
const goToPost = (postId: string) => {
    router.push(`/news/${postId}`);
    results.value = [];
    searchQuery.value = '';
    emit('update:modelValue', '');
};
</script>

