<template>
  <div id="component-item">
    <h1 class="title">Message 消息通知</h1>

    <h3 class="Subtitle">基本使用：</h3>
    <p class="explain">基本使用</p>
    <p class="explain">
      tyh-ui 内部注册了一个全局的
      <span>$message</span> 方法，接收一个对象，可以使用 <span>message</span>
      定义内容
    </p>
    <tyh-button type="primary" @click="open1">提示1</tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;template&gt;
  &lt;div&gt;
    &lt;tyh-button type="primary" @click="open1"&gt;打开提示&lt;/tyh-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    open1 () {
      this.$message({
        message: '这个是一个消息'
      })
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">不同类型的</p>
    <p class="explain"><span>type</span> 属性可以配置提示框的类型</p>
    <p class="explain">
      <span>iconClass</span> 属性可以配置 icon 的 class 属性，来展示 icon
    </p>
    <tyh-button type="primary" @click="open2">消息提示</tyh-button>
    <tyh-button type="primary" @click="open3">成功提示</tyh-button>
    <tyh-button type="primary" @click="open4">危险提示</tyh-button>
    <tyh-button type="primary" @click="open5">警告提示</tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;template&gt;
  &lt;div&gt;
    &lt;tyh-button type="primary" @click="open2"&gt;消息提示&lt;/tyh-button&gt;
    &lt;tyh-button type="primary" @click="open3"&gt;成功提示&lt;/tyh-button&gt;
    &lt;tyh-button type="primary" @click="open4"&gt;危险提示&lt;/tyh-button&gt;
    &lt;tyh-button type="primary" @click="open5"&gt;警告提示&lt;/tyh-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    open2 () {
      this.$message({
        message: '这是一个消息提示',
        type: 'primary',
        iconClass: 'tyh-ui-primary-01'
      })
    },
    open3 () {
      this.$message({
        message: '这是一个成功提示',
        type: 'danger',
        iconClass: 'tyh-ui-success-01'
      })
    },
    open4 () {
      this.$message({
        message: '这是一个危险提示',
        type: 'success',
        iconClass: 'tyh-ui-danger-01'
      })
    },
    open5 () {
      this.$message({
        message: '这是一个警告提示',
        type: 'warning',
        iconClass: 'tyh-ui-warning-01'
      })
    }
  }
}
&lt;/script&gt;
      </code>
    </pre>

    <p class="explain">显示时长</p>
    <p class="explain">
      <span>times</span> 属性可以配置提示框的显示时长，并在 xxxx 毫秒后消失
    </p>
    <tyh-button type="primary" @click="open6">提示3000毫秒后消失</tyh-button>
    <pre v-highlightjs>
      <code id="myCode" class="html">
&lt;template&gt;
  &lt;div&gt;
    &lt;tyh-button type="primary" @click="open6"&gt;提示3000毫秒后消失&lt;/tyh-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    open6 () {
      this.$message({
        message: '这个是一个消息',
        times: 3000
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
        { param: 'message', explain: '显示的文字内容', type: 'string', value: '——', default: '——' },
        { param: 'times', explain: '持续显示的时间', type: 'number', value: '——', default: '1400' },
        { param: 'type', explain: '提示的类型', type: 'string', value: 'primary / success / danger / warning', default: '——' },
        { param: 'iconClass', explain: '定义 icon 的类名', type: 'string', value: '——', default: '——' }
      ],
      TurnPageList: [
        { text: 'Menu 导航栏', url: 'menu' },
        { text: 'Division 分割线', url: 'division' }
      ]
    }
  },
  methods: {
    open1 () {
      this.$message({
        message: '这是一个提示'
      })
    },
    open2 () {
      this.$message({
        message: '这是一个消息提示',
        type: 'primary',
        iconClass: 'tyh-ui-primary-01'
      })
    },
    open3 () {
      this.$message({
        message: '这是一个成功提示',
        type: 'danger',
        iconClass: 'tyh-ui-success-01'
      })
    },
    open4 () {
      this.$message({
        message: '这是一个危险提示',
        type: 'success',
        iconClass: 'tyh-ui-danger-01'
      })
    },
    open5 () {
      this.$message({
        message: '这是一个警告提示',
        type: 'warning',
        iconClass: 'tyh-ui-warning-01'
      })
    },
    open6 () {
      this.$message({
        message: '这个是一个消息',
        type: 'primary',
        times: 3000
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
