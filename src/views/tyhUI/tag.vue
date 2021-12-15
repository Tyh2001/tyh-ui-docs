<template>
  <div id="component-item">
    <h1 class="title">Tag 标签</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <tyh-tag>标签一</tyh-tag>
    <tyh-tag type="primary">标签二</tyh-tag>
    <tyh-tag type="success">标签三</tyh-tag>
    <tyh-tag type="danger">标签四</tyh-tag>
    <tyh-tag type="warning">标签五</tyh-tag>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-tag&gt;标签一&lt;/tyh-tag&gt;
&lt;tyh-tag type="primary"&gt;标签二&lt;/tyh-tag&gt;
&lt;tyh-tag type="success"&gt;标签三&lt;/tyh-tag&gt;
&lt;tyh-tag type="danger"&gt;标签四&lt;/tyh-tag&gt;
&lt;tyh-tag type="warning"&gt;标签五&lt;/tyh-tag&gt;
      </code>
    </pre>

    <p class="explain">不同尺寸：</p>
    <p class="explain"><span>size</span> 属性可以配置不同的尺寸</p>
    <tyh-tag type="primary">标签</tyh-tag>
    <tyh-tag size="small" type="primary">标签</tyh-tag>
    <tyh-tag size="mini" type="primary">标签</tyh-tag>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-tag type="primary"&gt;标签&lt;/tyh-tag&gt;
&lt;tyh-tag size="small" type="primary"&gt;标签&lt;/tyh-tag&gt;
&lt;tyh-tag size="mini" type="primary"&gt;标签&lt;/tyh-tag&gt;
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
        { param: 'type', explain: '标签的类型', type: 'string', value: 'default / primary / success / danger / warning', default: 'default' },
        { param: 'size', explain: '标签的尺寸', type: 'string', value: ' — / small / mini', default: '——' },
        { param: 'round', explain: '配置圆角显示', type: 'boolean', value: '——', default: 'false' },
        { param: 'isClose', explain: '是否显示关闭按钮', type: 'boolean', value: '——', default: 'false' }
      ],
      TurnPageList: [
        { text: 'Card 卡片', url: 'card' },
        { text: 'Link 链接', url: 'link' }
      ]
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>

<style lang='less' scoped>
.tyh-tag {
  margin: 5px;
}
</style>
