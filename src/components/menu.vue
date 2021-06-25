<template>
  <div id="component-item">
    <h1 class="title">Menu 导航栏</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <Tyh-Menu>
      <Tyh-Menu-Item>首页首页</Tyh-Menu-Item>
      <Tyh-Menu-Item>内容内容</Tyh-Menu-Item>
      <Tyh-Menu-Item>链接链接</Tyh-Menu-Item>
      <Tyh-Menu-Item>链接链接</Tyh-Menu-Item>
      <Tyh-Menu-Item>链接链接</Tyh-Menu-Item>
    </Tyh-Menu>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-Menu&gt;
  &lt;Tyh-Menu-Item&gt;首页首页&lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item&gt;内容内容&lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item&gt;链接链接&lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item&gt;链接链接&lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item&gt;链接链接&lt;/Tyh-Menu-Item&gt;
&lt;/Tyh-Menu&gt;
      </code>
    </pre>

    <p class="explain">通过 backgroundColor 属性可以配置导航栏背景色：</p>
    <p class="explain">通过 color 属性可以配置子菜单颜色：</p>
    <Tyh-Menu backgroundColor="#eee">
      <Tyh-Menu-Item color="#000">首页首页</Tyh-Menu-Item>
      <Tyh-Menu-Item color="#000">内容内容</Tyh-Menu-Item>
      <Tyh-Menu-Item color="#000">链接链接</Tyh-Menu-Item>
      <Tyh-Menu-Item color="#000">链接链接</Tyh-Menu-Item>
      <Tyh-Menu-Item color="#000">链接链接</Tyh-Menu-Item>
    </Tyh-Menu>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-Menu backgroundColor="#eee"&gt;
  &lt;Tyh-Menu-Item color="#000"&gt;首页首页&lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item color="#000"&gt;内容内容&lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item color="#000"&gt;链接链接&lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item color="#000"&gt;链接链接&lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item color="#000"&gt;链接链接&lt;/Tyh-Menu-Item&gt;
&lt;/Tyh-Menu&gt;
      </code>
    </pre>

    <p class="explain">通过 prohibit 属性可以配置子组件链接是否禁用：</p>
    <Tyh-Menu>
      <Tyh-Menu-Item prohibit url="/home">首页首页</Tyh-Menu-Item>
      <Tyh-Menu-Item prohibit url="/abc">内容内容</Tyh-Menu-Item>
      <Tyh-Menu-Item url="">链接链接</Tyh-Menu-Item>
      <Tyh-Menu-Item url="">链接链接</Tyh-Menu-Item>
    </Tyh-Menu>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-Menu&gt;
  &lt;Tyh-Menu-Item prohibit url="/home"&gt;首页首页&lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item prohibit url="/abc"&gt;内容内容&lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item&gt;链接链接&lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item&gt;链接链接&lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item&gt;链接链接&lt;/Tyh-Menu-Item&gt;
&lt;/Tyh-Menu&gt;
      </code>
    </pre>

    <p class="explain">带有 Icon 的：</p>
    <Tyh-Menu>
      <Tyh-Menu-Item url="/home">
        <Tyh-icon icon="tyh-ui-home-01" color="#fff" />
        首页
      </Tyh-Menu-Item>
      <Tyh-Menu-Item url="/abc">
        <Tyh-icon icon="tyh-ui-PaperPlane-01" color="#fff" />
        内容
      </Tyh-Menu-Item>
      <Tyh-Menu-Item url="">
        <Tyh-icon icon="tyh-ui-setting-01" color="#fff" />
        设置
      </Tyh-Menu-Item>
      <Tyh-Menu-Item url="">
        <Tyh-icon icon="tyh-ui-trash-01" color="#fff" />
        回收站
      </Tyh-Menu-Item>
    </Tyh-Menu>

    <pre v-highlightjs>
      <code id="myCode" class="html">
 &lt;Tyh-Menu&gt;
  &lt;Tyh-Menu-Item url="/home"&gt;
    &lt;Tyh-icon icon="tyh-ui-home-01" color="#fff" /&gt;
    首页
  &lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item url="/abc"&gt;
    &lt;Tyh-icon icon="tyh-ui-PaperPlane-01" color="#fff" /&gt;
    内容
  &lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item url=""&gt;
    &lt;Tyh-icon icon="tyh-ui-setting-01" color="#fff" /&gt;
    设置
  &lt;/Tyh-Menu-Item&gt;
  &lt;Tyh-Menu-Item url=""&gt;
    &lt;Tyh-icon icon="tyh-ui-trash-01" color="#fff" /&gt;
    回收站
  &lt;/Tyh-Menu-Item&gt;
&lt;/Tyh-Menu&gt;
      </code>
    </pre>

    <!-- 配置项 -->
    <h3 class="Subtitle">配置项：</h3>
    <p class="explain">Tyh-Menu 组件：</p>
    <ConfiguresTable :configures="configures" />

    <p class="explain">Tyh-Menu-Item 子组件：</p>
    <ConfiguresTable :configures="configures2" />

    <TurnPage :TurnPageList="TurnPageList" />
  </div>
</template>

<script>
import ConfiguresTable from './components/ConfiguresTable'
import TurnPage from './components/TurnPage'
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

<style src="./style/index.css" scoped></style>
