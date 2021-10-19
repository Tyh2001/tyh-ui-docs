<template>
  <div id="component-item">
    <h1 class="title">Card 卡片</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <p class="explain"><span>title</span> 自定义卡片的主标题</p>
    <p class="explain"><span>subtitle</span> 自定义卡片的副标题</p>
    <tyh-card>
      <template>
        <div slot="title">主标题</div>
        <div slot="subtitle">副标题</div>
      </template>
      <p>这是内容部分1</p>
      <p>这是内容部分2</p>
      <p>这是内容部分3</p>
      <p>这是内容部分4</p>
    </tyh-card>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-card&gt;
  &lt;template&gt;
    &lt;div slot="title"&gt;主标题&lt;/div&gt;
    &lt;div slot="subtitle"&gt;副标题&lt;/div&gt;
  &lt;/template&gt;
  &lt;p&gt;这是内容部分1&lt;/p&gt;
  &lt;p&gt;这是内容部分2&lt;/p&gt;
  &lt;p&gt;这是内容部分3&lt;/p&gt;
  &lt;p&gt;这是内容部分4&lt;/p&gt;
&lt;/tyh-card&gt;
      </code>
    </pre>

    <p class="explain">简约卡片（没有表头栏）：</p>
    <p class="explain"><span>simple</span> 属性可以配置简约卡片</p>
    <tyh-card simple>
      <template>
        <div slot="title">主标题</div>
        <div slot="subtitle">副标题</div>
      </template>
      <p>这是内容部分1</p>
      <p>这是内容部分2</p>
      <p>这是内容部分3</p>
      <p>这是内容部分4</p>
    </tyh-card>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-card simple&gt;
  &lt;template&gt;
    &lt;div slot="title"&gt;主标题&lt;/div&gt;
    &lt;div slot="subtitle"&gt;副标题&lt;/div&gt;
  &lt;/template&gt;
  &lt;p&gt;这是内容部分1&lt;/p&gt;
  &lt;p&gt;这是内容部分2&lt;/p&gt;
  &lt;p&gt;这是内容部分3&lt;/p&gt;
  &lt;p&gt;这是内容部分4&lt;/p&gt;
&lt;/tyh-card&gt;
      </code>
    </pre>

    <p class="explain">阴影显示时机：</p>
    <p class="explain"><span>shadow</span> 属性可以配置阴影显示时机</p>
    <tyh-card shadow="always" style="width: 30%; display: inline-block">
      <template>
        <div slot="title">主标题</div>
        <div slot="subtitle">副标题</div>
      </template>
      <p>总是显示阴影</p>
    </tyh-card>
    <tyh-card
      shadow="hover"
      style="width: 30%; display: inline-block; margin-left: 10px"
    >
      <template>
        <div slot="title">主标题</div>
        <div slot="subtitle">副标题</div>
      </template>
      <p>鼠标移入显示</p>
    </tyh-card>
    <tyh-card
      shadow="noShadow"
      style="width: 30%; display: inline-block; margin-left: 10px"
    >
      <template>
        <div slot="title">主标题</div>
        <div slot="subtitle">副标题</div>
      </template>
      <p>从不显示</p>
    </tyh-card>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;tyh-card shadow="always"&gt;
  &lt;template&gt;
    &lt;div slot="title"&gt;主标题&lt;/div&gt;
    &lt;div slot="subtitle"&gt;副标题&lt;/div&gt;
  &lt;/template&gt;
  &lt;p&gt;总是显示阴影&lt;/p&gt;
&lt;/tyh-card&gt;

&lt;tyh-card shadow="hover"&gt;
  &lt;template&gt;
    &lt;div slot="title"&gt;主标题&lt;/div&gt;
    &lt;div slot="subtitle"&gt;副标题&lt;/div&gt;
  &lt;/template&gt;
  &lt;p&gt;鼠标移入显示&lt;/p&gt;
&lt;/tyh-card&gt;

&lt;tyh-card shadow="noShadow"&gt;
  &lt;template&gt;
    &lt;div slot="title"&gt;主标题&lt;/div&gt;
    &lt;div slot="subtitle"&gt;副标题&lt;/div&gt;
  &lt;/template&gt;
  &lt;p&gt;从不显示&lt;/p&gt;
&lt;/tyh-card&gt;
      </code>
    </pre>

    <!-- 配置项 -->
    <h3 class="Subtitle">配置项：</h3>
    <ConfiguresTable :configures="configures" />

    <h3 class="Subtitle">按需引入：</h3>
    <p class="explain">
      通过下面按需引入的方式，我们可以只引入需要的组件，以达到减小项目体积的目的
    </p>
    <pre v-highlightjs>
      <code id="myCode" class="js">
import Vue from 'vue'
import TyhCard from 'tyh-ui/packages/card'
Vue.use(TyhCard)
      </code>
    </pre>

    <TurnPage :TurnPageList="TurnPageList" />
  </div>
</template>

<script>
import ConfiguresTable from '../components/ConfiguresTable'
import TurnPage from '../components/TurnPage'
export default {
  name: '',
  components: {
    ConfiguresTable,
    TurnPage
  },
  props: {},
  data () {
    return {
      configures: [
        { param: 'simple', explain: '简约卡片', type: 'boolean', value: '——', default: 'false' },
        { param: 'shadow', explain: '阴影显示时机', type: 'string', value: 'always / hover / noShadow', default: '——' },
        { param: 'title（具名插槽）', explain: '自定义卡片的主标题', type: '——', value: '——', default: '——' },
        { param: 'subtitle（具名插槽）', explain: '自定义卡片的副标题', type: '——', value: '——', default: '——' }
      ],
      TurnPageList: [
        { text: 'List 列表', url: 'list' },
        { text: 'Tag 标签', url: 'tag' }
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

<style src="../style/index.css" scoped></style>
