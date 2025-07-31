<template>
  <div class="p-6 space-y-6">
    <h1 class="text-2xl font-bold">Quản lý danh mục</h1>

    <!-- Form tạo / chỉnh sửa -->
    <form @submit.prevent="submitCategory" class="flex gap-4 items-end">
      <div>
        <label class="block mb-1 text-sm font-medium">Tên danh mục</label>
        <input
          v-model="name"
          type="text"
          class="border px-3 py-2 rounded w-64"
          placeholder="Nhập tên danh mục"
        />
        <span v-if="nameError" class="text-red-500 text-sm mt-1 block">
          {{ nameError }}
        </span>
      </div>
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {{ editingId ? 'Cập nhật' : 'Thêm mới' }}
      </button>
      <button
        type="button"
        v-if="editingId"
        @click="clearForm"
        class="px-4 py-2 border rounded"
      >
        Huỷ
      </button>
    </form>

    <!-- Danh sách danh mục -->
    <table class="w-full border mt-6">
      <thead>
        <tr class="bg-gray-100 text-left">
          <th class="px-4 py-2 border">#</th>
          <th class="px-4 py-2 border">Tên danh mục</th>
          <th class="px-4 py-2 border">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cat, index) in categories" :key="cat.id">
          <td class="px-4 py-2 border">{{ index + 1 }}</td>
          <td class="px-4 py-2 border">{{ cat.name }}</td>
          <td class="px-4 py-2 border space-x-2">
            <button @click="editCategory(cat)" class="text-blue-600">Sửa</button>
            <button @click="deleteCategory(cat.id)" class="text-red-600">Xoá</button>
          </td>
        </tr>
        <tr v-if="categories.length === 0">
          <td colspan="3" class="text-center py-4">Không có danh mục nào</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useForm, useField } from 'vee-validate'
import { categorySchema } from './schema'
import { ApiUrl } from '@/constant/api-url'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

// Danh sách danh mục
const categories = ref<Array<{ id: string; name: string }>>([])

// Sử dụng vee-validate với yup schema
const { handleSubmit, resetForm, setValues } = useForm({
  validationSchema: categorySchema,
  initialValues: { name: '' },
})
const { value: name, errorMessage: nameError } = useField<string>('name')

// Trạng thái đang chỉnh sửa
const editingId = ref<string | null>(null)

// Lấy danh sách danh mục
const fetchCategories = async () => {
  try {
    const res = await fetch(`${ApiUrl}/categories`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    categories.value = data.data || []
  } catch (err) {
    console.error('Lỗi khi tải danh mục:', err)
  }
}

// Gửi form (tạo hoặc cập nhật)
const submitCategory = handleSubmit(async values => {
  try {
    const method = editingId.value ? 'PATCH' : 'POST'

    const url = editingId.value
      ? `${ApiUrl}/categories/${editingId.value}`
      : `${ApiUrl}/categories`

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: authStore.authHeader?.Authorization ?? '',
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) throw new Error(`Lỗi ${res.status}`)
    await fetchCategories()
    clearForm()
  } catch (err) {
    alert('Lỗi khi xử lý dữ liệu')
    console.error(err)
  }
})

// Sửa danh mục
const editCategory = (cat: { id: string; name: string }) => {
  setValues({ name: cat.name })
  editingId.value = cat.id
}

// Xoá danh mục
const deleteCategory = async (id: string) => {
  if (!confirm('Bạn có chắc chắn muốn xoá?')) return
  try {
    const res = await fetch(`${ApiUrl}/categories/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authStore.authHeader?.Authorization ?? '',
      },
    })
    if (!res.ok) throw new Error(`Lỗi ${res.status}`)
    await fetchCategories()
  } catch (err) {
    alert('Lỗi khi xoá danh mục')
    console.error(err)
  }
}

// Reset form
const clearForm = () => {
  resetForm()
  editingId.value = null
}

onMounted(fetchCategories)
</script>
