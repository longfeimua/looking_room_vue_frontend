import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index'
import 'normalize.css'
import './assets/main.css'
import './assets/iconfont.css'

createApp(App)
  .use(router)
  .mount('#app')
