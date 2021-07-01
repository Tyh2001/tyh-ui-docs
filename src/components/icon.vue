<template>
  <div id="component-item">
    <h1 class="title">Icon 图标</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">通过 icon 属性来给 icon 添加类名，来显示不同的图标</p>
    <Tyh-icon icon="tyh-ui-tyhui" />
    <Tyh-icon icon="tyh-ui-huojian-01" />
    <Tyh-icon icon="tyh-ui-PaperPlane-01" />
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-icon icon="tyh-ui-tyhui" /&gt;
&lt;Tyh-icon icon="tyh-ui-huojian-01" /&gt;
&lt;Tyh-icon icon="tyh-ui-PaperPlane-01" /&gt;
      </code>
    </pre>

    <p class="explain">color 属性改变 icon 的颜色</p>
    <Tyh-icon color="skyblue" icon="tyh-ui-tyhui" />
    <Tyh-icon color="orange" icon="tyh-ui-huojian-01" />
    <Tyh-icon color="pink" icon="tyh-ui-PaperPlane-01" />
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-icon color="skyblue" icon="tyh-ui-tyhui" /&gt;
&lt;Tyh-icon color="orange" icon="tyh-ui-huojian-01" /&gt;
&lt;Tyh-icon color="pink" icon="tyh-ui-PaperPlane-01" /&gt;
      </code>
    </pre>

    <p class="explain">size 属性可以改变 icon 的大小</p>
    <p class="explain">
      这里采用的是字体大小形式，只需要传递具体数值，并不需要传递单位
    </p>
    <Tyh-icon size="50" icon="tyh-ui-tyhui" />
    <Tyh-icon size="40" icon="tyh-ui-huojian-01" />
    <Tyh-icon size="30" icon="tyh-ui-PaperPlane-01" />
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;Tyh-icon size="50" icon="tyh-ui-tyhui" /&gt;
&lt;Tyh-icon size="40" icon="tyh-ui-huojian-01" /&gt;
&lt;Tyh-icon size="30" icon="tyh-ui-PaperPlane-01" /&gt;
      </code>
    </pre>

    <!-- 配置项 -->
    <h3 class="Subtitle">配置项：</h3>
    <ConfiguresTable :configures="configures" />

    <h3 class="Subtitle">Icon 集合：</h3>
    <p class="explain">点击即可复制代码</p>
    <div id="allIcon">
      <ul class="allIcon-ui">
        <li
          class="allIcon-li"
          v-for="(icon, index) in iconList"
          :key="index"
          :data-clipboard-text="icon"
          @click="copy"
        >
          <Tyh-icon size="34" :icon="icon" />
          <p class="iconTitle">{{ icon }}</p>
        </li>
      </ul>
    </div>

    <TurnPage :TurnPageList="TurnPageList" />
  </div>
</template>

<script>
import Clipboard from 'clipboard'
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
      // 配置项
      configures: [
        { param: 'icon', explain: 'icon 的类名', type: 'string', value: '——', default: '——' },
        { param: 'color', explain: 'icon 的颜色', type: 'string', value: '——', default: '#606266' },
        { param: 'size', explain: 'icon 的尺寸', type: 'string', value: '——', default: '——' }
      ],
      // icon 集合
      iconList: [
        'tyh-ui-tyhui',
        'tyh-ui-huojian-01',
        'tyh-ui-home-01',
        'tyh-ui-right-01',
        'tyh-ui-top-01',
        'tyh-ui-bottom-01',
        'tyh-ui-left-01',
        'tyh-ui-close-01',
        'tyh-ui-add-01',
        'tyh-ui-sub-01',
        'tyh-ui-top-02',
        'tyh-ui-bottom-02',
        'tyh-ui-left-02',
        'tyh-ui-right-02',
        'tyh-ui-setting-01',
        'tyh-ui-phone-01',
        'tyh-ui-PaperPlane-01',
        'tyh-ui-trash-01',
        'tyh-ui-primary-01',
        'tyh-ui-success-01',
        'tyh-ui-danger-01',
        'tyh-ui-warning-01',
        'tyh-ui-github',
        'tyh-ui-close-03'
      ],
      TurnPageList: [
        { text: 'BackTop 回到顶部', url: 'backTop' },
        { text: '', url: '' }
      ]
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    copy () {
      const clipboard = new Clipboard('.allIcon-li')
      // 复制成功
      clipboard.on('success', e => {
        this.$message({
          message: '复制成功',
          type: 'danger',
          iconClass: 'tyh-ui-success-01'
        })
        clipboard.destroy()
      })
      // 复制失败
      clipboard.on('error', e => {
        this.$message({
          message: '您的浏览器不支持复制',
          type: 'warning',
          iconClass: 'tyh-ui-warning-01'
        })
        clipboard.destroy()
      })
    }
  }
}
</script>

<style src="./style/index.css" scoped></style>

<style lang='less' scoped>
#allIcon {
  width: 100%;
  .allIcon-ui {
    display: flex;
    flex-wrap: wrap;
    .allIcon-li {
      width: 140px;
      height: 120px;
      border: 1px solid #eee;
      list-style: none;
      cursor: pointer;
      padding: 5px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .iconTitle {
        margin-top: 10px;
        font-size: 12px;
        color: rgb(138, 138, 138);
      }
      &:hover {
        transition: background 0.3s;
        background: #eef5fd;
      }
    }
  }
}
</style>
