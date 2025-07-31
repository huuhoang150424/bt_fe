<template>
  <div class="container mx-auto p-4">
    <!-- Tiêu đề -->
    <h1 class="text-[20px] font-bold text-[hsl(var(--primary))] mb-4">
      Quản lý danh mục
    </h1>

    <!-- Bảng danh mục -->
    <div class="border border-gray-200 rounded-md">
      <Table>
        <TableHeader>
          <TableRow class="border-gray-200">
            <TableHead
              class="p-3 text-[15px] font-semibold text-[hsl(var(--secondary-foreground))]"
            >
              Tên danh mục
            </TableHead>
            <TableHead
              class="p-3 text-[15px] font-semibold text-[hsl(var(--secondary-foreground))]"
            >
              Ngày tạo
            </TableHead>
            <TableHead
              class="p-3 text-[15px] font-semibold text-[hsl(var(--secondary-foreground))]"
            >
              Ngày cập nhật
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
            v-for="category in categories"
            :key="category.id"
            class="border-gray-200 hover:bg-[hsl(var(--muted))]"
          >
            <TableCell class="p-3 text-[15px] text-[hsl(var(--foreground))]">{{
              category.name
            }}</TableCell>
            <TableCell class="p-3 text-[15px] text-[hsl(var(--foreground))]">{{
              category.createdAt
            }}</TableCell>
            <TableCell class="p-3 text-[15px] text-[hsl(var(--foreground))]">{{
              category.updatedAt
            }}</TableCell>
            <TableCell class="p-3 flex gap-2">
              <Button
                class="text-[15px] px-3 py-1 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-opacity-90 transition-colors"
                @click="openEditDialog(category)"
              >
                Sửa
              </Button>
              <Button
                variant="destructive"
                class="text-[15px] px-3 py-1"
                @click="openDeleteDialog(category.id, category.name)"
              >
                Xóa
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <!-- Phân trang (đã comment) -->
    <!-- <Paginate
      :current-page="page"
      :total-pages="totalPages"
      @update:current-page="page = $event"
      class="mt-4"
    /> -->

    <!-- Dialog sửa danh mục -->
    <Dialog v-model:open="isEditDialogOpen">
      <DialogContent
        class="sm:max-w-[425px] bg-[hsl(var(--background))] rounded-md"
      >
        <DialogHeader>
          <DialogTitle class="text-[18px] font-bold text-[hsl(var(--primary))]"
            >Sửa danh mục</DialogTitle
          >
        </DialogHeader>
        <form @submit.prevent="handleEditCategory">
          <div class="space-y-4 p-6">
            <div>
              <label
                class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
                for="name"
              >
                Tên danh mục
              </label>
              <Input
                id="name"
                v-model="editCategory.name"
                class="p-2 text-[15px] border-gray-200 focus:ring-[hsl(var(--primary))] transition-all"
                required
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

    <!-- Dialog xóa danh mục -->
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
            Bạn có chắc muốn xóa danh mục "<strong>{{
              deleteCategoryName
            }}</strong
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
            @click="handleDeleteCategory"
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
  import Paginate from '@/components/admin/paginate.vue';

  // Dữ liệu mẫu
  const categories = ref([
    {
      id: '1',
      name: 'Danh mục 1',
      createdAt: '01/01/2025 10:00',
      updatedAt: '02/01/2025 12:00',
    },
    {
      id: '2',
      name: 'Danh mục 2',
      createdAt: '03/01/2025 14:00',
      updatedAt: '04/01/2025 16:00',
    },
    {
      id: '3',
      name: 'Danh mục 3',
      createdAt: '05/01/2025 09:00',
      updatedAt: '06/01/2025 11:00',
    },
  ]);

  const page = ref(1);
  const totalPages = ref(5);
  const isEditDialogOpen = ref(false);
  const isDeleteDialogOpen = ref(false);
  const editCategory = ref({
    id: '',
    name: '',
  });
  const deleteCategoryId = ref(null);
  const deleteCategoryName = ref('');

  // Mở dialog sửa
  const openEditDialog = category => {
    editCategory.value = { ...category };
    isEditDialogOpen.value = true;
  };

  // Xử lý sửa danh mục (giả lập)
  const handleEditCategory = () => {
    console.log('Sửa danh mục:', editCategory.value);
    editCategory.value = { id: '', name: '' };
    isEditDialogOpen.value = false;
  };

  // Mở dialog xóa
  const openDeleteDialog = (id, name) => {
    deleteCategoryId.value = id;
    deleteCategoryName.value = name;
    isDeleteDialogOpen.value = true;
  };

  // Xử lý xóa danh mục (giả lập)
  const handleDeleteCategory = () => {
    console.log('Xóa danh mục:', deleteCategoryId.value);
    isDeleteDialogOpen.value = false;
    deleteCategoryId.value = null;
    deleteCategoryName.value = '';
  };
</script>
