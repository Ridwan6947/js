import { createApp } from 'vue'
import App from './App.vue'
import store from  './store/index.js'
import i18n from  './i18n.js'

createApp(App).use(store).use(i18n).mount('#app');