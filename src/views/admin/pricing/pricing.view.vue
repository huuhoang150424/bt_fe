<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useForm, useFieldArray } from 'vee-validate';
import { pricingSchema } from './schema'
import { ApiUrl } from '@/constant/api-url';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

type Feature = { name: string; included?: boolean };
type PricingForm = {
  id: string | null;
  name: string;
  description: string;
  price: number;
  currency?: string;
  period?: string;
  features: Feature[];
};

// Fetch danh sách
const pricings = ref<PricingForm[]>([]);

const fetchPricings = async () => {
  const res = await fetch(`${ApiUrl}/pricings/get-all`, {
    headers: {
      'Content-Type': 'application/json',
       Authorization: authStore.authHeader?.Authorization ?? '',
    },
  });
  const data = await res.json();
  pricings.value = data.data || [];
};

// Form + Validation
const {
  handleSubmit,
  resetForm,
  values,
  errors,
  setValues,
} = useForm<PricingForm>({
  validationSchema: pricingSchema,
  initialValues: {
    id: null,
    name: '',
    description: '',
    price: 0,
    currency: '',
    period: '',
    features: [{ name: '', included: false }],
  },
});

const { fields: featureFields, push, remove } = useFieldArray<Feature>('features');

const submitPricing = handleSubmit(async formData => {
  try {
    const method = formData.id ? 'PATCH' : 'POST';
    const url = formData.id
      ? `${ApiUrl}/pricings/update/${formData.id}`
      : `${ApiUrl}/pricings/create`;

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
         Authorization: authStore.authHeader?.Authorization ?? '',
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error('Lỗi khi xử lý');
    await fetchPricings();
    resetForm();
  } catch (err) {
    console.error(err);
    alert('Lỗi xử lý dữ liệu');
  }
});

const editPricing = (p: PricingForm) => {
  setValues({ ...p });
};

const deletePricing = async (id: string) => {
  if (!confirm('Xoá gói này?')) return;
  await fetch(`${ApiUrl}/pricings/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
       Authorization: authStore.authHeader?.Authorization ?? '',
    },
  });
  await fetchPricings();
};

onMounted(fetchPricings);
</script>

<template>
  <div class="p-6 space-y-6">
    <h1 class="text-2xl font-bold">Quản lý Gói Giá</h1>

    <!-- FORM -->
    <form @submit.prevent="submitPricing" class="grid md:grid-cols-2 gap-4 items-start">
      <div>
        <label class="text-sm font-medium">Tên gói *</label>
        <input v-model="values.name" class="border px-3 py-2 rounded w-full" />
        <p class="text-red-500 text-sm">{{ errors.name }}</p>
      </div>

      <div>
        <label class="text-sm font-medium">Giá *</label>
        <input
          v-model="values.price"
          type="number"
          class="border px-3 py-2 rounded w-full"
        />
        <p class="text-red-500 text-sm">{{ errors.price }}</p>
      </div>

      <div class="md:col-span-2">
        <label class="text-sm font-medium">Mô tả *</label>
        <textarea
          v-model="values.description"
          class="border px-3 py-2 rounded w-full"
        />
        <p class="text-red-500 text-sm">{{ errors.description }}</p>
      </div>

      <div>
        <label class="text-sm font-medium">Tiền tệ</label>
        <input v-model="values.currency" class="border px-3 py-2 rounded w-full" />
      </div>

      <div>
        <label class="text-sm font-medium">Thời gian sử dụng</label>
        <input v-model="values.period" class="border px-3 py-2 rounded w-full" />
      </div>

      <!-- FEATURES -->
      <div class="md:col-span-2 space-y-2">
        <label class="text-sm font-medium">Tính năng *</label>
        <div
          v-for="(f, i) in featureFields"
          :key="f.key"
          class="flex items-center gap-2 border p-2 rounded"
        >
          <input
            v-model="values.features[i].name"
            class="flex-1 border px-2 py-1 rounded"
            placeholder="Tên tính năng"
          />
          <label class="flex items-center gap-1">
            <input type="checkbox" v-model="values.features[i].included" />
            Có sẵn
          </label>
          <button type="button" @click="remove(i)" class="text-red-600">X</button>
        </div>
        <button type="button" class="text-blue-600" @click="push({ name: '', included: false })">
          + Thêm tính năng
        </button>
        <p class="text-red-500 text-sm">{{ errors.features }}</p>
      </div>

      <!-- BUTTON -->
      <div class="md:col-span-2 flex gap-4 mt-4">
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
          {{ values.id ? 'Cập nhật' : 'Thêm mới' }}
        </button>
        <button
          type="button"
          v-if="values.id"
          @click="resetForm()"
          class="px-4 py-2 border rounded"
        >
          Huỷ
        </button>
      </div>
    </form>

    <!-- TABLE -->
    <table class="w-full border mt-6">
      <thead>
        <tr class="bg-gray-100 text-left">
          <th class="px-4 py-2 border">#</th>
          <th class="px-4 py-2 border">Tên</th>
          <th class="px-4 py-2 border">Giá</th>
          <th class="px-4 py-2 border">Thời hạn</th>
          <th class="px-4 py-2 border">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in pricings" :key="p.id ?? i">
          <td class="px-4 py-2 border">{{ i + 1 }}</td>
          <td class="px-4 py-2 border">{{ p.name }}</td>
          <td class="px-4 py-2 border">{{ p.price.toLocaleString() }} {{ p.currency || 'VND' }}</td>
          <td class="px-4 py-2 border">{{ p.period || '-' }}</td>
          <td class="px-4 py-2 border space-x-2">
            <button @click="editPricing(p)" class="text-blue-600">Sửa</button>
            <button v-if="p.id" @click="deletePricing(p.id)" class="text-red-600">Xoá</button>
          </td>
        </tr>
        <tr v-if="pricings.length === 0">
          <td colspan="5" class="text-center py-4">Chưa có gói giá nào</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
