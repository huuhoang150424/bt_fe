<template>
  <div class="container mx-auto p-4">
    <!-- Tiêu đề -->
    <h1 class="text-[20px] font-bold text-[hsl(var(--primary))] mb-4">
      Quản lý bài viết
    </h1>

    <!-- Bảng bài viết -->
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
              post.createdAt
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

    <!-- Phân trang -->
    <!-- <Pagination
      :current-page="page"
      :total-pages="totalPages"
      @update:current-page="page = $event"
      class="mt-4"
    /> -->

    <!-- Dialog sửa bài viết -->
    <Dialog v-model:open="isEditDialogOpen">
      <DialogContent
        class="sm:max-w-[425px] bg-[hsl(var(--background))] rounded-md"
      >
        <DialogHeader>
          <DialogTitle class="text-[18px] font-bold text-[hsl(var(--primary))]"
            >Sửa bài viết</DialogTitle
          >
        </DialogHeader>
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
                class="p-2 text-[15px] border-gray-200 focus:ring-[hsl(var(--primary))] transition-all"
                placeholder="Nhập tiêu đề bài viết"
                required
              />
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
                class="p-2 text-[15px] border-gray-200 focus:ring-[hsl(var(--primary))] transition-all"
                placeholder="Nhập nội dung bài viết"
                rows="6"
                required
              />
            </div>

            <!-- Danh mục -->
            <div>
              <Label
                for="category"
                class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
              >
                Danh mục
              </Label>
              <Select v-model="editPost.categoryId">
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
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="secondary"
              class="text-[15px]"
              @click="isEditDialogOpen = false"
            >
              Hủy
            </Button>
            <Button
              type="submit"
              class="text-[15px] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-opacity-90 transition-colors"
            >
              Lưu
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>

    <!-- Dialog xóa bài viết -->
    <Dialog v-model:open="isDeleteDialogOpen">
      <DialogContent
        class="sm:max-w-[425px] bg-[hsl(var(--background))] rounded-md"
      >
        <DialogHeader>
          <DialogTitle class="text-[18px] font-bold text-[hsl(var(--primary))]"
            >Xác nhận xóa</DialogTitle
          >
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
          >
            Hủy
          </Button>
          <Button
            variant="destructive"
            class="text-[15px]"
            @click="handleDeletePost"
          >
            Xóa
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
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

  // Dữ liệu mẫu
  const categories = ref([
    { id: '1', name: 'Danh mục 1' },
    { id: '2', name: 'Danh mục 2' },
    { id: '3', name: 'Danh mục 3' },
  ]);

  const posts = ref([
    {
      id: '1',
      title: 'Bài viết 1',
      content: 'Nội dung bài viết 1',
      categoryId: '1',
      createdAt: '01/01/2025 10:00',
      imageUrl: '',
    },
    {
      id: '2',
      title: 'Bài viết 2',
      content: 'Nội dung bài viết 2',
      categoryId: '2',
      createdAt: '03/01/2025 14:00',
      imageUrl: '',
    },
    {
      id: '3',
      title: 'Bài viết 3',
      content: 'Nội dung bài viết 3',
      categoryId: '3',
      createdAt: '05/01/2025 09:00',
      imageUrl: '',
    },
  ]);

  const page = ref(1);
  const totalPages = ref(5);
  const isEditDialogOpen = ref(false);
  const isDeleteDialogOpen = ref(false);
  const editPost = ref({
    id: '',
    title: '',
    content: '',
    categoryId: '',
  });
  const imagePreview = ref(null);
  const deletePostId = ref(null);
  const deletePostTitle = ref('');

  // Lấy tên danh mục
  const getCategoryName = categoryId => {
    const category = categories.value.find(cat => cat.id === categoryId);
    return category ? category.name : 'Không xác định';
  };

  // Xử lý tải ảnh
  const handleImageUpload = event => {
    const file = event.target.files[0];
    if (file) {
      imagePreview.value = URL.createObjectURL(file);
    } else {
      imagePreview.value = null;
    }
  };

  // Mở dialog sửa
  const openEditDialog = post => {
    editPost.value = { ...post };
    imagePreview.value = post.imageUrl || null;
    isEditDialogOpen.value = true;
  };

  // Xử lý sửa bài viết (giả lập)
  const handleEditPost = () => {
    console.log('Sửa bài viết:', editPost.value, 'Ảnh:', imagePreview.value);
    editPost.value = { id: '', title: '', content: '', categoryId: '' };
    imagePreview.value = null;
    isEditDialogOpen.value = false;
  };

  // Mở dialog xóa
  const openDeleteDialog = (id, title) => {
    deletePostId.value = id;
    deletePostTitle.value = title;
    isDeleteDialogOpen.value = true;
  };

  // Xử lý xóa bài viết (giả lập)
  const handleDeletePost = () => {
    console.log('Xóa bài viết:', deletePostId.value);
    isDeleteDialogOpen.value = false;
    deletePostId.value = null;
    deletePostTitle.value = '';
  };
</script>
