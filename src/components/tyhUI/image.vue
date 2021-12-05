<template>
  <div id="component-item">
    <h1 class="title">Image 图片</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基础使用</p>
    <tyh-image
      width="300px"
      src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg"
    />
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-image width="300px" src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg" /&gt;
      </code>
    </pre>

    <h3 class="Subtitle">配置项：</h3>
    <ConfiguresTable :configures="configures" />

    <TurnPage :TurnPageList="TurnPageList" />
  </div>
</template>

<script>
import ConfiguresTable from '../components/ConfiguresTable'
import TurnPage from '../components/TurnPage'
export default {
  components: {
    ConfiguresTable,
    TurnPage
  },
  data () {
    return {
      configures: [
        { param: 'src', explain: '图片路径', type: 'string', value: '——', default: '——' },
        { param: 'width', explain: '图片宽度', type: 'string', value: '——', default: '——' },
        { param: 'height', explain: '图片高度', type: 'string', value: '——', default: '——' },
        { param: 'fit', explain: '确定图片如何适应容器框', type: 'string', value: '——', default: '——' },
        { param: 'alt', explain: '原生 alt 属性', type: 'string', value: '——', default: '——' },
        { param: 'select', explain: '是否可以选择', type: 'boolean', value: '——', default: 'false' },
        { param: 'draggable', explain: '是否可以拖动', type: 'boolean', value: '——', default: 'false' }
      ],
      TurnPageList: [
        { text: 'Alert 提示', url: 'alert' },
        { text: 'Skeleton 骨架', url: 'skeleton' }
      ]
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>

<style lang='less' scoped>
</style>
