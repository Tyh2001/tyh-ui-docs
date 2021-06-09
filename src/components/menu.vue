<template>
  <div id="component-item">
    <h1 class="title">Card 卡片</h1>

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
    <p class="explain">
      通过 bottomType 属性可以配置导航栏底部类型（阴影 / 实线 / 无）：
    </p>
    <p class="explain">通过 color 属性可以配置子菜单颜色：</p>
    <Tyh-Menu backgroundColor="#fff" bottomType="border">
      <Tyh-Menu-Item color="#000">首页首页</Tyh-Menu-Item>
      <Tyh-Menu-Item color="#000">内容内容</Tyh-Menu-Item>
      <Tyh-Menu-Item color="#000">链接链接</Tyh-Menu-Item>
      <Tyh-Menu-Item color="#000">链接链接</Tyh-Menu-Item>
      <Tyh-Menu-Item color="#000">链接链接</Tyh-Menu-Item>
    </Tyh-Menu>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-Menu backgroundColor="#fff" bottomType="shadow"&gt;
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

    <!-- 配置项 -->
    <h3 class="Subtitle">配置项：</h3>
    <p class="explain">Tyh-Menu 组件：</p>
    <table class="table">
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
    <p class="explain">Tyh-Menu-Item 子组件：</p>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr v-for="(configure, index) in configures2" :key="index">
        <td>{{ configure.param }}</td>
        <td>{{ configure.explain }}</td>
        <td>{{ configure.type }}</td>
        <td>{{ configure.value }}</td>
        <td>{{ configure.default }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      configures: [
        { param: 'backgroundColor', explain: '导航栏背景色', type: 'string', value: '——', default: '——' },
        { param: 'bottomType', explain: '导航栏底部类型（暂时存在 BUG）', type: 'string', value: 'border / shadow', default: '——' }
      ],
      configures2: [
        { param: 'url', explain: '跳转的路径', type: 'string', value: '——', default: '——' },
        { param: 'prohibit', explain: '是否禁用', type: 'boolean', value: 'true / fasle', default: '——' },
        { param: 'color', explain: '文字颜色', type: 'string', value: '——', default: '#fff' }
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
