<template>
  <div id="component-item">
    <h1 class="title">Crumbs 面包屑</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <Tyh-crumbs>
      <Tyh-crumbs-item to="/">首页</Tyh-crumbs-item>
      <Tyh-crumbs-item>学员管理</Tyh-crumbs-item>
      <Tyh-crumbs-item>文章管理</Tyh-crumbs-item>
      <Tyh-crumbs-item>设置</Tyh-crumbs-item>
    </Tyh-crumbs>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-crumbs&gt;
  &lt;Tyh-crumbs-item to="/"&gt;首页&lt;/Tyh-crumbs-item&gt;
  &lt;Tyh-crumbs-item&gt;学员管理&lt;/Tyh-crumbs-item&gt;
  &lt;Tyh-crumbs-item&gt;文章管理&lt;/Tyh-crumbs-item&gt;
  &lt;Tyh-crumbs-item&gt;设置&lt;/Tyh-crumbs-item&gt;
&lt;/Tyh-crumbs&gt;
      </code>
    </pre>

    <p class="explain">不同的分隔符：</p>
    <p class="explain">
      通过给父组件<span>separator</span> 属性可以配置不同的分隔符，使用 icon
      类名
    </p>
    <Tyh-crumbs separator="tyh-ui-right-02">
      <Tyh-crumbs-item to="/">首页</Tyh-crumbs-item>
      <Tyh-crumbs-item>学员管理</Tyh-crumbs-item>
      <Tyh-crumbs-item>文章管理</Tyh-crumbs-item>
      <Tyh-crumbs-item>设置</Tyh-crumbs-item>
    </Tyh-crumbs>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-crumbs separator="tyh-ui-right-02"&gt;
  &lt;Tyh-crumbs-item to="/"&gt;首页&lt;/Tyh-crumbs-item&gt;
  &lt;Tyh-crumbs-item&gt;学员管理&lt;/Tyh-crumbs-item&gt;
  &lt;Tyh-crumbs-item&gt;文章管理&lt;/Tyh-crumbs-item&gt;
  &lt;Tyh-crumbs-item&gt;设置&lt;/Tyh-crumbs-item&gt;
&lt;/Tyh-crumbs&gt;
      </code>
    </pre>

    <p class="explain">跳转：</p>
    <p class="explain">
      通过给子组件<span>to</span>
      属性可以配置跳转路径，添加该属性后文章点击会跳转，并且加粗显示
    </p>
    <Tyh-crumbs>
      <Tyh-crumbs-item to="/">首页</Tyh-crumbs-item>
      <Tyh-crumbs-item to="/student">学员管理</Tyh-crumbs-item>
      <Tyh-crumbs-item>文章管理</Tyh-crumbs-item>
      <Tyh-crumbs-item>设置</Tyh-crumbs-item>
    </Tyh-crumbs>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-crumbs&gt;
  &lt;Tyh-crumbs-item to="/"&gt;首页&lt;/Tyh-crumbs-item&gt;
  &lt;Tyh-crumbs-item to="/student"&gt;学员管理&lt;/Tyh-crumbs-item&gt;
  &lt;Tyh-crumbs-item&gt;文章管理&lt;/Tyh-crumbs-item&gt;
  &lt;Tyh-crumbs-item&gt;设置&lt;/Tyh-crumbs-item&gt;
&lt;/Tyh-crumbs&gt;
      </code>
    </pre>

    <!-- 配置项 -->
    <h3 class="Subtitle">配置项：</h3>
    <p class="explain">Tyh-Crumbs 组件：</p>
    <ConfiguresTable :configures="configures" />

    <p class="explain">Tyh-Crumbs-Item 子组件：</p>
    <ConfiguresTable :configures="configures2" />

    <h3 class="Subtitle">按需引入：</h3>
    <p class="explain">
      通过下面按需引入的方式，我们可以只引入需要的组件，以达到减小项目体积的目的
    </p>
    <pre v-highlightjs>
      <code id="myCode" class="js">
import Vue from 'vue'
import TyhCrumbs from 'tyh-ui/packages/crumbs'
import TyhCrumbsItem from 'tyh-ui/packages/crumbs-item'
Vue.use(TyhCrumbs)
Vue.use(TyhCrumbsItem)
      </code>
    </pre>

    <TurnPage :TurnPageList="TurnPageList" />
  </div>
</template>

<script>
import ConfiguresTable from '../components/ConfiguresTable'
import TurnPage from '../components/TurnPage'
export default {
  name: '',
  components: {
    ConfiguresTable,
    TurnPage
  },
  props: {},
  data () {
    return {
      configures: [
        { param: 'separator', explain: '分隔符，icon 的类名（暂时存在 bug）', type: 'string', value: '——', default: 'tyh-ui-xiexian-01' }
      ],
      configures2: [
        { param: 'to', explain: '跳转的路径', type: 'string', value: '——', default: '——' }
      ],
      TurnPageList: [
        { text: 'Icon 图标', url: 'icon' },
        { text: '', url: '' }
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

<style src="../style/index.css" scoped></style>

<style lang='less' scoped>
</style>
