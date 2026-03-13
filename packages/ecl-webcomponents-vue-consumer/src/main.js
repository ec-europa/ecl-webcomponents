import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ComponentLibrary } from '@ecl/ecl-webcomponents-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ComponentLibrary)
app.use(createPinia())
app.use(router)

app.mount('#app')
