<template>
  <div id="component-item">
    <h1 class="title">List 列表</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <p class="explain"><span>content</span> 属性可以绑定需要展示的数组元素</p>
    <p class="explain"><span>iskey</span> 属性可以绑定数组中每个元素的键值</p>
    <tyh-list :content="arr" iskey="name" />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;tyh-list :content="arr" iskey="name" /&gt;
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
    <p class="explain"><span>header</span> 表头内容</p>
    <p class="explain"><span>footer</span> 页脚内容</p>
    <tyh-list :content="arr" iskey="name" header="这是头部" footer="这是页脚" />
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;template&gt;
  &lt;tyh-list :content="arr" iskey="name" header="这是头部" footer="这是页脚" /&gt;
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
    <p class="explain"><span>zebra</span> 是否显示斑马纹</p>
    <p class="explain"><span>num</span> 是否显示序号</p>
    <tyh-list
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
  &lt;tyh-list zebra num :content="arr" iskey="name" header="这是头部" footer="这是页脚" /&gt;
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
        { param: 'zebra', explain: '是否显示斑马纹', type: 'boolean', value: '——', default: '——' },
        { param: 'num', explain: '是否显示序号', type: 'boolean', value: '——', default: 'false' }
      ],
      TurnPageList: [
        { text: 'Button 按钮', url: 'button' },
        { text: 'Card 卡片', url: 'card' }
      ]
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
