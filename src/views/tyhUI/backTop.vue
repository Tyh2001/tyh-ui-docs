<template>
  <div id="component-item">
    <h1 class="title">BackTop 回到顶部</h1>

    <h3 class="Subtitle">基本使用</h3>
    <p class="explain">基本使用</p>
    <tyh-backTop>Top</tyh-backTop>
    <pre v-highlightjs>
      <code id="myCode" class="html">
 &lt;tyh-backTop&gt;Top&lt;/tyh-backTop&gt;
      </code>
    </pre>

    <p class="explain">
      <span>bottom</span> 和 <span>right</span> 属性可以配置距离右边和下边的距离
    </p>
    <tyh-backTop bottom="100" right="120">Top</tyh-backTop>
    <pre v-highlightjs>
      <code id="myCode" class="html">
 &lt;tyh-backTop bottom="100" right="120"&gt;Top&lt;/tyh-backTop&gt;
      </code>
    </pre>

    <p class="explain">也可以插入 icon 图标</p>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-backTop bottom="160" right="120"&gt;
  &lt;tyh-icon icon="tyh-ui-arrow-up-filling1" color="#409eff" /&gt;
&lt;/tyh-backTop&gt;
      </code>
    </pre>

    <h3 class="Subtitle">配置项</h3>
    <tyh-table zebra align="center" :data="configures" :columns="columns" />

    <TurnPage :TurnPageList="TurnPageList" />
  </div>
</template>

<script>
import TurnPage from '@/components/TurnPage'
import table from './table'
export default {
  components: {
    TurnPage
  },
  data () {
    return {
      columns: table.columns,
      configures: [
        { param: 'bottom', explain: '距离下面的距离', type: 'string', value: '——', default: '40' },
        { param: 'right', explain: '距离右面的距离', type: 'string', value: '——', default: '40' }
      ],
      TurnPageList: [
        { text: 'Division 分割线', url: 'division' },
        { text: 'Icon 图标', url: 'icon' }
      ]
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
