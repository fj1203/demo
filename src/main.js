import Vue from 'vue'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/libs/axios'
import importFilter from '@/libs/filters'

Vue.config.productionTip = false

importFilter(Vue)

Vue.use(ViewUI)

Vue.prototype.$http = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
