import { createApp } from 'vue'
import './tailwind.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'
import router from './router';
import './style.css'
import App from './App.vue'

createApp(App).use(router).use(ElementPlus).mount('#app')
