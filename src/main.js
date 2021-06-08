import Vue from 'vue'
import App from './App.vue'
import router from './router'
import tyhUI from 'tyh-ui/src/index'
Vue.use(tyhUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
