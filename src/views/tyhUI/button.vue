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
    <tyh-button icon="tyh-ui-setting-filling">设置</tyh-button>
    <tyh-button icon="tyh-ui-tyhui" type="primary">tyh-ui</tyh-button>
    <tyh-button icon="tyh-ui-fabulous" type="success"></tyh-button>
    <tyh-button icon="tyh-ui-discount" type="danger"></tyh-button>
    <tyh-button icon="tyh-ui-chart-bar" type="warning"></tyh-button>
    <br />
    <tyh-button simple icon="tyh-ui-setting-filling">设置</tyh-button>
    <tyh-button simple icon="tyh-ui-tyhui" type="primary">tyh-ui</tyh-button>
    <tyh-button simple icon="tyh-ui-fabulous" type="success"></tyh-button>
    <tyh-button simple icon="tyh-ui-discount" type="danger"></tyh-button>
    <tyh-button simple icon="tyh-ui-chart-bar" type="warning"></tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-button icon="tyh-ui-setting-filling"&gt;设置&lt;/tyh-button&gt;
&lt;tyh-button icon="tyh-ui-tyhui" type="primary"&gt;tyh-ui&lt;/tyh-button&gt;
&lt;tyh-button icon="tyh-ui-fabulous" type="success"&gt;&lt;/tyh-button&gt;
&lt;tyh-button icon="tyh-ui-discount" type="danger"&gt;&lt;/tyh-button&gt;
&lt;tyh-button icon="tyh-ui-chart-bar" type="warning"&gt;&lt;/tyh-button&gt;

&lt;tyh-button simple icon="tyh-ui-setting-filling"&gt;设置&lt;/tyh-button&gt;
&lt;tyh-button simple icon="tyh-ui-tyhui" type="primary"&gt;tyh-ui&lt;/tyh-button&gt;
&lt;tyh-button simple icon="tyh-ui-fabulous" type="success"&gt;&lt;/tyh-button&gt;
&lt;tyh-button simple icon="tyh-ui-discount" type="danger"&gt;&lt;/tyh-button&gt;
&lt;tyh-button simple icon="tyh-ui-chart-bar" type="warning"&gt;&lt;/tyh-button&gt;
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
        { param: 'type', explain: '按钮的类型', type: 'string', value: 'default / primary / success / danger / warning', default: 'default' },
        { param: 'round', explain: '是否为圆角按钮', type: 'boolean', value: '——', default: 'false' },
        { param: 'simple', explain: '简约按钮', type: 'boolean', value: '——', default: 'false' },
        { param: 'disabled', explain: '按钮是否禁用', type: 'boolean', value: '——', default: 'false' },
        { param: 'icon', explain: '按钮上的 icon', type: 'string', value: '——', default: '——' },
        { param: 'size', explain: '按钮尺寸', type: 'string', value: 'large / small / mini', default: '——' },
        { param: 'square', explain: '方形按钮', type: 'boolean', value: '——', default: 'false' }
      ],
      TurnPageList: [
        { text: 'Color 色彩', url: 'color' },
        { text: 'List 列表', url: 'list' }
      ]
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>

<style lang='less' scoped>
.tyh-button {
  margin: 5px;
}
</style>
