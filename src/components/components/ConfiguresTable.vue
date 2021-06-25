<template>
  <table id="table">
    <!-- 配置项表格组件 -->
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
</template>

<script>
export default {
  name: 'ConfiguresTable',
  components: {},
  props: {
    // 配置项
    configures: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang='less' scoped>
// 表格
#table {
  user-select: text;
  width: 100%;
  color: #606266;

  tr {
    height: 50px;
    background: rgb(247, 247, 247);
    text-align: center;
  }
}
</style>
