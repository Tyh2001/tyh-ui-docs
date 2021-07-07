<template>
  <div id="component-item">
    <h1 class="title">ButtonAurora 极光按钮</h1>

    <h3 class="Subtitle">基本使用</h3>
    <p class="explain">基本使用</p>
    <Tyh-button-aurora>极光按钮</Tyh-button-aurora>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-button-aurora&gt;极光按钮&lt;/Tyh-button-aurora&gt;
      </code>
    </pre>

    <h3 class="Subtitle">按需引入：</h3>
    <p class="explain">
      通过下面按需引入的方式，我们可以只引入需要的组件，以达到减小项目体积的目的
    </p>
    <pre v-highlightjs>
      <code id="myCode" class="js">
import Vue from 'vue'
import TyhButtonLight from 'tyh-ui/packages/ButtonLight'
Vue.use(TyhButtonLight)
      </code>
    </pre>

    <TurnPage :TurnPageList="TurnPageList" />
  </div>
</template>

<script>
import TurnPage from '../components/TurnPage'
export default {
  name: '',
  components: {
    TurnPage
  },
  props: {},
  data () {
    return {
      TurnPageList: [
        { text: '流光按钮', url: '/special/buttonLight' },
        { text: '空', url: '/special/' }
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

<style src="../style/index.css" scoped></style>

<style lang='less' scoped>
.tyh-button-light {
  margin-left: 20px;
}
</style>
