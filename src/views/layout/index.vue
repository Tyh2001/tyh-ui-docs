<template>
  <div>
    <Tyh-Menu backgroundColor="#f8faff" bottomType="shadow">
      <a href="/">
        <img class="logo" src="./images/TyhUI.png" alt="" />
      </a>

      <div>
        <Tyh-Menu-Item color="#000" url="/">首页</Tyh-Menu-Item>
        <Tyh-Menu-Item color="#000" url="component">组件</Tyh-Menu-Item>
        <Tyh-Menu-Item color="#000">指南</Tyh-Menu-Item>
        <Tyh-Menu-Item color="#000">资源</Tyh-Menu-Item>
      </div>
    </Tyh-Menu>

    <router-view></router-view>
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
  .logo {
    height: 50px;
    cursor: pointer;
  }
}
</style>
