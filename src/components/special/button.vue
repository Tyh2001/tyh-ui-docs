<template>
  <div id="component-item">
    <h1 class="title">特别的 Button 按钮</h1>
    <p class="explain">
      该组件只是为了应用一些特殊的为了炫酷样式的场景，它的灵活性并不如基础的组件，仅仅为了好看，它仅仅支持基础组件的一小部分的配置，如果需要功能更加强大，建议还是使用基础的组件比较好，如果仅仅是为了样式，那么它将是最好的选择。
    </p>

    <h3 class="Subtitle">流光按钮：</h3>
    <p class="explain">基础使用</p>
    <p class="explain">
      通过 type 属性配置不同的类型，目前可选
      <span>primary</span> 、<span>success</span> 、<span>danger</span> 、
      <span>warning</span> 四个属性
    </p>
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

    <h3 class="Subtitle">边框按钮：</h3>
    <p class="explain">基础使用</p>
    <p class="explain">
      边框按钮接收一个 <span>prohibit</span> 的布尔值，仅需要给流光按钮添加
      <span>prohibit</span>
      属性即为边框按钮，也就是流光按钮的朴素样子
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
