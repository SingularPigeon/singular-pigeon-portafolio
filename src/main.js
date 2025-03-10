import 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap/dist/js/bootstrap.bundle.js'

import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/styles/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far, fab)
dom.watch()

const app = createApp(App)

app.use(createPinia())
app.use(router).component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
