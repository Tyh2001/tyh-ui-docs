<template>
  <div id="component-item">
    <h1 class="title">Input 输入框</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <Tyh-input v-model="text1" />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;Tyh-input v-model="text1" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      text1: ''
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">密码框：</p>
    <p class="explain"><span>inpType</span> 属性可以规定文本框类型</p>
    <Tyh-input inpType="text" v-model="text2" />
    <Tyh-input inpType="password" v-model="text3" />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;Tyh-input inpType="text" v-model="text2" /&gt;
    &lt;Tyh-input inpType="password" v-model="text3" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      text2: '',
      text3: ''
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">不同尺寸：</p>
    <p class="explain"><span>size</span> 属性可以配置文本框尺寸</p>
    <Tyh-input size="big" v-model="text4" /><br />
    <Tyh-input size="medium" v-model="text5" /><br />
    <Tyh-input size="small" v-model="text6" /><br />
    <Tyh-input size="mini" v-model="text7" /><br />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;Tyh-input size="big" v-model="text4" /&gt;&lt;br /&gt;
    &lt;Tyh-input size="medium" v-model="text5" /&gt;&lt;br /&gt;
    &lt;Tyh-input size="small" v-model="text6" /&gt;&lt;br /&gt;
    &lt;Tyh-input size="mini" v-model="text7" /&gt;&lt;br /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      text4: '',
      text5: '',
      text6: '',
      text7: ''
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">带有清空按钮：</p>
    <p class="explain"><span>clear</span> 属性可以配置带有清空按钮的文本框</p>
    <Tyh-input v-model="text8" clear />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;Tyh-input v-model="text8" clear /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      text8: ''
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">其他图标：</p>
    <p class="explain">
      <span>showIcon</span> 属性可以配置文本框带有其他图标，可以直接复制 icon
      的名字传递即可，但带有其他图标后，将不再有清空的功能
    </p>
    <Tyh-input v-model="text9" showIcon="tyh-ui-huojian-01" />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;Tyh-input v-model="text9" showIcon="tyh-ui-huojian-01"" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      text9: ''
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">禁用按钮：</p>
    <p class="explain"><span>prohibit</span> 属性可以配置文本框禁用状态</p>
    <Tyh-input v-model="text10" prohibit />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;Tyh-input v-model="text10" prohibit" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data () {
    return {
      text10: ''
    }
  }
}
&lt;/script&gt;
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
import TyhInput from 'tyh-ui/packages/input'
Vue.use(TyhInput)
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
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      text7: '',
      text8: '',
      text9: '',
      text10: '',
      configures: [
        { param: 'v-model', explain: '绑定值', type: 'string / number', value: '——', default: '——' },
        { param: 'inpType', explain: '类型', type: 'string', value: 'text / password / success / danger / warning', default: 'text' },
        { param: 'innerText', explain: '输入框占位文本', type: 'string', value: '——', default: '——' },
        { param: 'size', explain: '文本框尺寸', type: 'string', value: 'big / medium / small / mini', default: 'medium' },
        { param: 'max', explain: '最大输入上限', type: 'string', value: '——', default: '——' },
        { param: 'clear', explain: '是否可以清空文本框', type: 'boolean', value: '——', default: 'fasle' },
        { param: 'showIcon', explain: '右侧显示的图标', type: 'string', value: '——', default: 'tyh-ui-close-03' },
        { param: 'prohibit', explain: '是否禁用', type: 'boolean', value: '——', default: 'fasle' },
        { param: 'autofocus', explain: '是否自动获取焦点', type: 'boolean', value: '——', default: 'fasle' },
        { param: 'name', explain: '原生 name 属性', type: 'string', value: '——', default: '——' }
      ],
      TurnPageList: [
        { text: 'Link 链接', url: 'link' },
        { text: 'Tips 提示', url: 'tips' }
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

<style lang='less' scoped>
.tyh-input {
  margin: 5px;
}
</style>
