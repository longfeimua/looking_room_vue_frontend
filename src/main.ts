import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index'
import 'normalize.css'
import './assets/main.css'

createApp(App)
  .use(router)
  .mount('#app')
