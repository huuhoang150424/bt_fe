import { createApp } from 'vue';
import './style.css';
import router from './router';
import App from './App.vue';
import './assets/tailwind.css';

const app = createApp(App);
// app.component('Button', Button)
app.use(router);
app.mount('#app');
