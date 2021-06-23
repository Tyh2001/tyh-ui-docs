<template>
  <div id="component-item">
    <h1 class="title">Input 输入框</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基础使用</p>
    <Tyh-input v-model="text1" />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;Tyh-input v-model="text1" /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      text1: ''
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">密码框：</p>
    <p class="explain">inpType 属性可以规定文本框类型</p>
    <Tyh-input inpType="text" v-model="text2" />
    <Tyh-input inpType="password" v-model="text3" />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;Tyh-input inpType="text" v-model="text2" /&gt;
  &lt;Tyh-input inpType="password" v-model="text3" /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      text2: '',
      text3: ''
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">不同尺寸：</p>
    <p class="explain">size 属性可以配置文本框尺寸</p>
    <Tyh-input size="big" v-model="text4" /><br />
    <Tyh-input size="medium" v-model="text5" /><br />
    <Tyh-input size="small" v-model="text6" /><br />
    <Tyh-input size="mini" v-model="text7" /><br />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;Tyh-input size="big" v-model="text4" /&gt;&lt;br /&gt;
  &lt;Tyh-input size="medium" v-model="text5" /&gt;&lt;br /&gt;
  &lt;Tyh-input size="small" v-model="text6" /&gt;&lt;br /&gt;
  &lt;Tyh-input size="mini" v-model="text7" /&gt;&lt;br /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      text4: '',
      text5: '',
      text6: '',
      text7: ''
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
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      text7: '',
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
