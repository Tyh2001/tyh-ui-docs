<template>
  <div id="component-item">
    <h1 class="title">快速上手</h1>

    <h3 class="Subtitle">安装：</h3>
    <p class="explain">推荐使用 <span>npm</span> 的方式安装</p>
    <pre v-highlightjs>
      <code id="myCode" class="vue">
npm i tyh-ui
      </code>
    </pre>

    <p class="explain">在 <span>main.js</span> 中引入下面内容</p>
    <pre v-highlightjs>
      <code id="myCode" class="js">
import Vue from 'vue'
import App from './App.vue'

import tyhUi from 'tyh-ui'
import 'tyh-ui/style/index.css'
Vue.use(tyhUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
      </code>
    </pre>

    <TurnPage :TurnPageList="TurnPageList" />
  </div>
</template>

<script>
import TurnPage from '@/components/TurnPage'
export default {
  components: {
    TurnPage
  },
  data () {
    return {
      TurnPageList: [
        { text: '首页', url: '/' },
        { text: 'Color 色彩', url: 'color' }
      ]
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
