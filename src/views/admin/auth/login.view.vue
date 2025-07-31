<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthStore } from '@/stores/auth';
import { loginSchema } from './shema';
import { ApiUrl } from '@/constant/api-url';

const router = useRouter();
const authStore = useAuthStore();
const isLoading = ref( false );

const { handleSubmit, errors } = useForm( {
  validationSchema: loginSchema,
  initialValues: {
    username: '',
    password: '',
  },
} );

const { value: username, errorMessage: usernameError } = useField<string>( 'username' );
const { value: password, errorMessage: passwordError } = useField<string>( 'password' );

const handleSubmitForm = handleSubmit( async ( values ) =>
{
  if ( isLoading.value ) return;
  isLoading.value = true;
  try
  {
    const response = await fetch( `${ ApiUrl }/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {
        username: values.username,
        password: values.password,
      } ),
    } );

    if ( !response.ok )
    {
      throw new Error( `HTTP error! status: ${ response.status }` );
    }
    const data = await response.json();
    console.log( 'Login response data:', data.data.access_token );
    authStore.login( data.data.access_token );
    router.push('/admin/admin-dashboard');
  } catch ( error )
  {
    console.error( 'Lỗi đăng nhập:', error );
  } finally
  {
    isLoading.value = false;
  }
} );
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
    <div
      class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-500 ease-in-out animate-fade-in">
      <h2 class="text-3xl font-extrabold text-center text-gray-800 mb-8">Đăng Nhập</h2>
      <form @submit.prevent=" handleSubmitForm ">
        <div class="mb-5">
          <Label for="username" class="text-gray-700 font-medium">Tên đăng nhập</Label>
          <div class="relative mt-1">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <i class="fas fa-user text-gray-400"></i>
            </span>
            <Input v-model=" username " id="username" type="text" placeholder="Nhập tên đăng nhập"
              class="pl-10 w-full border-gray-300 focus:ring-2 focus:ring-primaryColor focus:border-transparent rounded-lg" />
            <span v-if=" usernameError " class="text-red-500 text-sm mt-1 block">{{ usernameError }}</span>
          </div>
        </div>

        <div class="mb-6">
          <Label for="password" class="text-gray-700 font-medium">Mật khẩu</Label>
          <div class="relative mt-1">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <i class="fas fa-lock text-gray-400"></i>
            </span>
            <Input v-model=" password " id="password" type="password" placeholder="Nhập mật khẩu"
              class="pl-10 w-full border-gray-300 focus:ring-2 focus:ring-primaryColor focus:border-transparent rounded-lg" />
            <span v-if=" passwordError " class="text-red-500 text-sm mt-1 block">{{ passwordError }}</span>
          </div>
        </div>

        <Button type="submit"
          class="w-full bg-gradient-to-r from-primaryColor to-primaryColorHover text-white py-3 rounded-lg hover:shadow-lg hover:scale-105 transform transition-all duration-300"
          :disabled=" Object.keys( errors ).length > 0 || isLoading ">
          {{ isLoading ? 'Đang đăng nhập...' : 'Đăng Nhập' }}
        </Button>
      </form>
    </div>
  </div>
</template>

