<template>
  <div id="component-item">
    <h1 class="title">Crumbs 面包屑</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <tyh-crumbs>
      <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
      <tyh-crumbs-item>学员管理</tyh-crumbs-item>
      <tyh-crumbs-item>文章管理</tyh-crumbs-item>
      <tyh-crumbs-item>设置</tyh-crumbs-item>
    </tyh-crumbs>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-crumbs&gt;
  &lt;tyh-crumbs-item to="/"&gt;首页&lt;/tyh-crumbs-item&gt;
  &lt;tyh-crumbs-item&gt;学员管理&lt;/tyh-crumbs-item&gt;
  &lt;tyh-crumbs-item&gt;文章管理&lt;/tyh-crumbs-item&gt;
  &lt;tyh-crumbs-item&gt;设置&lt;/tyh-crumbs-item&gt;
&lt;/tyh-crumbs&gt;
      </code>
    </pre>

    <p class="explain">不同的分隔符：</p>
    <p class="explain">
      通过给父组件<span>separator</span> 属性可以配置不同的分隔符，使用 icon
      类名
    </p>
    <tyh-crumbs separator="tyh-ui-right-02">
      <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
      <tyh-crumbs-item>学员管理</tyh-crumbs-item>
      <tyh-crumbs-item>文章管理</tyh-crumbs-item>
      <tyh-crumbs-item>设置</tyh-crumbs-item>
    </tyh-crumbs>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-crumbs separator="tyh-ui-right-02"&gt;
  &lt;tyh-crumbs-item to="/"&gt;首页&lt;/tyh-crumbs-item&gt;
  &lt;tyh-crumbs-item&gt;学员管理&lt;/tyh-crumbs-item&gt;
  &lt;tyh-crumbs-item&gt;文章管理&lt;/tyh-crumbs-item&gt;
  &lt;tyh-crumbs-item&gt;设置&lt;/tyh-crumbs-item&gt;
&lt;/tyh-crumbs&gt;
      </code>
    </pre>

    <p class="explain">跳转：</p>
    <p class="explain">
      通过给子组件<span>to</span>
      属性可以配置跳转路径，添加该属性后文章点击会跳转，并且加粗显示
    </p>
    <tyh-crumbs>
      <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
      <tyh-crumbs-item to="/student">学员管理</tyh-crumbs-item>
      <tyh-crumbs-item>文章管理</tyh-crumbs-item>
      <tyh-crumbs-item>设置</tyh-crumbs-item>
    </tyh-crumbs>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-crumbs&gt;
  &lt;tyh-crumbs-item to="/"&gt;首页&lt;/tyh-crumbs-item&gt;
  &lt;tyh-crumbs-item to="/student"&gt;学员管理&lt;/tyh-crumbs-item&gt;
  &lt;tyh-crumbs-item&gt;文章管理&lt;/tyh-crumbs-item&gt;
  &lt;tyh-crumbs-item&gt;设置&lt;/tyh-crumbs-item&gt;
&lt;/tyh-crumbs&gt;
      </code>
    </pre>

    <h3 class="Subtitle">tyh-Crumbs 配置项</h3>
    <tyh-table zebra align="center" :data="configures" :columns="columns" />

    <p class="Subtitle">tyh-Crumbs-Item 配置项</p>
    <tyh-table zebra align="center" :data="configures2" :columns="columns" />

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
        { param: 'separator', explain: '分隔符，icon 的类名', type: 'string', value: '——', default: 'tyh-ui-xiexian-01' }
      ],
      configures2: [
        { param: 'to', explain: '跳转的路径', type: 'string', value: '——', default: '——' }
      ],
      TurnPageList: [
        { text: 'Icon 图标', url: 'icon' },
        { text: 'Table 表格', url: 'table' }
      ]
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>

<style lang='less' scoped>
</style>
