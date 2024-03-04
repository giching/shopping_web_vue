import './assets/main.css'
import './assets/css/style.css'



import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// fontawesome--(s)
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {faClipboardCheck}from '@fortawesome/free-solid-svg-icons'
import {faCartPlus}from '@fortawesome/free-solid-svg-icons'
import {faTableList}from '@fortawesome/free-solid-svg-icons'
import {faGrip}from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart,faClipboardCheck,faCartPlus,faTableList,faGrip);
app.component('font-awesome-icon', FontAwesomeIcon)

// new Vue({
//     el: '#app',
//   })
// fontawesome--(e)