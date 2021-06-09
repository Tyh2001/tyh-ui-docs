import Vue from 'vue'
import App from './App.vue'
import router from './router'
import tyhUI from 'tyh-ui/src/index'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

Vue.use(VueHighlightJS)
Vue.use(tyhUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
