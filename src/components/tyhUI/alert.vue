<template>
  <div id="component-item">
    <h1 class="title">Alert 提示</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基础使用</p>
    <tyh-alert message="这是一个普通提示" />
    <tyh-alert type="primary" message="这是一个主要提示" />
    <tyh-alert type="success" message="这是一个成功提示" />
    <tyh-alert type="danger" message="这是一个危险提示" />
    <tyh-alert type="warning" message="这是一个警告提示" />
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-alert message="这是一个普通提示" /&gt;
&lt;tyh-alert type="primary" message="这是一个主要提示" /&gt;
&lt;tyh-alert type="success" message="这是一个成功提示" /&gt;
&lt;tyh-alert type="danger" message="这是一个危险提示" /&gt;
&lt;tyh-alert type="warning" message="这是一个警告提示" /&gt;
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
  components: {
    ConfiguresTable,
    TurnPage
  },
  data () {
    return {
      configures: [
        { param: 'message', explain: '提示的文字', type: 'string', value: '——', default: '——' },
        { param: 'type', explain: '提示类型', type: 'string', value: 'primary / success / danger / warning', default: '——' },
        { param: 'iconClass', explain: 'icon 类名', type: 'string', value: '——', default: '——' },
        { param: 'close', explain: '是否展示关闭按钮', type: 'boolean', value: '——', default: 'false' },
        { param: 'center', explain: '是否文字居中对齐', type: 'boolean', value: '——', default: 'false' },
        { param: 'simple', explain: '简约的提示', type: 'boolean', value: '——', default: 'false' }
      ],
      TurnPageList: [
        { text: 'Crumbs 面包屑', url: 'crumbs' },
        { text: 'List 列表', url: 'list' }
      ]
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>

<style lang='less' scoped>
.tyh-alert {
  margin-top: 15px;
}
</style>
