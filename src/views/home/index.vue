<template>
  <div id="homeIndex">
    <h1 class="MainTitle">网站快速搭建工具</h1>
    <p class="Subtitle">tyh-ui 是一套基于 Vue 2.0 的桌面端轻量级 UI 组件库</p>

    <div class="Banner">
      <img src="./images/组件开发.svg" alt="" />
    </div>

    <div class="onStart">
      <div class="btnBox">
        <Tyh-button type="success" round @click="$router.push('/component')">
          快速开始
        </Tyh-button>
      </div>
    </div>

    <!-- 页脚 -->
    <div class="footer">这是页脚内容</div>
  </div>
</template>

<script>
export default {
  name: 'homeIndex',
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
#homeIndex {
  // 主标题
  .MainTitle {
    text-align: center;
    color: #515a6e;
    margin-top: 80px;
  }
  // 副标题
  .Subtitle {
    text-align: center;
    color: #515a6e;
    margin-top: 20px;
  }
  // 主横幅
  .Banner {
    width: 650px;
    margin: auto;
    margin-top: 30px;
    img {
      width: 100%;
    }
  }
  // 快速开始
  .onStart {
    height: 400px;
    .btnBox {
      width: 200px;
      margin: auto;
      margin-top: 70px;
      .tyh-button {
        width: 200px;
        height: 50px;
      }
    }
  }
  // 页脚
  .footer {
    height: 300px;
    background: #f7fbfd;
  }
}
</style>
