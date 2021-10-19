<template>
  <div id="component-item">
    <h1 class="title">Button 按钮</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基础使用</p>
    <tyh-button>默认按钮</tyh-button>
    <tyh-button type="primary">主要按钮</tyh-button>
    <tyh-button type="success">成功按钮</tyh-button>
    <tyh-button type="danger">危险按钮</tyh-button>
    <tyh-button type="warning">警告按钮</tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-button&gt;默认按钮&lt;/tyh-button&gt;
&lt;tyh-button type="primary"&gt;主要按钮&lt;/tyh-button&gt;
&lt;tyh-button type="success"&gt;成功按钮&lt;/tyh-button&gt;
&lt;tyh-button type="danger"&gt;危险按钮&lt;/tyh-button&gt;
&lt;tyh-button type="warning"&gt;警告按钮&lt;/tyh-button&gt;
      </code>
    </pre>

    <p class="explain">朴素的按钮</p>
    <p class="explain"><span>simple</span> 属性可以配置朴素的按钮</p>
    <tyh-button simple type="primary">主要按钮</tyh-button>
    <tyh-button simple type="success">成功按钮</tyh-button>
    <tyh-button simple type="danger">危险按钮</tyh-button>
    <tyh-button simple type="warning">警告按钮</tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-button simple type="primary"&gt;主要按钮&lt;/tyh-button&gt;
&lt;tyh-button simple type="success"&gt;成功按钮&lt;/tyh-button&gt;
&lt;tyh-button simple type="danger"&gt;危险按钮&lt;/tyh-button&gt;
&lt;tyh-button simple type="warning"&gt;警告按钮&lt;/tyh-button&gt;
      </code>
    </pre>

    <p class="explain">图标按钮</p>
    <p class="explain"><span>icon</span> 属性可以配置图标按钮</p>
    <tyh-button icon="tyh-ui-setting-01" type="primary"></tyh-button>
    <tyh-button icon="tyh-ui-phone-01" type="success"></tyh-button>
    <tyh-button icon="tyh-ui-huojian-01" type="danger">火箭</tyh-button>
    <tyh-button icon="tyh-ui-PaperPlane-01" type="warning">飞机</tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-button icon="tyh-ui-setting-01" type="primary"&gt;&lt;/tyh-button&gt;
&lt;tyh-button icon="tyh-ui-phone-01" type="success"&gt;&lt;/tyh-button&gt;
&lt;tyh-button icon="tyh-ui-huojian-01" type="danger"&gt;火箭&lt;/tyh-button&gt;
&lt;tyh-button icon="tyh-ui-PaperPlane-01" type="warning"&gt;飞机&lt;/tyh-button&gt;
      </code>
    </pre>

    <p class="explain">禁用状态</p>
    <p class="explain"><span>prohibit</span> 属性可以配置禁用状态</p>
    <tyh-button prohibit>默认按钮</tyh-button>
    <tyh-button prohibit type="primary">主要按钮</tyh-button>
    <tyh-button prohibit type="success">成功按钮</tyh-button>
    <tyh-button prohibit type="danger">危险按钮</tyh-button>
    <tyh-button prohibit type="warning">警告按钮</tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-button prohibit&gt;默认按钮&lt;/tyh-button&gt;
&lt;tyh-button prohibit type="primary"&gt;主要按钮&lt;/tyh-button&gt;
&lt;tyh-button prohibit type="success"&gt;成功按钮&lt;/tyh-button&gt;
&lt;tyh-button prohibit type="danger"&gt;危险按钮&lt;/tyh-button&gt;
&lt;tyh-button prohibit type="warning"&gt;警告按钮&lt;/tyh-button&gt;
      </code>
    </pre>

    <p class="explain">圆角按钮</p>
    <p class="explain"><span>round</span> 属性可以配置圆角按钮</p>
    <tyh-button round>默认按钮</tyh-button>
    <tyh-button round type="primary">主要按钮</tyh-button>
    <tyh-button round type="success">成功按钮</tyh-button>
    <tyh-button round type="danger">危险按钮</tyh-button>
    <tyh-button round type="warning">警告按钮</tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-button round&gt;默认按钮&lt;/tyh-button&gt;
&lt;tyh-button round type="primary"&gt;主要按钮&lt;/tyh-button&gt;
&lt;tyh-button round type="success"&gt;成功按钮&lt;/tyh-button&gt;
&lt;tyh-button round type="danger"&gt;危险按钮&lt;/tyh-button&gt;
&lt;tyh-button round type="warning"&gt;警告按钮&lt;/tyh-button&gt;
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
import TyhButton from 'tyh-ui/packages/button'
Vue.use(TyhButton)
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
        { param: 'type', explain: '按钮的类型', type: 'string', value: 'primary / success / danger / warning', default: '——' },
        { param: 'round', explain: '是否为圆角按钮', type: 'boolean', value: '——', default: 'false' },
        { param: 'prohibit', explain: '按钮是否禁用', type: 'boolean', value: '——', default: 'false' },
        { param: 'icon', explain: '按钮上的 icon', type: 'string', value: '——', default: '——' },
        { param: 'simple', explain: '是否为朴素按钮', type: 'boolean', value: '——', default: 'fasle' }
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

<style src="../style/index.css" scoped></style>

<style lang='less' scoped>
.tyh-button {
  margin: 5px;
}
</style>
