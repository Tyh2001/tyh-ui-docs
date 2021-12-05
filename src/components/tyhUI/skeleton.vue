<template>
  <div id="component-item">
    <h1 class="title">Skeleton 骨架</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基础使用</p>
    <tyh-skeleton />
    <tyh-skeleton />
    <tyh-skeleton />
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-skeleton /&gt;
&lt;tyh-skeleton /&gt;
&lt;tyh-skeleton /&gt;
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
        { param: 'round', explain: '圆角', type: 'boolean', value: '——', default: 'false' },
        { param: 'width', explain: '宽度', type: 'string', value: '——', default: '100%' },
        { param: 'height', explain: '高度', type: 'string', value: '——', default: '15px' },
        { param: 'animation', explain: '是否启用动画', type: 'boolean', value: '——', default: 'false' }
      ],
      TurnPageList: [
        { text: 'Image 图片', url: 'image' },
        { text: 'Avatar 头像', url: 'avatar' }
      ]
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>

<style lang='less' scoped>
</style>
