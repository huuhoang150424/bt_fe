<template>
  <div class="container mx-auto p-4">
    <!-- Tiêu đề -->
    <h1 class="text-[20px] font-bold text-[hsl(var(--primary))] mb-4">
      Thêm bài viết mới
    </h1>

    <!-- Form thêm bài viết -->
    <form @submit.prevent="handleCreatePost" class="space-y-4">
      <!-- Tiêu đề bài viết -->
      <div>
        <Label
          for="title"
          class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
        >
          Tiêu đề
        </Label>
        <Input
          id="title"
          v-model="post.title"
          class="p-2 text-[15px] border-gray-200 focus:ring-[hsl(var(--primary))] transition-all"
          placeholder="Nhập tiêu đề bài viết"
          required
        />
      </div>

      <!-- Nội dung bài viết -->
      <div>
        <Label
          for="content"
          class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
        >
          Nội dung
        </Label>
        <Textarea
          id="content"
          v-model="post.content"
          class="p-2 text-[15px] border-gray-200 focus:ring-[hsl(var(--primary))] transition-all"
          placeholder="Nhập nội dung bài viết"
          rows="6"
          required
        />
      </div>

      <!-- Chọn danh mục -->
      <div>
        <Label
          for="category"
          class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
        >
          Danh mục
        </Label>
        <Select v-model="post.categoryId">
          <SelectTrigger
            class="p-2 text-[15px] border-gray-200 focus:ring-[hsl(var(--primary))] transition-all"
          >
            <SelectValue placeholder="Chọn danh mục" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <!-- Tải lên ảnh -->
      <div>
        <Label
          for="image"
          class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
        >
          Ảnh bài viết
        </Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          class="p-2 text-[15px] border-gray-200 focus:ring-[hsl(var(--primary))] transition-all"
          @change="handleImageUpload"
        />
      </div>

      <!-- Preview ảnh -->
      <div v-if="imagePreview" class="mt-4">
        <p class="text-[15px] text-[hsl(var(--foreground))] mb-2">
          Xem trước ảnh:
        </p>
        <img
          :src="imagePreview"
          alt="Preview"
          class="max-w-[300px] h-auto border border-gray-200 rounded-md"
        />
      </div>

      <!-- Nút hành động -->
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          variant="secondary"
          class="text-[15px] px-4 py-2"
          @click="resetForm"
        >
          Hủy
        </Button>
        <Button
          type="submit"
          class="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-[15px] px-4 py-2 hover:bg-opacity-90 transition-colors"
        >
          Tạo bài viết
        </Button>
      </div>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { Input } from '@/components/ui/input';
  import { Textarea } from '@/components/ui/textarea';
  import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from '@/components/ui/select';
  import { Button } from '@/components/ui/button';
  import { Label } from '@/components/ui/label';

  // Dữ liệu mẫu
  const categories = ref([
    { id: '1', name: 'Danh mục 1' },
    { id: '2', name: 'Danh mục 2' },
    { id: '3', name: 'Danh mục 3' },
  ]);

  const post = ref({
    title: '',
    content: '',
    categoryId: '',
  });

  const imagePreview = ref(null);

  // Xử lý tải ảnh và preview
  const handleImageUpload = event => {
    const file = event.target.files[0];
    if (file) {
      imagePreview.value = URL.createObjectURL(file);
    } else {
      imagePreview.value = null;
    }
  };

  // Xử lý tạo bài viết (giả lập)
  const handleCreatePost = () => {
    console.log('Tạo bài viết:', post.value, 'Ảnh:', imagePreview.value);
    resetForm();
  };

  // Reset form
  const resetForm = () => {
    post.value = { title: '', content: '', categoryId: '' };
    imagePreview.value = null;
  };
</script>
