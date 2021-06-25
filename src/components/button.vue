<template>
  <div id="component-item">
    <h1 class="title">Button 按钮</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基础使用</p>
    <Tyh-button>默认按钮</Tyh-button>
    <Tyh-button type="primary">主要按钮</Tyh-button>
    <Tyh-button type="success">成功按钮</Tyh-button>
    <Tyh-button type="danger">危险按钮</Tyh-button>
    <Tyh-button type="warning">警告按钮</Tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-button&gt;默认按钮&lt;/Tyh-button&gt;
&lt;Tyh-button type="primary"&gt;主要按钮&lt;/Tyh-button&gt;
&lt;Tyh-button type="success"&gt;成功按钮&lt;/Tyh-button&gt;
&lt;Tyh-button type="danger"&gt;危险按钮&lt;/Tyh-button&gt;
&lt;Tyh-button type="warning"&gt;警告按钮&lt;/Tyh-button&gt;
      </code>
    </pre>

    <p class="explain">禁用状态</p>
    <Tyh-button prohibit>默认按钮</Tyh-button>
    <Tyh-button prohibit type="primary">主要按钮</Tyh-button>
    <Tyh-button prohibit type="success">成功按钮</Tyh-button>
    <Tyh-button prohibit type="danger">危险按钮</Tyh-button>
    <Tyh-button prohibit type="warning">警告按钮</Tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-button prohibit&gt;默认按钮&lt;/Tyh-button&gt;
&lt;Tyh-button prohibit type="primary"&gt;主要按钮&lt;/Tyh-button&gt;
&lt;Tyh-button prohibit type="success"&gt;成功按钮&lt;/Tyh-button&gt;
&lt;Tyh-button prohibit type="danger"&gt;危险按钮&lt;/Tyh-button&gt;
&lt;Tyh-button prohibit type="warning"&gt;警告按钮&lt;/Tyh-button&gt;
      </code>
    </pre>

    <p class="explain">圆角按钮</p>
    <Tyh-button round>默认按钮</Tyh-button>
    <Tyh-button round type="primary">主要按钮</Tyh-button>
    <Tyh-button round type="success">成功按钮</Tyh-button>
    <Tyh-button round type="danger">危险按钮</Tyh-button>
    <Tyh-button round type="warning">警告按钮</Tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-button round&gt;默认按钮&lt;/Tyh-button&gt;
&lt;Tyh-button round type="primary"&gt;主要按钮&lt;/Tyh-button&gt;
&lt;Tyh-button round type="success"&gt;成功按钮&lt;/Tyh-button&gt;
&lt;Tyh-button round type="danger"&gt;危险按钮&lt;/Tyh-button&gt;
&lt;Tyh-button round type="warning"&gt;警告按钮&lt;/Tyh-button&gt;
      </code>
    </pre>

    <!-- 配置项 -->
    <h3 class="Subtitle">配置项：</h3>
    <ConfiguresTable :configures="configures" />

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
        { param: 'type', explain: '按钮的类型', type: 'string', value: 'primary / success / danger / warning', default: '——' },
        { param: 'round', explain: '是否为圆角按钮', type: 'boolean', value: 'true / false', default: 'false' },
        { param: 'prohibit', explain: '按钮是否禁用', type: 'boolean', value: 'true / false', default: 'false' }
      ],
      TurnPageList: [
        { text: 'Color 色彩', url: 'color' },
        { text: 'List 列表', url: 'list' }
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
