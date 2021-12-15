<template>
  <div id="component-item">
    <h1 class="title">Menu 导航栏</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <tyh-menu>
      <tyh-menu-item>首页</tyh-menu-item>
      <tyh-menu-item>内容</tyh-menu-item>
      <tyh-menu-item>设置</tyh-menu-item>
      <tyh-menu-item>回收站</tyh-menu-item>
    </tyh-menu>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-menu&gt;
  &lt;tyh-menu-item&gt;首页&lt;/tyh-menu-item&gt;
  &lt;tyh-menu-item&gt;内容&lt;/tyh-menu-item&gt;
  &lt;tyh-menu-item&gt;设置&lt;/tyh-menu-item&gt;
  &lt;tyh-menu-item&gt;回收站&lt;/tyh-menu-item&gt;
&lt;/tyh-menu&gt;
      </code>
    </pre>

    <p class="explain">
      通过 <span>backgroundColor</span> 属性可以配置导航栏背景色：
    </p>
    <p class="explain">通过 <span>color</span> 属性可以配置子菜单颜色：</p>
    <tyh-menu backgroundColor="#eee">
      <tyh-menu-item color="#000">首页</tyh-menu-item>
      <tyh-menu-item color="#000">内容</tyh-menu-item>
      <tyh-menu-item color="#000">设置</tyh-menu-item>
      <tyh-menu-item color="#000">回收站</tyh-menu-item>
    </tyh-menu>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-menu backgroundColor="#eee"&gt;
  &lt;tyh-menu-item color="#000"&gt;首页&lt;/tyh-menu-item&gt;
  &lt;tyh-menu-item color="#000"&gt;内容&lt;/tyh-menu-item&gt;
  &lt;tyh-menu-item color="#000"&gt;设置&lt;/tyh-menu-item&gt;
  &lt;tyh-menu-item color="#000"&gt;回收站&lt;/tyh-menu-item&gt;
&lt;/tyh-menu&gt;
      </code>
    </pre>

    <p class="explain">
      通过 <span>prohibit</span> 属性可以配置子组件链接是否禁用：
    </p>
    <tyh-menu>
      <tyh-menu-item prohibit url="/home">首页</tyh-menu-item>
      <tyh-menu-item prohibit url="/abc">内容</tyh-menu-item>
      <tyh-menu-item url="">设置</tyh-menu-item>
      <tyh-menu-item url="">回收站</tyh-menu-item>
    </tyh-menu>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-menu&gt;
  &lt;tyh-menu-item prohibit url="/home"&gt;首页&lt;/tyh-menu-item&gt;
  &lt;tyh-menu-item prohibit url="/abc"&gt;内容&lt;/tyh-menu-item&gt;
  &lt;tyh-menu-item&gt;设置&lt;/tyh-menu-item&gt;
  &lt;tyh-menu-item&gt;回收站&lt;/tyh-menu-item&gt;
&lt;/tyh-menu&gt;
      </code>
    </pre>

    <p class="explain">带有 Icon 的</p>
    <tyh-menu>
      <tyh-menu-item url="/home">
        <tyh-icon icon="tyh-ui-home-01" color="#fff" />
        首页
      </tyh-menu-item>
      <tyh-menu-item url="/abc">
        <tyh-icon icon="tyh-ui-PaperPlane-01" color="#fff" />
        内容
      </tyh-menu-item>
      <tyh-menu-item url="">
        <tyh-icon icon="tyh-ui-setting-01" color="#fff" />
        设置
      </tyh-menu-item>
      <tyh-menu-item url="">
        <tyh-icon icon="tyh-ui-trash-01" color="#fff" />
        回收站
      </tyh-menu-item>
    </tyh-menu>

    <pre v-highlightjs>
      <code id="myCode" class="html">
 &lt;tyh-menu&gt;
  &lt;tyh-menu-item url="/home"&gt;
    &lt;tyh-icon icon="tyh-ui-home-01" color="#fff" /&gt;
    首页
  &lt;/tyh-menu-item&gt;
  &lt;tyh-menu-item url="/abc"&gt;
    &lt;tyh-icon icon="tyh-ui-PaperPlane-01" color="#fff" /&gt;
    内容
  &lt;/tyh-menu-item&gt;
  &lt;tyh-menu-item url=""&gt;
    &lt;tyh-icon icon="tyh-ui-setting-01" color="#fff" /&gt;
    设置
  &lt;/tyh-menu-item&gt;
  &lt;tyh-menu-item url=""&gt;
    &lt;tyh-icon icon="tyh-ui-trash-01" color="#fff" /&gt;
    回收站
  &lt;/tyh-menu-item&gt;
&lt;/tyh-menu&gt;
      </code>
    </pre>

    <!-- 配置项 -->
    <h3 class="Subtitle">配置项：</h3>
    <p class="explain">tyh-menu 组件：</p>
    <h3 class="Subtitle">配置项</h3>
    <tyh-table zebra align="center" :data="configures" :columns="columns" />

    <p class="explain">tyh-menu-item 子组件：</p>
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
  }
}
</script>

<style src="../style/index.css" scoped></style>
