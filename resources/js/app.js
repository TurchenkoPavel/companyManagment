import './bootstrap';

import {createApp} from 'vue'

import router from '@/router'
import store from '@/store'
import '@/plugins/axios.js'

import App from './App.vue'

createApp(App)
    .use(router)
    .use(store)
    .mount("#app")