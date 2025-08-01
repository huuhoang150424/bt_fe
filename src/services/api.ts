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
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      },
      body: JSON.stringify(data),
    });
  },

  get: async (url: string, options: RequestInit = {}) => {
    return api.fetchWithAuth(url, {
      ...options,
      method: 'GET',
    });
  },

  put: async (url: string, data: any, options: RequestInit = {}) => {
    return api.fetchWithAuth(url, {
      ...options,
      method: 'PUT',
      body: data,
    });
  },

  patch: async (url: string, data: any, options: RequestInit = {}) => {
    return api.fetchWithAuth(url, {
      ...options,
      method: 'PATCH',
      body: data,
    });
  },

  delete: async (url: string, options: RequestInit = {}) => {
    return api.fetchWithAuth(url, {
      ...options,
      method: 'DELETE',
    });
  },
};

export default api;
