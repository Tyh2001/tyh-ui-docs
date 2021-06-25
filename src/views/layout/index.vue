<template>
  <div>
    <Tyh-Menu backgroundColor="#f8faff" buttomShadow>
      <Tyh-link url="/">
        <img class="logo" src="../../images/TyhUILogo.svg" alt="" />
        <span class="name">Tyh UI</span>
      </Tyh-link>

      <!-- 导航栏选项 -->
      <div class="card">
        <Tyh-Menu-Item
          v-for="(list, index) in layoutList"
          color="#000"
          :key="index"
          :url="list.url"
          :style="highLightStyle(list)"
        >
          {{ list.title }}
        </Tyh-Menu-Item>
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
    return {
      // 导航栏选项
      layoutList: [
        { title: '首页', url: '/' },
        { title: '组件', url: '/component' },
        { title: '指南', url: '/guide' }
      ]
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    // 高亮显示
    highLightStyle (list) {
      if (list.url === this.$route.path) {
        return {
          color: '#409eff'
        }
      }
    }
  }
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
