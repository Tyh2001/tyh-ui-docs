<template>
  <div id="component-item">
    <h1 class="title">List 列表</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">content 属性可以绑定需要展示的数组元素</p>
    <p class="explain">iskey 属性可以绑定数组中每个元素的键值</p>
    <TyhList :content="arr" iskey="name" />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;TyhList :content="arr" iskey="name" /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      arr: [
        { name: '小明1', age: 11 },
        { name: '小明2', age: 12 },
        { name: '小明3', age: 13 },
        { name: '小明4', age: 14 },
        { name: '小明5', age: 15 },
        { name: '小明6', age: 16 },
        { name: '小明7', age: 17 },
        { name: '小明8', age: 18 }
      ]
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">有表头和页脚的列表：</p>
    <p class="explain">header 表头内容</p>
    <p class="explain">footer 页脚内容</p>
    <TyhList :content="arr" iskey="name" header="这是头部" footer="这是页脚" />
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;template&gt;
  &lt;TyhList :content="arr" iskey="name" header="这是头部" footer="这是页脚" /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      arr: [
        { name: '小明1', age: 11 },
        { name: '小明2', age: 12 },
        { name: '小明3', age: 13 },
        { name: '小明4', age: 14 },
        { name: '小明5', age: 15 },
        { name: '小明6', age: 16 },
        { name: '小明7', age: 17 },
        { name: '小明8', age: 18 }
      ]
    }
  }
}
      </code>
    </pre>

    <p class="explain">有斑马纹和序号：</p>
    <p class="explain">zebra 是否显示斑马纹</p>
    <p class="explain">num 是否显示序号</p>
    <TyhList
      zebra
      num
      :content="arr"
      iskey="name"
      header="这是头部"
      footer="这是页脚"
    />
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;template&gt;
  &lt;TyhList zebra num :content="arr" iskey="name" header="这是头部" footer="这是页脚" /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      arr: [
        { name: '小明1', age: 11 },
        { name: '小明2', age: 12 },
        { name: '小明3', age: 13 },
        { name: '小明4', age: 14 },
        { name: '小明5', age: 15 },
        { name: '小明6', age: 16 },
        { name: '小明7', age: 17 },
        { name: '小明8', age: 18 }
      ]
    }
  }
}
      </code>
    </pre>

    <!-- 配置项 -->
    <h3 class="Subtitle">配置项：</h3>
    <ConfiguresTable :configures="configures" />

    <TurnPage :TurnPageList="TurnPageList" />
  </div>
</template>

<script>
import TurnPage from './components/TurnPage'
import ConfiguresTable from './components/ConfiguresTable'
export default {
  name: '',
  components: {
    ConfiguresTable,
    TurnPage
  },
  props: {},
  data () {
    return {
      arr: [
        { name: '小明1', age: 11 },
        { name: '小明2', age: 12 },
        { name: '小明3', age: 13 },
        { name: '小明4', age: 14 },
        { name: '小明5', age: 15 },
        { name: '小明6', age: 16 },
        { name: '小明7', age: 17 },
        { name: '小明8', age: 18 }
      ],
      configures: [
        { param: 'header', explain: '表头信息', type: 'string / number', value: '——', default: '——' },
        { param: 'footer', explain: '页脚信息', type: 'string / number', value: '——', default: '——' },
        { param: 'content', explain: '主体内容', type: 'array / string', value: '——', default: '——' },
        { param: 'iskey', explain: '循环对象键名', type: 'string', value: '——', default: '——' },
        { param: 'zebra', explain: '是否显示斑马纹', type: 'boolean', value: 'true / false', default: '——' },
        { param: 'num', explain: '是否显示序号', type: 'boolean', value: 'true / false', default: 'false' }
      ],
      TurnPageList: [
        { text: 'Button 按钮', url: 'button' },
        { text: 'Card 卡片', url: 'card' }
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
