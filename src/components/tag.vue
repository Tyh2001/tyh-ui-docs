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
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr v-for="(configure, index) in configures" :key="index">
        <td>{{ configure.param }}</td>
        <td>{{ configure.explain }}</td>
        <td>{{ configure.type }}</td>
        <td>{{ configure.value }}</td>
        <td>{{ configure.default }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'tag',
  components: {},
  props: {},
  data () {
    return {
      configures: [
        { param: 'color', explain: '标签的颜色类型', type: 'string', value: 'primary / success / danger / warning', default: '——' },
        { param: 'size', explain: '标签的尺寸', type: 'string', value: ' — / small / mini', default: '最大尺寸' }
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
