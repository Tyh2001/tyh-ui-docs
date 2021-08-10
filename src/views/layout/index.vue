<template>
  <div>
    <Tyh-Menu backgroundColor="#f8faff" buttomShadow>
      <div class="logolink" url="/" @click="$router.push('/')">
        <img class="logo" src="../home/images/logo.png" alt="logo" />
        <span class="name">Tyh UI</span>
      </div>

      <!-- 导航栏选项 -->
      <div class="card">
        <Tyh-Menu-Item
          v-for="(list, index) in layoutList"
          :color="highLightStyle(list.url)"
          :key="index"
          :url="list.url"
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
        { title: '特别的', url: '/special' },
        { title: '关于', url: '/about' }
      ]
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    // 导航栏高亮显示
    highLightStyle (url) {
      const path = this.$route.path
      if (path === '/') return url === path ? '#409eff' : '#000'
      const res = path.match(/\/[a-zA-Z]+/gi)[0]
      return url === res ? '#409eff' : '#000'
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
  .logolink {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    cursor: pointer;
    .logo {
      height: 36px;
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
