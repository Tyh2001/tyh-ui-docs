<template>
  <div id="component-item">
    <h1 class="title">Input 输入框</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <tyh-input v-model="text1" />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;tyh-input v-model="text1" /&gt;
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
    <tyh-input inpType="text" v-model="text2" />
    <tyh-input inpType="password" v-model="text3" />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;tyh-input inpType="text" v-model="text2" /&gt;
    &lt;tyh-input inpType="password" v-model="text3" /&gt;
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
    <tyh-input size="large" v-model="text4" /><br />
    <tyh-input size="medium" v-model="text5" /><br />
    <tyh-input size="small" v-model="text6" /><br />
    <tyh-input size="mini" v-model="text7" /><br />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;tyh-input size="large" v-model="text4" /&gt;
    &lt;tyh-input size="medium" v-model="text5" /&gt;
    &lt;tyh-input size="small" v-model="text6" /&gt;
    &lt;tyh-input size="mini" v-model="text7" /&gt;
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
    <tyh-input v-model="text8" clear />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;tyh-input v-model="text8" clear /&gt;
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
      <span>showIcon</span> 属性可以配置文本框带有其他图标，直接传递 icon
      的名字传递即可
    </p>
    <tyh-input v-model="text9" showIcon="tyh-ui-huojian-01" />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;tyh-input v-model="text9" showIcon="tyh-ui-huojian-01" /&gt;
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

    <p class="explain">禁用状态：</p>
    <p class="explain"><span>prohibit</span> 属性可以配置文本框禁用状态</p>
    <tyh-input v-model="text10" prohibit />
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;tyh-input v-model="text10" prohibit /&gt;
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
        { param: 'type', explain: '类型', type: 'string', value: 'text / password', default: 'text' },
        { param: 'placeholder', explain: '输入框占位文本', type: 'string', value: '——', default: '——' },
        { param: 'size', explain: '文本框尺寸', type: 'string', value: 'large / medium / small / mini', default: 'medium' },
        { param: 'max', explain: '最大输入上限', type: 'string', value: '——', default: '——' },
        { param: 'clear', explain: '是否可以清空文本框', type: 'boolean', value: '——', default: 'false' },
        { param: 'icon', explain: '左侧显示的图标', type: 'string', value: '——', default: '——' },
        { param: 'disabled', explain: '是否禁用', type: 'boolean', value: '——', default: 'false' },
        { param: 'autofocus', explain: '是否自动获取焦点', type: 'boolean', value: '——', default: 'false' },
        { param: 'name', explain: '原生 name 属性', type: 'string', value: '——', default: '——' }
      ],
      TurnPageList: [
        { text: 'Link 链接', url: 'link' },
        { text: 'Tips 提示', url: 'tips' }
      ]
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>

<style lang='less' scoped>
.tyh-input {
  margin: 5px;
  width: 220px;
}
</style>
