<template>
  <div id="component-item">
    <h1 class="title">Button 按钮</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基础使用</p>
    <Tyh-button-up type="primary">主要按钮</Tyh-button-up>
    <Tyh-button-up type="success">成功按钮</Tyh-button-up>
    <Tyh-button-up type="danger">危险按钮</Tyh-button-up>
    <Tyh-button-up type="warning">警告按钮</Tyh-button-up>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-button-up type="primary"&gt;主要按钮&lt;/Tyh-button-up&gt;
&lt;Tyh-button-up type="success"&gt;成功按钮&lt;/Tyh-button-up&gt;
&lt;Tyh-button-up type="danger"&gt;危险按钮&lt;/Tyh-button-up&gt;
&lt;Tyh-button-up type="warning"&gt;警告按钮&lt;/Tyh-button-up&gt;
      </code>
    </pre>

    <!-- 配置项 -->
    <h3 class="Subtitle">配置项：</h3>
    <ConfiguresTable :configures="configures" />

    <h3 class="Subtitle">按需引入：</h3>
    <p class="explain">
      通过下面按需引入的方式，我们可以只引入需要的组件，以达到减小项目体积的目的
    </p>
    <pre v-highlightjs>
      <code id="myCode" class="js">
import Vue from 'vue'
import TyhButtonUp from 'tyh-ui/packages/button-up'
Vue.use(TyhButtonUp)
      </code>
    </pre>

    <TurnPage :TurnPageList="TurnPageList" />
  </div>
</template>

<script>
import ConfiguresTable from '../components/ConfiguresTable'
import TurnPage from '../components/TurnPage'
export default {
  name: '',
  components: {
    ConfiguresTable,
    TurnPage
  },
  props: {},
  data () {
    return {
      configures: [
        { param: 'type', explain: '按钮的类型', type: 'string', value: 'primary / success / danger / warning', default: '——' }
      ],
      TurnPageList: [
        { text: '组件', url: '/component' },
        { text: 'Input 输入框', url: '/special/input' }
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
