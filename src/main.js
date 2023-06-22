import Vue from 'vue'
import App from './App.vue'
import myPlugin from './plugins/my-plugin'
import router from '@/router/index.js'

Vue.use(myPlugin)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
