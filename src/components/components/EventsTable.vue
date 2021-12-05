<template>
  <table id="table">
    <tr>
      <th>事件名称</th>
      <th>说明</th>
      <th>回调参数</th>
    </tr>
    <tr v-for="(evt, index) in events" :key="index">
      <td>{{ evt.name }}</td>
      <td>{{ evt.explain }}</td>
      <td>{{ evt.param }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang='less' scoped>
#table {
  user-select: text;
  width: 100%;
  color: #606266;
  border-collapse: collapse;
  tr {
    height: 50px;
    border-bottom: 1px solid #dcdfe6;
    text-align: center;
    td,
    th {
      border-bottom: 1px solid #dcdfe6;
    }
  }
}
</style>
