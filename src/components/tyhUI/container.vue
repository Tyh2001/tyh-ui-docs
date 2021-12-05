<template>
  <div id="component-item">
    <h1 class="title">Container 布局容器</h1>

    <h3 class="Subtitle">基本使用</h3>
    <p class="explain">用于布局的容器组件，方便快速搭建页面的基本结构：</p>
    <p class="explain">&lt;tyh-container&gt;：外层容器</p>
    <p class="explain">&lt;tyh-header&gt;：顶栏容器</p>
    <p class="explain">&lt;tyh-aside&gt;：侧边栏容器</p>
    <p class="explain">&lt;tyh-main&gt;：主要区域容器</p>
    <p class="explain">&lt;tyh-footer&gt;：底栏容器</p>

    <h3 class="Subtitle">常见页面布局</h3>
    <p class="explain">flex 属性可以配置是否水平排列，否则为竖直排列</p>
    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-main>Main</tyh-main>
    </tyh-container>

    <br /><br /><br /><br />

    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-main>Main</tyh-main>
      <tyh-footer>Footer</tyh-footer>
    </tyh-container>

    <br /><br /><br /><br />

    <tyh-container flex>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-main>Main</tyh-main>
    </tyh-container>

    <br /><br /><br /><br />

    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-container flex>
        <tyh-aside width="200px">Aside</tyh-aside>
        <tyh-main>Main</tyh-main>
      </tyh-container>
    </tyh-container>

    <br /><br /><br /><br />

    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-container flex>
        <tyh-aside width="200px">Aside</tyh-aside>
        <tyh-container>
          <tyh-main>Main</tyh-main>
          <tyh-footer>Footer</tyh-footer>
        </tyh-container>
      </tyh-container>
    </tyh-container>

    <br /><br /><br /><br />

    <tyh-container flex>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-container>
        <tyh-header>Header</tyh-header>
        <tyh-main>Main</tyh-main>
      </tyh-container>
    </tyh-container>

    <br /><br /><br /><br />

    <tyh-container flex>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-container>
        <tyh-header>Header</tyh-header>
        <tyh-main>Main</tyh-main>
        <tyh-footer>Footer</tyh-footer>
      </tyh-container>
    </tyh-container>

    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;template&gt;
  &lt;tyh-container&gt;
    &lt;tyh-header&gt;Header&lt;/tyh-header&gt;
    &lt;tyh-main&gt;Main&lt;/tyh-main&gt;
  &lt;/tyh-container&gt;

  &lt;tyh-container&gt;
    &lt;tyh-header&gt;Header&lt;/tyh-header&gt;
    &lt;tyh-main&gt;Main&lt;/tyh-main&gt;
    &lt;tyh-footer&gt;Footer&lt;/tyh-footer&gt;
  &lt;/tyh-container&gt;

  &lt;tyh-container flex&gt;
    &lt;tyh-aside width="200px"&gt;Aside&lt;/tyh-aside&gt;
    &lt;tyh-main&gt;Main&lt;/tyh-main&gt;
  &lt;/tyh-container&gt;

  &lt;tyh-container&gt;
    &lt;tyh-header&gt;Header&lt;/tyh-header&gt;
    &lt;tyh-container flex&gt;
      &lt;tyh-aside width="200px"&gt;Aside&lt;/tyh-aside&gt;
      &lt;tyh-main&gt;Main&lt;/tyh-main&gt;
    &lt;/tyh-container&gt;
  &lt;/tyh-container&gt;

  &lt;tyh-container&gt;
    &lt;tyh-header&gt;Header&lt;/tyh-header&gt;
    &lt;tyh-container flex&gt;
      &lt;tyh-aside width="200px"&gt;Aside&lt;/tyh-aside&gt;
      &lt;tyh-container&gt;
        &lt;tyh-main&gt;Main&lt;/tyh-main&gt;
        &lt;tyh-footer&gt;Footer&lt;/tyh-footer&gt;
      &lt;/tyh-container&gt;
    &lt;/tyh-container&gt;
  &lt;/tyh-container&gt;

  &lt;tyh-container flex&gt;
    &lt;tyh-aside width="200px"&gt;Aside&lt;/tyh-aside&gt;
    &lt;tyh-container&gt;
      &lt;tyh-header&gt;Header&lt;/tyh-header&gt;
      &lt;tyh-main&gt;Main&lt;/tyh-main&gt;
    &lt;/tyh-container&gt;
  &lt;/tyh-container&gt;

  &lt;tyh-container flex&gt;
    &lt;tyh-aside width="200px"&gt;Aside&lt;/tyh-aside&gt;
    &lt;tyh-container&gt;
      &lt;tyh-header&gt;Header&lt;/tyh-header&gt;
      &lt;tyh-main&gt;Main&lt;/tyh-main&gt;
      &lt;tyh-footer&gt;Footer&lt;/tyh-footer&gt;
    &lt;/tyh-container&gt;
  &lt;/tyh-container&gt;
&lt;/template&gt;

&lt;style scoped&gt;
.tyh-header,
.tyh-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.tyh-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.tyh-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body &gt; .tyh-container {
  margin-bottom: 40px;
}

.tyh-container:nth-child(5) .tyh-aside,
.tyh-container:nth-child(6) .tyh-aside {
  line-height: 260px;
}

.tyh-container:nth-child(7) .tyh-aside {
  line-height: 320px;
}
&lt;/style&gt;
      </code>
    </pre>

    <h3 class="Subtitle">tyh-container 配置项</h3>
    <ConfiguresTable :configures="configures" />

    <h3 class="Subtitle">tyh-header 配置项</h3>
    <ConfiguresTable :configures="configures1" />

    <h3 class="Subtitle">tyh-aside 配置项</h3>
    <ConfiguresTable :configures="configures2" />

    <h3 class="Subtitle">tyh-footer 配置项</h3>
    <ConfiguresTable :configures="configures3" />

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
        { param: 'flex', explain: '是否水平排列', type: 'boolean', value: '——', default: 'false' }
      ],
      configures1: [
        { param: 'height', explain: '顶栏高度', type: 'string', value: '——', default: '60px' }
      ],
      configures2: [
        { param: 'width', explain: '侧边栏宽度', type: 'string', value: '——', default: '200px' }
      ],
      configures3: [
        { param: 'height', explain: '底栏高度', type: 'string', value: '——', default: '60px' }
      ],
      TurnPageList: [
        { text: 'Color 色彩', url: 'color' },
        { text: 'Button 按钮', url: 'button' }
      ]
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>

<style lang='less' scoped>
.tyh-header,
.tyh-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.tyh-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.tyh-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .tyh-container {
  margin-bottom: 40px;
}

.tyh-container:nth-child(5) .tyh-aside,
.tyh-container:nth-child(6) .tyh-aside {
  line-height: 260px;
}

.tyh-container:nth-child(7) .tyh-aside {
  line-height: 320px;
}
</style>
