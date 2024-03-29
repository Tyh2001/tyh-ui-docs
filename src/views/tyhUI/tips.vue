<template>
  <div id="component-item">
    <h1 class="title">Tips 提示</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <p class="explain">
      tyh-ui 内部注册了一个全局的
      <span>$tips</span> 方法，接收一个对象，可以使用
      <span>title</span> 定义标题，<span>message</span> 定义内容
    </p>
    <tyh-button type="primary" @click="change1">展示弹框</tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;tyh-button type="primary" @click="change1"&gt;展示弹框&lt;/tyh-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    change1 () {
      this.$tips({
        title: '这是标题',
        message: '这是内容部分'
      })
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">指定时候后关闭：</p>
    <p class="explain">
      可以在对象中配置 <span>times</span> 值来指定 xxxx 毫秒后关闭通知 默认 3500
      毫秒
    </p>
    <tyh-button type="primary" @click="change2"
      >展示弹框 6000 毫秒后关闭</tyh-button
    >
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;tyh-button type="primary" @click="change2"&gt;展示弹框&lt;/tyh-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    change2 () {
      this.$tips({
        title: '这是标题',
        message: '这是内容部分',
        times: 6000
      })
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">不同弹出位置：</p>
    <p class="explain"><span>position</span> 属性可以配置不同弹出位置</p>
    <tyh-button type="primary" @click="change3">右上</tyh-button>
    <tyh-button type="primary" @click="change4">右下</tyh-button>
    <tyh-button type="primary" @click="change5">左上</tyh-button>
    <tyh-button type="primary" @click="change6">左下</tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;tyh-button type="primary" @click="change3"&gt;右上&lt;/tyh-button&gt;
    &lt;tyh-button type="primary" @click="change4"&gt;右下&lt;/tyh-button&gt;
    &lt;tyh-button type="primary" @click="change5"&gt;左上&lt;/tyh-button&gt;
    &lt;tyh-button type="primary" @click="change6"&gt;左下&lt;/tyh-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    change3 () {
      this.$tips({
        title: '这是标题',
        message: '这是内容部分',
        position: 'top-right'
      })
    },
    change4 () {
      this.$tips({
        title: '这是标题',
        message: '这是内容部分',
        position: 'bottom-right'
      })
    },
    change5 () {
      this.$tips({
        title: '这是标题',
        message: '这是内容部分',
        position: 'top-left'
      })
    },
    change6 () {
      this.$tips({
        title: '这是标题',
        message: '这是内容部分',
        position: 'bottom-left'
      })
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">带有 HTML 片段：</p>
    <p class="explain">
      可以在对象中配置 <span>isHtml</span> 属性来改变 message 是否为 HTML 片段
    </p>
    <tyh-button type="primary" @click="change7">HTML 片段</tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="vue">
&lt;template&gt;
  &lt;div&gt;
    &lt;tyh-button type="primary" @click="change2"&gt;展示弹框&lt;/tyh-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    change7 () {
      this.$tips({
        title: '这是标题',
        message: '&lt;h2&gt;欢迎使用Tyh ui！&lt;/h2&gt;',
        isHtml: true
      })
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
      configures: [
        { param: 'title', explain: '标题', type: 'string', value: '——', default: '——' },
        { param: 'message', explain: '内容', type: 'string', value: '——', default: '——' },
        { param: 'times', explain: '显示时间 单位毫秒', type: 'number', value: '——', default: '3500' },
        { param: 'position', explain: '显示的位置', type: 'string', value: 'top-right / bottom-right / top-left / bottom-left', default: 'top-right' },
        { param: 'showClose', explain: '是否显示关闭按钮', type: 'boolean', value: '——', default: 'true' },
        { param: 'isHtml', explain: 'message 是否为 html 片段', type: 'boolean', value: '——', default: 'false' },
        { param: 'backgroundColor', explain: '自定义背景色', type: 'string', value: '——', default: '#fff' }
      ],
      TurnPageList: [
        { text: 'Input 输入框', url: 'input' },
        { text: 'Menu 导航栏', url: 'menu' }
      ]
    }
  },
  methods: {
    change1 () {
      this.$tips({
        title: '这是标题',
        message: '这是内容部分'
      })
    },
    change2 () {
      this.$tips({
        title: '这是标题',
        message: '这是内容部分',
        times: 6000
      })
    },
    change3 () {
      this.$tips({
        title: '这是标题',
        message: '这是内容部分',
        position: 'top-right'
      })
    },
    change4 () {
      this.$tips({
        title: '这是标题',
        message: '这是内容部分',
        position: 'bottom-right'
      })
    },
    change5 () {
      this.$tips({
        title: '这是标题',
        message: '这是内容部分',
        position: 'top-left'
      })
    },
    change6 () {
      this.$tips({
        title: '这是标题',
        message: '这是内容部分',
        position: 'bottom-left'
      })
    },
    change7 () {
      this.$tips({
        title: '这是标题',
        message: '<h2>欢迎使用Tyh ui！</h2>',
        isHtml: true
      })
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>

<style lang='less' scoped>
.tyh-button {
  margin: 5px;
}
</style>
