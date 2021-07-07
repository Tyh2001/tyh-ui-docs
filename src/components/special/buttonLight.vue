<template>
  <div id="component-item">
    <h1 class="title">ButtonLight 流光按钮</h1>

    <h3 class="Subtitle">基本使用</h3>
    <p class="explain">基本使用</p>
    <p class="explain">通过 type 属性配置不同的类型</p>
    <Tyh-button-light type="primary">主要按钮</Tyh-button-light>
    <Tyh-button-light type="success">成功按钮</Tyh-button-light>
    <Tyh-button-light type="danger">危险按钮</Tyh-button-light>
    <Tyh-button-light type="warning">警告按钮</Tyh-button-light>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-button-light type="primary"&gt;主要按钮&lt;/Tyh-button-light&gt;
&lt;Tyh-button-light type="success"&gt;成功按钮&lt;/Tyh-button-light&gt;
&lt;Tyh-button-light type="danger"&gt;危险按钮&lt;/Tyh-button-light&gt;
&lt;Tyh-button-light type="warning"&gt;警告按钮&lt;/Tyh-button-light&gt;
      </code>
    </pre>

    <p class="explain">朴素按钮</p>
    <p class="explain">通过 <span>simple</span> 的属性来配置朴素状态</p>
    <Tyh-button-light simple type="primary">主要按钮</Tyh-button-light>
    <Tyh-button-light simple type="success">成功按钮</Tyh-button-light>
    <Tyh-button-light simple type="danger">危险按钮</Tyh-button-light>
    <Tyh-button-light simple type="warning">警告按钮</Tyh-button-light>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-button-light simple type="primary"&gt;主要按钮&lt;/Tyh-button-light&gt;
&lt;Tyh-button-light simple type="success"&gt;成功按钮&lt;/Tyh-button-light&gt;
&lt;Tyh-button-light simple type="danger"&gt;危险按钮&lt;/Tyh-button-light&gt;
&lt;Tyh-button-light simple type="warning"&gt;警告按钮&lt;/Tyh-button-light&gt;
      </code>
    </pre>

    <p class="explain">禁用状态</p>
    <p class="explain">
      边框按钮接收一个 <span>prohibit</span> 的属性，可以配置禁用状态
    </p>
    <Tyh-button-light prohibit type="primary">主要按钮</Tyh-button-light>
    <Tyh-button-light prohibit type="success">成功按钮</Tyh-button-light>
    <Tyh-button-light prohibit type="danger">危险按钮</Tyh-button-light>
    <Tyh-button-light prohibit type="warning">警告按钮</Tyh-button-light>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-button-light prohibit type="primary"&gt;主要按钮&lt;/Tyh-button-light&gt;
&lt;Tyh-button-light prohibit type="success"&gt;成功按钮&lt;/Tyh-button-light&gt;
&lt;Tyh-button-light prohibit type="danger"&gt;危险按钮&lt;/Tyh-button-light&gt;
&lt;Tyh-button-light prohibit type="warning"&gt;警告按钮&lt;/Tyh-button-light&gt;
      </code>
    </pre>

    <ConfiguresTable :configures="configures" />

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
        { param: 'type', explain: '按钮的类型', type: 'string', value: 'primary / success / danger / warning', default: '——' },
        { param: 'prohibit', explain: '按钮是否禁用', type: 'boolean', value: '——', default: 'false' },
        { param: 'simple', explain: '是否为朴素按钮', type: 'boolean', value: '——', default: 'fasle' }
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

<style lang='less' scoped>
.tyh-button-light {
  margin-left: 20px;
}
</style>
