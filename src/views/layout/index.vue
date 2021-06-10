<template>
  <div>
    <Tyh-Menu backgroundColor="#f8faff" bottomType="shadow">
      <Tyh-link url="/">
        <img class="logo" src="./images/logo.png" alt="" />
        <span class="name">Tyh UI</span>
      </Tyh-link>

      <div class="card">
        <Tyh-Menu-Item color="#000" url="/">首页</Tyh-Menu-Item>
        <Tyh-Menu-Item color="#000" url="/component">组件</Tyh-Menu-Item>
        <Tyh-Menu-Item color="#000" url="/guide">指南</Tyh-Menu-Item>
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
  z-index: 800;
  .tyh-link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    .logo {
      height: 36px;
      cursor: pointer;
    }
    .name {
      font-size: 20px;
      color: #6c63ff;
      font-weight: 600;
      margin-left: 10px;
    }
  }
  .card {
    margin-right: 30px;
  }
}
// 内容出口
#content {
  margin-top: 120px;
}
</style>
