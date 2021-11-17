<template>
  <div id="component-item">
    <h1 class="title">Division 分割线</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <tyh-division>这是分割线</tyh-division>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-division&gt;这是分割线&lt;/tyh-division&gt;
      </code>
    </pre>

    <p class="explain"><span>position</span> 属性可以配置文字的位置</p>
    <tyh-division position="left">这是左边文字</tyh-division>
    <br />
    <tyh-division position="center">这是中间文字</tyh-division>
    <br />
    <tyh-division position="right">这是右边文字</tyh-division>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-division position="left"&gt;这是左边文字&lt;/tyh-division&gt;
&lt;tyh-division position="center"&gt;这是中间文字&lt;/tyh-division&gt;
&lt;tyh-division position="right"&gt;这是右边文字&lt;/tyh-division&gt;
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
  name: '',
  components: {
    ConfiguresTable,
    TurnPage
  },
  props: {},
  data () {
    return {
      configures: [
        { param: 'position', explain: '文字位置', type: 'string', value: 'left / center / right', default: 'left' }
      ],
      TurnPageList: [
        { text: 'Message 消息通知', url: 'message' },
        { text: 'BackTop 回到顶部', url: 'backTop' }
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
