import { ApiUrl } from '@/constant/api-url';
import { useAuthStore } from '@/stores/auth';

const api = {

  fetchWithAuth: async (url: string, options: RequestInit = {}) => {
    const authStore = useAuthStore();
    const token = authStore.token;
    const headers = {
      ...options.headers,
      ...(token && { Authorization: `Bearer ${token}` }),
    };
    try {
      const response = await fetch(`${ApiUrl}${url}`, {
        ...options,
        headers,
      });
      if (!response.ok) {
        if (response.status === 401) {
          authStore.logout();
          window.location.href = '/login';
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  post: async (url: string, data: any, options: RequestInit = {}) => {
    return api.fetchWithAuth(url, {
      ...options,
      method: 'POST',
      body: data,
    });
  },

  get: async (url: string, options: RequestInit = {}) => {
    return api.fetchWithAuth(url, {
      ...options,
      method: 'GET',
    });
  },
};

export default api;
