<template>
  <div id="component-item">
    <h1 class="title">Tag 标签</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <tyh-tag>标签一</tyh-tag>
    <tyh-tag color="primary">标签二</tyh-tag>
    <tyh-tag color="success">标签三</tyh-tag>
    <tyh-tag color="danger">标签四</tyh-tag>
    <tyh-tag color="warning">标签五</tyh-tag>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-tag&gt;标签一&lt;/tyh-tag&gt;
&lt;tyh-tag color="primary"&gt;标签二&lt;/tyh-tag&gt;
&lt;tyh-tag color="success"&gt;标签三&lt;/tyh-tag&gt;
&lt;tyh-tag color="danger"&gt;标签四&lt;/tyh-tag&gt;
&lt;tyh-tag color="warning"&gt;标签五&lt;/tyh-tag&gt;
      </code>
    </pre>

    <p class="explain">不同尺寸：</p>
    <p class="explain"><span>size</span> 属性可以配置不同的尺寸</p>
    <tyh-tag color="primary">标签</tyh-tag>
    <tyh-tag size="small" color="primary">标签</tyh-tag>
    <tyh-tag size="mini" color="primary">标签</tyh-tag>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-tag color="primary"&gt;标签&lt;/tyh-tag&gt;
&lt;tyh-tag size="small" color="primary"&gt;标签&lt;/tyh-tag&gt;
&lt;tyh-tag size="mini" color="primary"&gt;标签&lt;/tyh-tag&gt;
      </code>
    </pre>

    <!-- 配置项 -->
    <h3 class="Subtitle">配置项：</h3>
    <ConfiguresTable :configures="configures" />

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

<style lang='less' scoped>
.tyh-tag {
  margin: 5px;
}
</style>
