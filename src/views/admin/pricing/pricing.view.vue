<template>
  <div class="container mx-auto p-4">
    <!-- Tiêu đề -->
    <h1 class="text-[20px] font-bold text-[hsl(var(--primary))] mb-4">
      Quản lý kế hoạch định giá
    </h1>

    <!-- Bảng kế hoạch định giá -->
    <div class="border border-gray-200 rounded-md">
      <Table>
        <TableHeader>
          <TableRow class="border-gray-200">
            <TableHead
              class="p-3 text-[15px] font-semibold text-[hsl(var(--secondary-foreground))]"
            >
              Tên kế hoạch
            </TableHead>
            <TableHead
              class="p-3 text-[15px] font-semibold text-[hsl(var(--secondary-foreground))]"
            >
              Giá
            </TableHead>
            <TableHead
              class="p-3 text-[15px] font-semibold text-[hsl(var(--secondary-foreground))]"
            >
              Chu kỳ
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
            v-for="plan in pricingPlans"
            :key="plan.id"
            class="border-gray-200 hover:bg-[hsl(var(--muted))]"
          >
            <TableCell class="p-3 text-[15px] text-[hsl(var(--foreground))]">{{
              plan.name
            }}</TableCell>
            <TableCell class="p-3 text-[15px] text-[hsl(var(--foreground))]"
              >{{ plan.price }} {{ plan.currency }}</TableCell
            >
            <TableCell class="p-3 text-[15px] text-[hsl(var(--foreground))]">{{
              plan.period
            }}</TableCell>
            <TableCell class="p-3 text-[15px] text-[hsl(var(--foreground))]">{{
              plan.createdAt
            }}</TableCell>
            <TableCell class="p-3 flex gap-2">
              <Button
                class="text-[15px] px-3 py-1 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-opacity-90 transition-colors"
                @click="openEditDialog(plan)"
              >
                Sửa
              </Button>
              <Button
                variant="destructive"
                class="text-[15px] px-3 py-1"
                @click="openDeleteDialog(plan.id, plan.name)"
              >
                Xóa
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <!-- Phân trang (đã comment) -->
    <!-- <Pagination
      :current-page="page"
      :total-pages="totalPages"
      @update:current-page="page = $event"
      class="mt-4"
    /> -->

    <!-- Dialog sửa kế hoạch -->
    <Dialog v-model:open="isEditDialogOpen">
      <DialogContent
        class="sm:max-w-[425px] bg-[hsl(var(--background))] rounded-md"
      >
        <DialogHeader>
          <DialogTitle class="text-[18px] font-bold text-[hsl(var(--primary))]"
            >Sửa kế hoạch</DialogTitle
          >
        </DialogHeader>
        <form @submit.prevent="handleEditPlan">
          <div class="space-y-4 p-6">
            <div>
              <label
                class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
                for="name"
              >
                Tên kế hoạch
              </label>
              <Input
                id="name"
                v-model="editPlan.name"
                class="p-2 text-[15px] border-gray-200 focus:ring-[hsl(var(--primary))] transition-all"
                required
              />
            </div>
            <div>
              <label
                class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
                for="description"
              >
                Mô tả
              </label>
              <Textarea
                id="description"
                v-model="editPlan.description"
                class="p-2 text-[15px] border-gray-200 focus:ring-[hsl(var(--primary))] transition-all"
                required
              />
            </div>
            <div>
              <label
                class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
                for="price"
              >
                Giá
              </label>
              <Input
                id="price"
                type="number"
                v-model="editPlan.price"
                class="p-2 text-[15px] border-gray-200 focus:ring-[hsl(var(--primary))] transition-all"
                required
              />
            </div>
            <div>
              <label
                class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
                for="currency"
              >
                Đơn vị tiền tệ
              </label>
              <Input
                id="currency"
                v-model="editPlan.currency"
                class="p-2 text-[15px] border-gray-200 focus:ring-[hsl(var(--primary))] transition-all"
                required
              />
            </div>
            <div>
              <label
                class="block text-[15px] text-[hsl(var(--foreground))] mb-2"
                for="period"
              >
                Chu kỳ
              </label>
              <Input
                id="period"
                v-model="editPlan.period"
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

    <!-- Dialog xóa kế hoạch -->
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
            Bạn có chắc muốn xóa kế hoạch "<strong>{{ deletePlanName }}</strong
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
            @click="handleDeletePlan"
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

  // Dữ liệu mẫu
  const pricingPlans = ref([
    {
      id: '1',
      name: 'Cơ bản',
      description: 'Gói cơ bản cho người mới',
      price: 100000,
      currency: 'VND',
      period: 'month',
      createdAt: '01/01/2025 10:00',
    },
    {
      id: '2',
      name: 'Nâng cao',
      description: 'Gói nâng cao cho doanh nghiệp',
      price: 200000,
      currency: 'VND',
      period: 'month',
      createdAt: '03/01/2025 14:00',
    },
    {
      id: '3',
      name: 'Pro',
      description: 'Gói chuyên nghiệp với đầy đủ tính năng',
      price: 500000,
      currency: 'VND',
      period: 'month',
      createdAt: '05/01/2025 09:00',
    },
  ]);

  const page = ref(1);
  const totalPages = ref(5);
  const isEditDialogOpen = ref(false);
  const isDeleteDialogOpen = ref(false);
  const editPlan = ref({
    id: '',
    name: '',
    description: '',
    price: 0,
    currency: 'VND',
    period: 'month',
  });
  const deletePlanId = ref(null);
  const deletePlanName = ref('');

  // Mở dialog sửa
  const openEditDialog = plan => {
    editPlan.value = { ...plan };
    isEditDialogOpen.value = true;
  };

  // Xử lý sửa kế hoạch (giả lập)
  const handleEditPlan = () => {
    console.log('Sửa kế hoạch:', editPlan.value);
    editPlan.value = {
      id: '',
      name: '',
      description: '',
      price: 0,
      currency: 'VND',
      period: 'month',
    };
    isEditDialogOpen.value = false;
  };

  // Mở dialog xóa
  const openDeleteDialog = (id, name) => {
    deletePlanId.value = id;
    deletePlanName.value = name;
    isDeleteDialogOpen.value = true;
  };

  // Xử lý xóa kế hoạch (giả lập)
  const handleDeletePlan = () => {
    console.log('Xóa kế hoạch:', deletePlanId.value);
    isDeleteDialogOpen.value = false;
    deletePlanId.value = null;
    deletePlanName.value = '';
  };
</script>
