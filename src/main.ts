import { createApp } from 'vue'
import App from './App.vue'
import router from './ui/router'

import '@/assets/styles/global.css'
import global from './assets/scripts/global'

global.initFunctions()
// global.setupGoogleMaps()

createApp(App)
  .use(router)
  .mount('#app')
