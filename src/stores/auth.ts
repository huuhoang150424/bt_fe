import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    token: localStorage.getItem('token') || null,
  }),
  actions: {
    login(token: string) {
      this.isAuthenticated = true;
      this.token = token;
      localStorage.setItem('token', token);
    },
    logout() {
      this.isAuthenticated = false;
      this.token = null;
      localStorage.removeItem('token');
    },
    initializeAuth() {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        this.isAuthenticated = true;
        this.token = storedToken;
      }
    },
  },
  getters: {
    authHeader: (state) => {
      return state.token ? { Authorization: `Bearer ${state.token}` } : {};
    },
    isLoggedIn: (state) => {
      return state.isAuthenticated && !!state.token;
    }
  },
});
