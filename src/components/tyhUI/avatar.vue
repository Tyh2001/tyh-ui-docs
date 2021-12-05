<template>
  <div id="component-item">
    <h1 class="title">Avatar 头像</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基础使用</p>
    <tyh-avatar
      size="10"
      src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg"
    />
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-avatar
  size="10"
  src="https://tianyuhao.icu/tyhui/v3/assets/giraffe.jpg"
/&gt;
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
        { param: 'size', explain: '图片大小', type: 'string / number', value: '——', default: '8(计算方式：(size*10)px)' },
        { param: 'round', explain: '圆角', type: 'boolean', value: '——', default: 'false' },
        { param: 'border', explain: '边框', type: 'boolean', value: '——', default: 'false' },
        { param: 'fit', explain: '确定图片如何适应容器框', type: 'string', value: '——', default: '——' },
        { param: 'alt', explain: '原生 alt 属性', type: 'string', value: '——', default: '——' },
        { param: 'select', explain: '是否可以选择', type: 'boolean', value: '——', default: 'false' },
        { param: 'draggable', explain: '是否可以拖动', type: 'boolean', value: '——', default: 'false' }
      ],
      TurnPageList: [
        { text: 'Skeleton 骨架', url: 'skeleton' },
        { text: '', url: '' }
      ]
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>

<style lang='less' scoped>
</style>
