<template>
  <div id="component-item">
    <h1 class="title">BackTop 回到顶部</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <Tyh-backTop>Top</Tyh-backTop>
    <pre v-highlightjs>
      <code id="myCode" class="html">
 &lt;Tyh-backTop&gt;Top&lt;/Tyh-backTop&gt;
      </code>
    </pre>

    <p class="explain">
      <span>bottom</span> 和 <span>right</span> 属性可以配置距离右边和下边的距离
    </p>
    <Tyh-backTop bottom="100" right="120">Top</Tyh-backTop>
    <pre v-highlightjs>
      <code id="myCode" class="html">
 &lt;Tyh-backTop bottom="100" right="120"&gt;Top&lt;/Tyh-backTop&gt;
      </code>
    </pre>

    <p class="explain">也可以插入 icon 图标</p>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-backTop bottom="160" right="120"&gt;
  &lt;Tyh-icon icon="tyh-ui-huojian-01" color="#409eff" /&gt;
&lt;/Tyh-backTop&gt;
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
import TyhBackTop from 'tyh-ui/packages/backTop'
Vue.use(TyhbackTop)

// 如果使用图标按钮 还需要引入 TyhIcon
import TyhIcon from 'tyh-ui/packages/icon'
Vue.use(TyhButton)
Vue.use(TyhIcon)
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
        { param: 'bottom', explain: '距离下面的距离', type: 'string', value: '——', default: '40' },
        { param: 'right', explain: '距离右面的距离', type: 'string', value: '——', default: '40' }
      ],
      TurnPageList: [
        { text: 'Division 分割线', url: 'division' },
        { text: 'Icon 图标', url: 'icon' }
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
