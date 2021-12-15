<template>
  <div id="homeIndex">
    <div id="top-list">
      <img draggable="false" class="logo" src="./images/logo.png" alt="" />
      <h1 class="MainTitle">网站快速搭建工具</h1>
      <p class="Subtitle">tyh-ui 是一套基于 Vue 2.0 的桌面端轻量级 UI 组件库</p>

      <div class="btnBox">
        <tyh-button type="primary" round @click="$router.push('/component')">
          快速开始
        </tyh-button>

        <a target="_back" href="https://github.com/Tyh2001/tyh-ui">
          <tyh-button round icon="tyh-ui-github">Github</tyh-button>
        </a>
      </div>

      <!-- 概述 -->
      <div class="summary">
        <div class="summary-left">
          <h2 class="summary-title">开发靠个人</h2>
          <p class="summary-content">
            Tyh-ui 是由 tyh2001 独立开发的一款基于 Vue 2.0 的桌面端轻量级 UI
            组件库。
            <br /><br />
            如果您在使用中有什么问题或 BUG 不妨可以来仓库的 Lssuse
            中反馈一下，我也非常乐意来进行改进。
          </p>
        </div>
        <div class="summary-right">
          <h2 class="summary-title">轻量易维护</h2>
          <p class="summary-content">
            Tyh-ui
            是一个极其轻量的组件库，它并没有那么多复杂的目录结构和冗余的代码，清晰明了。
            <br /><br />
            但同时 Tyh-ui
            还有很多地方需要维护改进，远远不够完美，我正在努力改进中，也很需要您一个小小的
            Star。
          </p>
        </div>
      </div>
    </div>

    <FooterList />
  </div>
</template>

<script>
import FooterList from '@/components/FooterList'
export default {
  name: 'homeIndex',
  components: {
    FooterList
  }
}
</script>

<style lang='less' scoped>
#homeIndex {
  #top-list {
    width: 800px;
    padding-bottom: 40px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      width: 220px;
      user-select: none;
    }
    // 主标题
    .MainTitle {
      text-align: center;
      color: #515a6e;
      margin-top: 20px;
    }
    // 副标题
    .Subtitle {
      text-align: center;
      color: #515a6e;
      margin-top: 20px;
    }
    // 开始按钮
    .btnBox {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .tyh-button {
        width: 200px;
        height: 50px;
        margin: 20px;
        /deep/ .tyh-ui-github {
          color: #606266 !important;
        }
      }
    }
    // 概述
    .summary {
      width: 800px;
      border-top: 1px solid rgb(219, 219, 219);
      margin: auto;
      display: flex;
      margin-top: 50px;
      .summary-left,
      .summary-right {
        flex: 1;
        padding: 25px;
        box-sizing: border-box;
        .summary-title {
          line-height: 60px;
          color: #2d3035;
          font-weight: 500;
        }
        .summary-content {
          color: #515a6e;
          line-height: 25px;
        }
      }
    }
  }
}
</style>
