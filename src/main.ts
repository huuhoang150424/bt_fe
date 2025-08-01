import { createApp } from 'vue';
import './style.css';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import './assets/tailwind.css';
import { useAuthStore } from './stores/auth';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

const authStore = useAuthStore();
authStore.initializeAuth();
app.mount('#app');
