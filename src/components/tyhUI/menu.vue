<template>
  <div id="component-item">
    <h1 class="title">Menu 导航栏</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <tyh-Menu>
      <tyh-Menu-Item>首页</tyh-Menu-Item>
      <tyh-Menu-Item>内容</tyh-Menu-Item>
      <tyh-Menu-Item>设置</tyh-Menu-Item>
      <tyh-Menu-Item>回收站</tyh-Menu-Item>
    </tyh-Menu>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-Menu&gt;
  &lt;tyh-Menu-Item&gt;首页&lt;/tyh-Menu-Item&gt;
  &lt;tyh-Menu-Item&gt;内容&lt;/tyh-Menu-Item&gt;
  &lt;tyh-Menu-Item&gt;设置&lt;/tyh-Menu-Item&gt;
  &lt;tyh-Menu-Item&gt;回收站&lt;/tyh-Menu-Item&gt;
&lt;/tyh-Menu&gt;
      </code>
    </pre>

    <p class="explain">
      通过 <span>backgroundColor</span> 属性可以配置导航栏背景色：
    </p>
    <p class="explain">通过 <span>color</span> 属性可以配置子菜单颜色：</p>
    <tyh-Menu backgroundColor="#eee">
      <tyh-Menu-Item color="#000">首页</tyh-Menu-Item>
      <tyh-Menu-Item color="#000">内容</tyh-Menu-Item>
      <tyh-Menu-Item color="#000">设置</tyh-Menu-Item>
      <tyh-Menu-Item color="#000">回收站</tyh-Menu-Item>
    </tyh-Menu>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-Menu backgroundColor="#eee"&gt;
  &lt;tyh-Menu-Item color="#000"&gt;首页&lt;/tyh-Menu-Item&gt;
  &lt;tyh-Menu-Item color="#000"&gt;内容&lt;/tyh-Menu-Item&gt;
  &lt;tyh-Menu-Item color="#000"&gt;设置&lt;/tyh-Menu-Item&gt;
  &lt;tyh-Menu-Item color="#000"&gt;回收站&lt;/tyh-Menu-Item&gt;
&lt;/tyh-Menu&gt;
      </code>
    </pre>

    <p class="explain">
      通过 <span>prohibit</span> 属性可以配置子组件链接是否禁用：
    </p>
    <tyh-Menu>
      <tyh-Menu-Item prohibit url="/home">首页</tyh-Menu-Item>
      <tyh-Menu-Item prohibit url="/abc">内容</tyh-Menu-Item>
      <tyh-Menu-Item url="">设置</tyh-Menu-Item>
      <tyh-Menu-Item url="">回收站</tyh-Menu-Item>
    </tyh-Menu>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-Menu&gt;
  &lt;tyh-Menu-Item prohibit url="/home"&gt;首页&lt;/tyh-Menu-Item&gt;
  &lt;tyh-Menu-Item prohibit url="/abc"&gt;内容&lt;/tyh-Menu-Item&gt;
  &lt;tyh-Menu-Item&gt;设置&lt;/tyh-Menu-Item&gt;
  &lt;tyh-Menu-Item&gt;回收站&lt;/tyh-Menu-Item&gt;
&lt;/tyh-Menu&gt;
      </code>
    </pre>

    <p class="explain">带有 Icon 的</p>
    <tyh-Menu>
      <tyh-Menu-Item url="/home">
        <tyh-icon icon="tyh-ui-home-01" color="#fff" />
        首页
      </tyh-Menu-Item>
      <tyh-Menu-Item url="/abc">
        <tyh-icon icon="tyh-ui-PaperPlane-01" color="#fff" />
        内容
      </tyh-Menu-Item>
      <tyh-Menu-Item url="">
        <tyh-icon icon="tyh-ui-setting-01" color="#fff" />
        设置
      </tyh-Menu-Item>
      <tyh-Menu-Item url="">
        <tyh-icon icon="tyh-ui-trash-01" color="#fff" />
        回收站
      </tyh-Menu-Item>
    </tyh-Menu>

    <pre v-highlightjs>
      <code id="myCode" class="html">
 &lt;tyh-Menu&gt;
  &lt;tyh-Menu-Item url="/home"&gt;
    &lt;tyh-icon icon="tyh-ui-home-01" color="#fff" /&gt;
    首页
  &lt;/tyh-Menu-Item&gt;
  &lt;tyh-Menu-Item url="/abc"&gt;
    &lt;tyh-icon icon="tyh-ui-PaperPlane-01" color="#fff" /&gt;
    内容
  &lt;/tyh-Menu-Item&gt;
  &lt;tyh-Menu-Item url=""&gt;
    &lt;tyh-icon icon="tyh-ui-setting-01" color="#fff" /&gt;
    设置
  &lt;/tyh-Menu-Item&gt;
  &lt;tyh-Menu-Item url=""&gt;
    &lt;tyh-icon icon="tyh-ui-trash-01" color="#fff" /&gt;
    回收站
  &lt;/tyh-Menu-Item&gt;
&lt;/tyh-Menu&gt;
      </code>
    </pre>

    <!-- 配置项 -->
    <h3 class="Subtitle">配置项：</h3>
    <p class="explain">tyh-Menu 组件：</p>
    <ConfiguresTable :configures="configures" />

    <p class="explain">tyh-Menu-Item 子组件：</p>
    <ConfiguresTable :configures="configures2" />

    <h3 class="Subtitle">按需引入：</h3>
    <p class="explain">
      通过下面按需引入的方式，我们可以只引入需要的组件，以达到减小项目体积的目的
    </p>
    <pre v-highlightjs>
      <code id="myCode" class="js">
import Vue from 'vue'
import TyhMenu from 'tyh-ui/packages/menu'
import TyhMenuItem from 'tyh-ui/packages/menu-item'
Vue.use(TyhMenu)
Vue.use(TyhMenuItem)
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
        { param: 'backgroundColor', explain: '导航栏背景色', type: 'string', value: '——', default: '——' },
        { param: 'buttomShadow', explain: '底部是否显示阴影', type: 'boolean', value: '——', default: 'false' }
      ],
      configures2: [
        { param: 'url', explain: '跳转的路径', type: 'string', value: '——', default: '——' },
        { param: 'prohibit', explain: '是否禁用', type: 'boolean', value: '——', default: '——' },
        { param: 'color', explain: '文字颜色', type: 'string', value: '——', default: '#fff' }
      ],
      TurnPageList: [
        { text: 'Tips 提示', url: 'tips' },
        { text: 'Message 消息提示', url: 'message' }
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
