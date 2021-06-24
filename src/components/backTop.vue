<template>
  <div id="component-item">
    <h1 class="title">BackTop 回到顶部</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <Tyh-backTop>Top</Tyh-backTop>
    <pre v-highlightjs>
      <code id="myCode" class="html">
 &lt;Tyh-backTop&gt;Top&lt;/Tyh-backTop&gt;
      </code>
    </pre>

    <p class="explain">bottom 和 right 属性可以配置距离右边和下边的距离</p>
    <Tyh-backTop bottom="100" right="40">Top</Tyh-backTop>
    <pre v-highlightjs>
      <code id="myCode" class="html">
 &lt;Tyh-backTop bottom="100" right="100"&gt;Top&lt;/Tyh-backTop&gt;
      </code>
    </pre>

    <p class="explain">也可以插入 icon 图标</p>
    <Tyh-backTop bottom="160" right="40">
      <Tyh-icon icon="tyh-ui-huojian-01" color="#409eff" />
    </Tyh-backTop>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-backTop bottom="160" right="40"&gt;
  &lt;Tyh-icon icon="tyh-ui-huojian-01" color="#409eff" /&gt;
&lt;/Tyh-backTop&gt;
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
  name: '',
  components: {},
  props: {},
  data () {
    return {
      configures: [
        { param: 'bottom', explain: '距离下面的距离', type: 'string', value: '——', default: '40' },
        { param: 'right', explain: '距离右面的距离', type: 'string', value: '——', default: '40' }
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
