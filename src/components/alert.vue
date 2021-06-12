<template>
  <div id="component-item">
    <h1 class="title">Alert 消息通知</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">
      tyh-ui 内部注册了一个全局的 $alert 方法，接收一个对象，可以使用 message
      定义内容
    </p>
    <Tyh-button type="primary" @click="open1">提示1</Tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
后续更新。。。。
      </code>
    </pre>

    <p class="explain">不同类型的：</p>
    <p class="explain">type 属性可以配置提示框的类型</p>
    <Tyh-button type="primary" @click="open1">提示1</Tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
后续更新。。。。
      </code>
    </pre>

    <p class="explain">显示市场：</p>
    <p class="explain">
      times 属性可以配置提示框的显示市场，并在 xxxx 毫秒后消失
    </p>
    <Tyh-button type="primary" @click="open1">提示1</Tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
后续更新。。。。
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
        { param: 'message', explain: '显示的文字内容', type: 'string', value: '——', default: '——' },
        { param: 'times', explain: '持续显示的时间', type: 'number', value: '——', default: '1400' },
        { param: 'type', explain: '提示的类型', type: 'string', value: 'primary / success / danger / warning', default: '——' }
      ]
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    open1 () {
      this.$alert({
        message: '这是一个提示'
      })
    },
    open2 () {
      this.$alert({
        message: '这是一个提示',
        type: 'primary'
      })
    },
    open3 () {
      this.$alert({
        message: '这是一个提示',
        type: 'success'
      })
    },
    open4 () {
      this.$alert({
        message: '这是一个提示',
        type: 'danger'
      })
    },
    open5 () {
      this.$alert({
        message: '这是一个提示',
        type: 'warning'
      })
    }
  }
}
</script>

<style src="./style/index.css" scoped></style>
