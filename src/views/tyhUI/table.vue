<template>
  <div id="component-item">
    <h1 class="title">Table 表格</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <tyh-table :data="tableData" :columns="columns" />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;tyh-table :data="tableData" :columns="columns" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const columns = [
  {
    title: '日期',
    key: 'date'
  },
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '地址',
    key: 'address'
  }
]
const tableData = [
  {
    date: '2021-11-02',
    name: '张三',
    address: '浙江省杭州市上城区 231 号'
  },
  {
    date: '2021-12-04',
    name: '李四',
    address: '浙江省杭州市西湖区 12 号'
  },
  {
    date: '2021-10-01',
    name: '王英',
    address: '浙江省杭州市临平区 2 号'
  },
  {
    date: '2021-11-03',
    name: '李逵',
    address: '浙江省杭州市拱墅区 199 号'
  }
]
&lt;/script&gt;
      </code>
    </pre>

    <h3 class="Subtitle">配置项：</h3>
    <tyh-table zebra align="center" :data="configures" :columns="columns2" />

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
      columns2: table.columns,
      columns: [
        {
          title: '日期',
          key: 'date'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      configures: [
        { param: 'data', explain: '表单的内容数据', type: 'array', value: '——', default: '[]' },
        { param: 'columns', explain: '表头和键值', type: 'array', value: '——', default: '[]' },
        { param: 'trHeight', explain: '行高', type: 'string', value: '——', default: '40px' },
        { param: 'align', explain: '内容排向', type: 'string', value: 'left / right / center', default: 'left' },
        { param: 'zebra', explain: '是否显示斑马纹', type: 'boolean', value: '——', default: 'false' },
        { param: 'border', explain: '是否显示边框', type: 'boolean', value: '——', default: 'false' },
        { param: 'width', explain: '表格宽度', type: 'string', value: '——', default: '100%' },
        { param: 'height', explain: '表格高度', type: 'string', value: '——', default: 'auto' },
        { param: 'num', explain: '是否显示序号', type: 'boolean', value: '——', default: 'false' },
        { param: 'important', explain: '重点行标注', type: 'array', value: '——', default: '[]' },
        { param: 'importantColor', explain: '重点行标注背景色', type: 'string', value: '——', default: '#fdf5e6' }
      ],
      TurnPageList: [
        { text: 'Crumbs 面包屑', url: 'crumbs' },
        { text: '', url: '' }
      ],
      tableData: [
        {
          date: '2021-11-02',
          name: '张三',
          address: '浙江省杭州市上城区 231 号'
        },
        {
          date: '2021-12-04',
          name: '李四',
          address: '浙江省杭州市西湖区 12 号'
        },
        {
          date: '2021-10-01',
          name: '王英',
          address: '浙江省杭州市临平区 2 号'
        },
        {
          date: '2021-11-03',
          name: '李逵',
          address: '浙江省杭州市拱墅区 199 号'
        }
      ]
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
