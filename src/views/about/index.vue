<template>
  <div id="aboutIndex">
    <div id="content">
      <div id="myLogo">
        <img class="logo" src="../../images/logo.svg" alt="" />
      </div>
      <p>tyh-ui 是一套基于 Vue 2.0 的桌面端轻量级 UI 组件库</p>
      <h3 class="title">开发靠个人</h3>
      <p>
        Tyh-ui 是由 tyh2001 独立开发的一款基于 Vue 2.0 的桌面端轻量级 UI
        组件库。
      </p>
      <p>
        如果您在使用中有什么问题或 BUG 不妨可以来仓库的 Lssuse
        中反馈一下，我很乐意来进行改进。
      </p>

      <h3 class="title">轻量易维护</h3>
      <p>
        Tyh-ui
        是一个极其轻量的组件库，它并没有那么多复杂的目录结构和冗余的代码，清晰明了。
      </p>
      <p>
        但同时 Tyh-ui 还有很多地方需要维护改进，远远不够完美，我正在努力改进中。
      </p>

      <h3 class="title">赞助我</h3>
      <p>开发不易，欢迎大家赞助！</p>
      <div id="sponsor">
        <img draggable="false" src="./images/支付宝赞助.jpg" alt="" />
        <img draggable="false" src="./images/微信赞助.jpg" alt="" />
      </div>
    </div>

    <FooterList />
  </div>
</template>

<script>
import FooterList from '@/components/footerList/FooterList'
export default {
  name: 'aboutIndex',
  components: {
    FooterList
  },
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
#aboutIndex {
  #content {
    width: 850px;
    margin: auto;
    padding: 15px;
    box-sizing: border-box;
    padding-bottom: 150px;
    p {
      color: #515a6e;
      font-size: 15px;
      font-family: "微软雅黑";
      line-height: 35px;
    }
    // logo
    #myLogo {
      width: 260px;
      height: 300px;
      margin: auto;
      .logo {
        width: 260px;
      }
    }
    .title {
      margin-top: 23px;
      font-weight: 600;
      color: #515a6e;
    }
    // 赞助我
    #sponsor {
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 300px;
        user-select: none;
      }
    }
  }
}
</style>
