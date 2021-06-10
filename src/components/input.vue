<template>
  <div id="component-item">
    <h1 class="title">Input 输入框</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基础使用</p>
    <Tyh-input v-model="text" />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;Tyh-input v-model="text" /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      text: ''
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">密码框：</p>
    <p class="explain">inpType 属性可以规定文本框类型</p>
    <Tyh-input inpType="text" v-model="text" />
    <Tyh-input inpType="password" v-model="text" />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;Tyh-input inpType="text" v-model="text" /&gt;
  &lt;Tyh-input inpType="password" v-model="text" /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      text: ''
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">不同尺寸：</p>
    <p class="explain">size 属性可以配置文本框尺寸</p>
    <Tyh-input size="big" v-model="text" /><br />
    <Tyh-input size="medium" v-model="text" /><br />
    <Tyh-input size="small" v-model="text" /><br />
    <Tyh-input size="mini" v-model="text" /><br />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;Tyh-input size="big" v-model="text" /&gt;&lt;br /&gt;
  &lt;Tyh-input size="medium" v-model="text" /&gt;&lt;br /&gt;
  &lt;Tyh-input size="small" v-model="text" /&gt;&lt;br /&gt;
  &lt;Tyh-input size="mini" v-model="text" /&gt;&lt;br /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      text: ''
    }
  }
}
&lt;/script&gt;
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
      text: '',
      configures: [
        { param: 'v-model', explain: '绑定值', type: 'string / number', value: '——', default: '——' },
        { param: 'inpType', explain: '类型', type: 'string', value: 'text / password / success / danger / warning', default: 'text' },
        { param: 'innerText', explain: '输入框占位文本', type: 'string', value: '——', default: '——' },
        { param: 'size', explain: '文本框尺寸', type: 'string', value: 'big / medium / small / mini', default: 'medium' }
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
