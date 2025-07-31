<template>
  <div class="container mx-auto p-4">
    <h1 class="text-[20px] font-bold text-[hsl(var(--primary))] mb-4">
      Quản lý bài viết
    </h1>

    <div class="border border-gray-200 rounded-md">
      <Table>
        <TableHeader>
          <TableRow class="border-gray-200">
            <TableHead
              class="p-3 text-[15px] font-semibold text-[hsl(var(--secondary-foreground))]"
            >
              Tiêu đề
            </TableHead>
            <TableHead
              class="p-3 text-[15px] font-semibold text-[hsl(var(--secondary-foreground))]"
            >
              Danh mục
            </TableHead>
            <TableHead
              class="p-3 text-[15px] font-semibold text-[hsl(var(--secondary-foreground))]"
            >
              Ngày tạo
            </TableHead>
            <TableHead
              class="p-3 text-[15px] font-semibold text-[hsl(var(--secondary-foreground))]"
            >
              Hành động
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-if="isLoadingPosts"
            class="border-gray-200"
          >
            <TableCell
              colspan="4"
              class="p-3 text-center text-[15px] text-[hsl(var(--foreground))]"
            >
              Đang tải...
            </TableCell>
          </TableRow>
          <TableRow
            v-else-if="posts.length === 0"
            class="border-gray-200"
          >
            <TableCell
              colspan="4"
              class="p-3 text-center text-[15px] text-[hsl(var(--foreground))]"
            >
              Không có bài viết nào
            </TableCell>
          </TableRow>
          <TableRow
            v-for="post in posts"
            :key="post.id"
            class="border-gray-200 hover:bg-[hsl(var(--muted))]"
          >
            <TableCell class="p-3 text-[15px] text-[hsl(var(--foreground))]">{{
              post.title
            }}</TableCell>
            <TableCell class="p-3 text-[15px] text-[hsl(var(--foreground))]">{{
              getCategoryName(post.categoryId)
            }}</TableCell>
            <TableCell class="p-3 text-[15px] text-[hsl(var(--foreground))]">{{
              formatDate(post.createdAt)
            }}</TableCell>
            <TableCell class="p-3 flex gap-2">
              <Button
                class="text-[15px] px-3 py-1 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-opacity-90 transition-colors"
                @click="openEditDialog(post)"
              >
                Sửa
              </Button>
              <Button
                variant="destructive"
                class="text-[15px] px-3 py-1"
                @click="openDeleteDialog(post.id, post.title)"
              >
                Xóa
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <p
      v-if="error"
      class="text-red-500 text-[13px] mt-2"
    >
      {{ error }}
    </p>

    <!-- Phân trang -->
    <!-- <Paginate
      v-if="totalPages > 1"
      :current-page="page"
      :total-pages="totalPages"
      @update:current-page="page = $event"
      class="mt-4"
    /> -->

    <!-- Dialog sửa bài viết -->
    <Dialog
      :open="isEditDialogOpen"
      @update:open="closeEditDialog"
    >
      <DialogContent
        class="sm:max-w-[600px] max-h-[600px] bg-[hsl(var(--background))] rounded-md overflow-hidden flex flex-col"
      >
        <DialogHeader class="flex-shrink-0">
          <DialogTitle class="text-[18px] font-bold text-[hsl(var(--primary))]">
            Sửa bài viết
          </DialogTitle>
        </DialogHeader>

        <!-- Scrollable content area -->
        <div class="flex-1 overflow-y-auto">
          <form @submit.prevent="handleEditPost">
            <div class="space-y-4 p-6">
              <!-- Tiêu đề -->
              <div>
                <Label
                  for="title"
                  class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
                >
                  Tiêu đề
                </Label>
                <Input
                  id="title"
                  v-model="editPost.title"
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

              <!-- Nội dung -->
              <div>
                <Label
                  for="content"
                  class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
                >
                  Nội dung
                </Label>
                <Textarea
                  id="content"
                  v-model="editPost.content"
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

              <!-- Danh mục -->
              <div>
                <Label
                  for="category"
                  class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
                >
                  Danh mục
                </Label>
                <Select
                  v-model="editPost.categoryId"
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
                <p
                  v-if="errors.image"
                  class="text-red-500 text-[13px] mt-1"
                >
                  {{ errors.image }}
                </p>
              </div>

              <!-- Preview ảnh -->
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

              <!-- Thông báo lỗi server -->
              <p
                v-if="serverError"
                class="text-red-500 text-[13px]"
              >
                {{ serverError }}
              </p>
            </div>
          </form>
        </div>

        <!-- Fixed footer -->
        <DialogFooter class="flex-shrink-0 border-t border-gray-200 p-4">
          <Button
            type="button"
            variant="secondary"
            class="text-[15px]"
            @click="closeEditDialog"
            :disabled="isSubmitting"
          >
            Hủy
          </Button>
          <Button
            type="button"
            class="text-[15px] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-opacity-90 transition-colors"
            :disabled="isSubmitting"
            @click="handleEditPost"
          >
            {{ isSubmitting ? 'Đang lưu...' : 'Lưu' }}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <!-- Dialog xóa bài viết -->
    <Dialog v-model:open="isDeleteDialogOpen">
      <DialogContent
        class="sm:max-w-[425px] bg-[hsl(var(--background))] rounded-md"
      >
        <DialogHeader>
          <DialogTitle class="text-[18px] font-bold text-[hsl(var(--primary))]">
            Xác nhận xóa
          </DialogTitle>
        </DialogHeader>
        <div class="p-6">
          <p class="text-[15px] text-[hsl(var(--foreground))]">
            Bạn có chắc muốn xóa bài viết "<strong>{{ deletePostTitle }}</strong
            >" không?
          </p>
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="secondary"
            class="text-[15px]"
            @click="isDeleteDialogOpen = false"
            :disabled="isSubmitting"
          >
            Hủy
          </Button>
          <Button
            variant="destructive"
            class="text-[15px]"
            @click="handleDeletePost"
            :disabled="isSubmitting"
          >
            Xóa
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/toast';
import api from '@/services/api';
import { postSchema } from './schema';
import Paginate from '@/components/admin/paginate.vue';

const { toast } = useToast();

const posts = ref([]);
const categories = ref([]);
const page = ref(1);
const totalPages = ref(1);
const isLoadingPosts = ref(false);
const isLoadingCategories = ref(false);
const isEditDialogOpen = ref(false);
const isDeleteDialogOpen = ref(false);
const editPost = ref({
  id: '',
  title: '',
  content: '',
  categoryId: '',
  image: null,
});
const imagePreview = ref(null);
const deletePostId = ref(null);
const deletePostTitle = ref('');
const error = ref(null);
const serverError = ref(null);
const categoryError = ref(null);
const isSubmitting = ref(false);

onMounted(async () => {
  await Promise.all([fetchCategories(), fetchPosts()]);
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
    toast({
      title: 'Lỗi',
      description: 'Không thể tải danh sách danh mục',
      variant: 'destructive',
    });
  } finally {
    isLoadingCategories.value = false;
  }
};

const fetchPosts = async () => {
  isLoadingPosts.value = true;
  error.value = null;
  try {
    const response = await api.get(`/post?page=${page.value}&limit=10`);
    posts.value = response.data || [];
    totalPages.value = response.pagination?.totalPages || 1;
  } catch (err) {
    error.value = err.message || 'Không thể tải danh sách bài viết';
    toast({
      title: 'Lỗi',
      description: error.value,
      variant: 'destructive',
    });
  } finally {
    isLoadingPosts.value = false;
  }
};

const sortedCategories = computed(() => {
  return [...categories.value].sort((a, b) => a.name.localeCompare(b.name));
});

const getCategoryName = (categoryId) => {
  if (!categoryId) return 'Không có danh mục';
  const category = categories.value.find(cat => cat.id === categoryId);
  return category ? category.name : 'Không xác định';
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  editPost.value.image = file;
  if (file) {
    if (imagePreview.value) {
      URL.revokeObjectURL(imagePreview.value);
    }
    imagePreview.value = URL.createObjectURL(file);
  } else {
    imagePreview.value = null;
  }
};

const openEditDialog = (post) => {
  editPost.value = {
    id: post.id,
    title: post.title,
    content: post.content,
    categoryId: post.categoryId || '',
    image: null,
  };
  imagePreview.value = post.imageUrl || null;
  errors.value = {};
  serverError.value = null;
  categoryError.value = null;
  isEditDialogOpen.value = true;
};

const closeEditDialog = () => {
  isEditDialogOpen.value = false;
  resetEditForm();
};

const errors = ref({});
const validateEditForm = async () => {
  try {
    await postSchema.validate(editPost.value, { abortEarly: false });
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

const handleEditPost = async () => {
  serverError.value = null;
  const isValid = await validateEditForm();
  if (!isValid) return;

  if (categories.value.length === 0) {
    serverError.value = 'Vui lòng tạo ít nhất một danh mục trước khi chỉnh sửa';
    return;
  }

  if (editPost.value.categoryId) {
    const categoryExists = categories.value.some(cat => cat.id === editPost.value.categoryId);
    if (!categoryExists) {
      errors.value.categoryId = 'Danh mục đã chọn không hợp lệ hoặc không tồn tại';
      return;
    }
  }

  isSubmitting.value = true;
  const formData = new FormData();
  formData.append('title', editPost.value.title);
  formData.append('content', editPost.value.content);
  if (editPost.value.categoryId) {
    formData.append('categoryId', editPost.value.categoryId);
  }
  if (editPost.value.image) {
    formData.append('file', editPost.value.image);
  }

  try {
    await api.put(`/post/${editPost.value.id}`, formData);
    await fetchPosts();
    closeEditDialog();
  } catch (err) {
    const errorMessage = err.response?.data?.message || err.message || 'Có lỗi khi cập nhật bài viết';
    serverError.value = Array.isArray(errorMessage) ? errorMessage.join(', ') : errorMessage;
  } finally {
    isSubmitting.value = false;
  }
};

const openDeleteDialog = (id, title) => {
  deletePostId.value = id;
  deletePostTitle.value = title;
  isDeleteDialogOpen.value = true;
};

const handleDeletePost = async () => {
  isSubmitting.value = true;
  try {
    await api.delete(`/post/${deletePostId.value}`);
    toast({
      title: 'Thành công',
      description: 'Bài viết đã được xóa',
    });
    await fetchPosts();
    isDeleteDialogOpen.value = false;
    deletePostId.value = null;
    deletePostTitle.value = '';
  } catch (err) {
    toast({
      title: 'Lỗi',
      description: err.message || 'Không thể xóa bài viết',
      variant: 'destructive',
    });
  } finally {
    isSubmitting.value = false;
  }
};

const resetEditForm = () => {
  editPost.value = { id: '', title: '', content: '', categoryId: '', image: null };
  if (imagePreview.value) {
    URL.revokeObjectURL(imagePreview.value);
  }
  imagePreview.value = null;
  errors.value = {};
  serverError.value = null;
  categoryError.value = null;
};
</script>
