<template>
  <div id="component-item">
    <h1 class="title">Link 链接</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <Tyh-link url="">链接一</Tyh-link>
    <Tyh-link url="" color="primary">链接二</Tyh-link>
    <Tyh-link url="" color="success">链接三</Tyh-link>
    <Tyh-link url="" color="danger">链接四</Tyh-link>
    <Tyh-link url="" color="warning">链接五</Tyh-link>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-link url=""&gt;链接一&lt;/Tyh-link&gt;
&lt;Tyh-link url="" color="primary"&gt;链接二&lt;/Tyh-link&gt;
&lt;Tyh-link url="" color="success"&gt;链接三&lt;/Tyh-link&gt;
&lt;Tyh-link url="" color="danger"&gt;链接四&lt;/Tyh-link&gt;
&lt;Tyh-link url="" color="warning"&gt;链接五&lt;/Tyh-link&gt;
      </code>
    </pre>

    <p class="explain">带有下划线：</p>
    <p class="explain"><span>underline</span> 属性可以配置带有下划线</p>
    <Tyh-link underline>标签</Tyh-link>
    <Tyh-link underline color="primary">标签</Tyh-link>
    <Tyh-link underline color="success">标签</Tyh-link>
    <Tyh-link underline color="danger">标签</Tyh-link>
    <Tyh-link underline color="warning">标签</Tyh-link>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-link underline&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link underline color="primary"&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link underline color="success"&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link underline color="danger"&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link underline color="warning"&gt;标签&lt;/Tyh-link&gt;
      </code>
    </pre>

    <p class="explain">鼠标移入带有下划线：</p>
    <p class="explain"><span>hoverline</span> 属性可以配置鼠标移入带有下划线</p>
    <Tyh-link hoverline>标签</Tyh-link>
    <Tyh-link hoverline color="primary">标签</Tyh-link>
    <Tyh-link hoverline color="success">标签</Tyh-link>
    <Tyh-link hoverline color="danger">标签</Tyh-link>
    <Tyh-link hoverline color="warning">标签</Tyh-link>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-link hoverline&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link hoverline color="primary"&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link hoverline color="success"&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link hoverline color="danger"&gt;标签&lt;/Tyh-link&gt;
&lt;Tyh-link hoverline color="warning"&gt;标签&lt;/Tyh-link&gt;
      </code>
    </pre>

    <!-- 配置项 -->
    <h3 class="Subtitle">配置项：</h3>
    <ConfiguresTable :configures="configures" />

    <h3 class="Subtitle">按需引入：</h3>
    <p class="explain">
      通过下面按需引入的方式，我们可以只引入需要的组件，以达到减小项目体积的目的
    </p>
    <pre v-highlightjs>
      <code id="myCode" class="js">
import Vue from 'vue'
import TyhLink from 'tyh-ui/packages/link'
Vue.use(TyhLink)
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
        { param: 'url', explain: '跳转的路径', type: 'string', value: '——', default: '——' },
        { param: 'color', explain: '链接的字体颜色', type: 'string', value: 'primary / success / danger / warning', default: '——' },
        { param: 'underline', explain: '下划线', type: 'boolean', value: '——', default: 'fasle' },
        { param: 'hoverline', explain: '鼠标移入下划线', type: 'boolean', value: '——', default: 'fasle' },
        { param: 'target', explain: '以新的窗口打开', type: 'string', value: '同原生 target 属性 _blank', default: '——' }
      ],
      TurnPageList: [
        { text: 'Tag 标签', url: 'tag' },
        { text: 'Input 输入框', url: 'input' }
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
.tyh-link {
  margin: 5px;
}
</style>
