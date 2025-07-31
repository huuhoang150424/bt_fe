<template>
  <div class="container mx-auto p-4">
    <h1 class="text-[20px] font-bold text-[hsl(var(--primary))] mb-4">
      Thêm bài viết mới
    </h1>

    <form @submit.prevent="handleCreatePost" class="space-y-4">
      <div>
        <Label
          for="title"
          class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
        >
          Tiêu đề
        </Label>
        <Input
          id="title"
          v-model="form.title"
          :class="{ 'border-red-500': errors.title }"
          class="p-2 text-[15px] border-gray-200 focus:ring-[hsl(var(--primary))] transition-all"
          placeholder="Nhập tiêu đề bài viết"
        />
        <p
          v-if="errors.title"
          class="text-red-500 text-[13px] mt-1"
        >
          {{ errors.title }}
        </p>
      </div>

      <div>
        <Label
          for="content"
          class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
        >
          Nội dung
        </Label>
        <Textarea
          id="content"
          v-model="form.content"
          :class="{ 'border-red-500': errors.content }"
          class="p-2 text-[15px] border-gray-200 focus:ring-[hsl(var(--primary))] transition-all"
          placeholder="Nhập nội dung bài viết"
          rows="6"
        />
        <p
          v-if="errors.content"
          class="text-red-500 text-[13px] mt-1"
        >
          {{ errors.content }}
        </p>
      </div>

      <div>
        <Label
          for="category"
          class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
        >
          Danh mục
        </Label>
        <Select
          v-model="form.categoryId"
          :class="{ 'border-red-500': errors.categoryId }"
          :disabled="isLoadingCategories"
        >
          <SelectTrigger
            class="p-2 text-[15px] border-gray-200 focus:ring-[hsl(var(--primary))] transition-all"
          >
            <SelectValue
              :placeholder="isLoadingCategories ? 'Đang tải danh mục...' : 'Chọn danh mục'"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-if="categories.length === 0 && !isLoadingCategories"
              value=""
              disabled
            >
              Không có danh mục nào
            </SelectItem>
            <SelectItem
              v-for="category in sortedCategories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </SelectItem>
          </SelectContent>
        </Select>
        <p
          v-if="errors.categoryId"
          class="text-red-500 text-[13px] mt-1"
        >
          {{ errors.categoryId }}
        </p>
        <p
          v-if="categoryError"
          class="text-red-500 text-[13px] mt-1"
        >
          {{ categoryError }}
        </p>
      </div>

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
        <p
          v-if="errors.image"
          class="text-red-500 text-[13px] mt-1"
        >
          {{ errors.image }}
        </p>
      </div>

      <div
        v-if="imagePreview"
        class="mt-4"
      >
        <p class="text-[15px] text-[hsl(var(--foreground))] mb-2">
          Xem trước ảnh:
        </p>
        <img
          :src="imagePreview"
          alt="Preview"
          class="max-w-[300px] h-auto border border-gray-200 rounded-md"
        />
      </div>

      <p
        v-if="serverError"
        class="text-red-500 text-[13px]"
      >
        {{ serverError }}
      </p>

      <div class="flex justify-end gap-2">
        <Button
          type="button"
          variant="secondary"
          class="text-[15px] px-4 py-2"
          @click="resetForm"
          :disabled="isSubmitting"
        >
          Hủy
        </Button>
        <Button
          type="submit"
          class="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-[15px] px-4 py-2 hover:bg-opacity-90 transition-colors"
          :disabled="isSubmitting || isLoadingCategories"
        >
          {{ isSubmitting ? 'Đang tạo...' : 'Tạo bài viết' }}
        </Button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
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
import { useToast } from '@/components/ui/toast';
import { postSchema } from './schema';
import api from '@/services/api';
import { toast } from "sonner";

const router = useRouter();

const form = ref({
  title: '',
  content: '',
  categoryId: '',
  image: null,
});
const categories = ref([]);
const imagePreview = ref(null);
const errors = ref({});
const serverError = ref(null);
const isSubmitting = ref(false);
const isLoadingCategories = ref(false);
const categoryError = ref(null);

onMounted(async () => {
  await fetchCategories();
});

const fetchCategories = async () => {
  isLoadingCategories.value = true;
  categoryError.value = null;
  try {
    const response = await api.get('/categories');
    categories.value = response.data || [];
    if (categories.value.length === 0) {
      categoryError.value = 'Không có danh mục nào. Vui lòng tạo danh mục trước.';
    }
  } catch (error) {
    categoryError.value = 'Không thể tải danh sách danh mục';
  } finally {
    isLoadingCategories.value = false;
  }
};

const sortedCategories = computed(() => {
  return [...categories.value].sort((a, b) => a.name.localeCompare(b.name));
});

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  form.value.image = file;
  if (file) {
    imagePreview.value = URL.createObjectURL(file);
  } else {
    imagePreview.value = null;
  }
};

const validateForm = async () => {
  try {
    await postSchema.validate(form.value, { abortEarly: false });
    errors.value = {};
    return true;
  } catch (error) {
    errors.value = error.inner.reduce((acc, curr) => {
      acc[curr.path] = curr.message;
      return acc;
    }, {});
    return false;
  }
};

const handleCreatePost = async () => {
  serverError.value = null;
  const isValid = await validateForm();
  if (!isValid) return;

  if (categories.value.length === 0) {
    categoryError.value = 'Vui lòng tạo ít nhất một danh mục trước khi tạo bài viết';
    return;
  }

  isSubmitting.value = true;
  const formData = new FormData();
  formData.append('title', form.value.title);
  formData.append('content', form.value.content);
  formData.append('categoryId', form.value.categoryId);
  if (form.value.image) {
    formData.append('file', form.value.image);
  }
formData.forEach((value, key) => {
  console.log(`${key}:`, value);
});

  try {
    await api.post('/post', formData);
    alert('Tạo bài đăng thành công')
    resetForm();
    //router.push('/posts');
  } catch (error) {
    serverError.value = error.message || 'Có lỗi xảy ra khi tạo bài viết';
    alert('Lỗi tạo bài viết')
  } finally {
    isSubmitting.value = false;
  }
};

const resetForm = () => {
  form.value = { title: '', content: '', categoryId: '', image: null };
  imagePreview.value = null;
  errors.value = {};
  serverError.value = null;
  categoryError.value = null;
};
</script>
