<template>
  <div id="component-item">
    <h1 class="title">快速上手</h1>

    <h3 class="Subtitle">安装：</h3>
    <p class="explain">推荐使用 npm 的方式安装</p>
    <pre v-highlightjs>
      <code id="myCode" class="vue">
npm i tyh-ui
      </code>
    </pre>

    <p class="explain">在 main.js 中引入下面内容</p>
    <pre v-highlightjs>
      <code id="myCode" class="js">
import tyhUI from 'tyh-ui/lib'
Vue.use(tyhUI)
      </code>
    </pre>

    <TurnPage :TurnPageList="TurnPageList" />
  </div>
</template>

<script>
import TurnPage from './components/TurnPage'
export default {
  name: '',
  components: {
    TurnPage
  },
  props: {},
  data () {
    return {
      TurnPageList: [
        { text: '首页', url: '/' },
        { text: 'Color 色彩', url: 'color' }
      ]
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style src="./style/index.css" scoped></style>
