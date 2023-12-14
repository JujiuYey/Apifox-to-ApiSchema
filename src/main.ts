import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store/index';
import router from '@/router/index';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import '@/styles/index.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Antd);
app.mount('#app');
