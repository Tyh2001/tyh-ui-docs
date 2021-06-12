<template>
  <div id="homeIndex">
    <h1 class="MainTitle">网站快速搭建工具</h1>
    <p class="Subtitle">tyh-ui 是一套基于 Vue 2.0 的桌面端轻量级 UI 组件库</p>

    <div class="Banner">
      <img src="./images/组件开发.svg" alt="" />
    </div>

    <div class="onStart">
      <!-- 快速开始按钮 -->
      <div class="btnBox">
        <Tyh-button type="success" round @click="$router.push('/component')">
          快速开始
        </Tyh-button>
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

    <!-- 页脚 -->
    <div class="footer">
      <!-- 合作者 -->
      <div id="Collaborators">
        <h4>合作者</h4>
        <Tyh-link target="_blank" url="https://github.com/Tyh2001">
          <div class="userBox">
            <img class="myPhoto" src="./images/我的头像.jpg" alt="" />
            <span class="userName">Tyh2001</span>
          </div>
        </Tyh-link>
      </div>
      <!-- 链接 -->
      <div id="footer-link">
        <!-- 链接 -->
        <div class="link">
          <h4 class="lint-title">链接</h4>
          <ul class="link-ul">
            <li>
              <Tyh-link target="_blank" url="https://github.com/Tyh2001"
                >Github</Tyh-link
              >
            </li>
            <li>
              <Tyh-link target="_blank" url="https://github.com/Tyh2001/tyh-ui"
                >官方仓库</Tyh-link
              >
            </li>
            <li>
              <Tyh-link
                target="_blank"
                url="https://www.npmjs.com/package/tyh-ui"
                >NPM</Tyh-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
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
    width: 800px;
    margin: auto;
    margin-top: 30px;
    img {
      width: 100%;
    }
  }
  // 快速开始
  .onStart {
    height: 400px;
    // 开始按钮
    .btnBox {
      width: 200px;
      margin: auto;
      margin-top: 70px;
      .tyh-button {
        width: 200px;
        height: 50px;
      }
    }
    // 概述
    .summary {
      width: 800px;
      height: 200px;
      border-top: 1px solid rgb(219, 219, 219);
      margin: auto;
      margin-top: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      .summary-left,
      .summary-right {
        width: 50%;
        height: 200px;
        // border: 1px solid black;
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
  // 页脚
  .footer {
    background: #f7fbfd;
    padding: 60px 200px;
    box-sizing: border-box;
    #footer-link {
      display: flex;
      padding: 30px 0;
      border-bottom: 1px solid rgb(219, 219, 219);
      .link {
        width: 180px;
        .link-ul {
          margin-top: 27px;
          li {
            list-style: none;
            line-height: 30px;
          }
        }
      }
    }
    // 合作者
    #Collaborators {
      padding: 30px 0;
      border-bottom: 1px solid rgb(219, 219, 219);
      .tyh-link {
        width: 150px;
        height: 50px;
        display: inline-block;
        margin-top: 20px;
        .userBox {
          width: 150px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          // 头像
          .myPhoto {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          // 用户昵称
          .userName {
            font-size: 20px;
            font-weight: 600;
            color: #515a6e;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
