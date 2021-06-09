<template>
  <div>
    <Tyh-Menu backgroundColor="#f8faff" bottomType="shadow">
      <a href="/">
        <img class="logo" src="./images/TyhUI.png" alt="" />
      </a>

      <div>
        <Tyh-Menu-Item color="#000" url="/">首页</Tyh-Menu-Item>
        <Tyh-Menu-Item color="#000" url="/component">组件</Tyh-Menu-Item>
        <Tyh-Menu-Item color="#000">指南</Tyh-Menu-Item>
        <Tyh-Menu-Item color="#000">资源</Tyh-Menu-Item>
      </div>
    </Tyh-Menu>

    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'layoutIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang='less' scoped>
.tyh-menu {
  justify-content: space-between;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  .logo {
    height: 50px;
    cursor: pointer;
  }
}
// 内容出口
#content {
  margin-top: 120px;
}
</style>
