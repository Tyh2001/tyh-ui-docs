<template>
  <div id="component-item">
    <h1 class="title">Link 链接</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <tyh-link url="">链接一</tyh-link>
    <tyh-link url="" type="primary">链接二</tyh-link>
    <tyh-link url="" type="success">链接三</tyh-link>
    <tyh-link url="" type="danger">链接四</tyh-link>
    <tyh-link url="" type="warning">链接五</tyh-link>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-link url=""&gt;链接一&lt;/tyh-link&gt;
&lt;tyh-link url="" type="primary"&gt;链接二&lt;/tyh-link&gt;
&lt;tyh-link url="" type="success"&gt;链接三&lt;/tyh-link&gt;
&lt;tyh-link url="" type="danger"&gt;链接四&lt;/tyh-link&gt;
&lt;tyh-link url="" type="warning"&gt;链接五&lt;/tyh-link&gt;
      </code>
    </pre>

    <p class="explain">带有下划线：</p>
    <p class="explain"><span>underline</span> 属性可以配置带有下划线</p>
    <tyh-link :underline="false">链接一</tyh-link>
    <tyh-link :underline="false" type="primary">链接二</tyh-link>
    <tyh-link :underline="false" type="success">链接三</tyh-link>
    <tyh-link :underline="false" type="danger">链接四</tyh-link>
    <tyh-link :underline="false" type="warning">链接五</tyh-link>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-link :underline="false" url=""&gt;链接一&lt;/tyh-link&gt;
&lt;tyh-link :underline="false" url="" type="primary"&gt;链接二&lt;/tyh-link&gt;
&lt;tyh-link :underline="false" url="" type="success"&gt;链接三&lt;/tyh-link&gt;
&lt;tyh-link :underline="false" url="" type="danger"&gt;链接四&lt;/tyh-link&gt;
&lt;tyh-link :underline="false" url="" type="warning"&gt;链接五&lt;/tyh-link&gt;
      </code>
    </pre>

    <p class="explain">禁用状态：</p>
    <p class="explain"><span>prohibit</span> 属性可以配置鼠标移入带有下划线</p>
    <tyh-link url="" prohibit>禁用链接一</tyh-link>
    <tyh-link url="" prohibit type="primary">禁用链接二</tyh-link>
    <tyh-link url="" prohibit type="success">禁用链接三</tyh-link>
    <tyh-link url="" prohibit type="danger">禁用链接四</tyh-link>
    <tyh-link url="" prohibit type="warning">禁用链接五</tyh-link>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-link prohibit url=""&gt;链接一&lt;/tyh-link&gt;
&lt;tyh-link prohibit url="" type="primary"&gt;链接二&lt;/tyh-link&gt;
&lt;tyh-link prohibit url="" type="success"&gt;链接三&lt;/tyh-link&gt;
&lt;tyh-link prohibit url="" type="danger"&gt;链接四&lt;/tyh-link&gt;
&lt;tyh-link prohibit url="" type="warning"&gt;链接五&lt;/tyh-link&gt;
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
        { param: 'url', explain: '跳转的路径', type: 'string', value: '——', default: '——' },
        { param: 'type', explain: '链接的类型', type: 'string', value: 'primary / success / danger / warning', default: '——' },
        { param: 'underline', explain: '无下划线', type: 'boolean', value: '——', default: 'true' },
        { param: 'target', explain: '以新的窗口打开', type: 'string', value: '同原生 target 属性 _blank', default: '——' },
        { param: 'icon', explain: 'icon', type: 'string', value: '——', default: '——' },
        { param: 'prohibit', explain: '禁用状态', type: 'boolean', value: '——', default: 'false' }
      ],
      TurnPageList: [
        { text: 'Tag 标签', url: 'tag' },
        { text: 'Input 输入框', url: 'input' }
      ]
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>

<style lang='less' scoped>
.tyh-link {
  margin: 5px;
}
</style>
