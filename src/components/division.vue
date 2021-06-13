<template>
  <div id="component-item">
    <h1 class="title">Division 分割线</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <Tyh-division>这是分割线</Tyh-division>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-division&gt;这是分割线&lt;/Tyh-division&gt;
      </code>
    </pre>

    <p class="explain">position 属性可以配置文字的位置</p>
    <Tyh-division position="left">这是左边文字</Tyh-division>
    <br />
    <Tyh-division position="center">这是中间文字</Tyh-division>
    <br />
    <Tyh-division position="right">这是右边文字</Tyh-division>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-division position="left"&gt;这是左边文字&lt;/Tyh-division&gt;
&lt;Tyh-division position="center"&gt;这是中间文字&lt;/Tyh-division&gt;
&lt;Tyh-division position="right"&gt;这是右边文字&lt;/Tyh-division&gt;
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
        { param: 'position', explain: '文字位置', type: 'string', value: 'left / center / right', default: 'left' }
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
