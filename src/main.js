import Vue    from 'vue'
import App    from './App.vue'
import Router from './router'
import  './axios'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
    render: h => h(App)
  }).$mount('#app')
