<template>
  <div id="component-item">
    <h1 class="title">Link 链接</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基础使用</p>
    <Tyh-link url="">链接一</Tyh-link>
    <Tyh-link url="" color="primary">链接二</Tyh-link>
    <Tyh-link url="" color="success">链接三</Tyh-link>
    <Tyh-link url="" color="danger">链接四</Tyh-link>
    <Tyh-link url="" color="warning">链接五</Tyh-link>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-link url=""&gt;链接一&lt;/Tyh-link&gt;
&lt;Tyh-link url="" color="primary"&gt;链接二&lt;/Tyh-link&gt;
&lt;Tyh-link url="" color="success"&gt;链接三&lt;/Tyh-link&gt;
&lt;Tyh-link url="" color="danger"&gt;链接四&lt;/Tyh-link&gt;
&lt;Tyh-link url="" color="warning"&gt;链接五&lt;/Tyh-link&gt;
      </code>
    </pre>

    <p class="explain">带有下划线：</p>
    <p class="explain">underline 属性可以配置带有下划线</p>
    <Tyh-link underline>标签</Tyh-link>
    <Tyh-link underline color="primary">标签</Tyh-link>
    <Tyh-link underline color="success">标签</Tyh-link>
    <Tyh-link underline color="danger">标签</Tyh-link>
    <Tyh-link underline color="warning">标签</Tyh-link>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-link underline&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link underline color="primary"&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link underline color="success"&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link underline color="danger"&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link underline color="warning"&gt;标签&lt;/Tyh-link&gt;
      </code>
    </pre>

    <p class="explain">鼠标移入带有下划线：</p>
    <p class="explain">hoverline 属性可以配置鼠标移入带有下划线</p>
    <Tyh-link hoverline>标签</Tyh-link>
    <Tyh-link hoverline color="primary">标签</Tyh-link>
    <Tyh-link hoverline color="success">标签</Tyh-link>
    <Tyh-link hoverline color="danger">标签</Tyh-link>
    <Tyh-link hoverline color="warning">标签</Tyh-link>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-link hoverline&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link hoverline color="primary"&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link hoverline color="success"&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link hoverline color="danger"&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link hoverline color="warning"&gt;标签&lt;/Tyh-link&gt;
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
        { param: 'url', explain: '跳转的路径', type: 'string', value: '——', default: '——' },
        { param: 'color', explain: '链接的字体颜色', type: 'string', value: 'primary / success / danger / warning', default: '——' },
        { param: 'underline', explain: '下划线', type: 'boolean', value: 'true / false', default: 'fasle' },
        { param: 'hoverline', explain: '鼠标移入下划线', type: 'boolean', value: 'true / false', default: 'fasle' },
        { param: 'target', explain: '以新的窗口打开', type: 'string', value: '同原生 target 属性', default: '——' }
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
