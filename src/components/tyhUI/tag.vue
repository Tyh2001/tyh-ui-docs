<template>
  <div id="component-item">
    <h1 class="title">Tag 标签</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基础使用</p>
    <Tyh-tag>标签一</Tyh-tag>
    <Tyh-tag color="primary">标签二</Tyh-tag>
    <Tyh-tag color="success">标签三</Tyh-tag>
    <Tyh-tag color="danger">标签四</Tyh-tag>
    <Tyh-tag color="warning">标签五</Tyh-tag>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-tag&gt;标签一&lt;/Tyh-tag&gt;
&lt;Tyh-tag color="primary"&gt;标签二&lt;/Tyh-tag&gt;
&lt;Tyh-tag color="success"&gt;标签三&lt;/Tyh-tag&gt;
&lt;Tyh-tag color="danger"&gt;标签四&lt;/Tyh-tag&gt;
&lt;Tyh-tag color="warning"&gt;标签五&lt;/Tyh-tag&gt;
      </code>
    </pre>

    <p class="explain">不同尺寸：</p>
    <p class="explain">size 属性可以配置不同的尺寸</p>
    <Tyh-tag color="primary">标签</Tyh-tag>
    <Tyh-tag size="small" color="primary">标签</Tyh-tag>
    <Tyh-tag size="mini" color="primary">标签</Tyh-tag>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-tag color="primary"&gt;标签&lt;/Tyh-tag&gt;
&lt;Tyh-tag size="small" color="primary"&gt;标签&lt;/Tyh-tag&gt;
&lt;Tyh-tag size="mini" color="primary"&gt;标签&lt;/Tyh-tag&gt;
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
import TyhTag from 'tyh-ui/packages/tag'
Vue.use(TyhTag)
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
        { param: 'color', explain: '标签的颜色类型', type: 'string', value: 'primary / success / danger / warning', default: '——' },
        { param: 'size', explain: '标签的尺寸', type: 'string', value: ' — / small / mini', default: '最大尺寸' }
      ],
      TurnPageList: [
        { text: 'Card 卡片', url: 'card' },
        { text: 'Link 链接', url: 'link' }
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
