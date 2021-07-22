<template>
  <div id="FooterList">
    <!-- 合作者 -->
    <div id="Collaborators">
      <h4>合作者</h4>
      <Tyh-link target="_blank" url="https://github.com/Tyh2001">
        <div class="userBox">
          <img
            class="myPhoto"
            src="https://www.hualigs.cn/image/608132a6c15b2.jpg"
            alt=""
          />
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
            <Tyh-link target="_blank" url="https://www.npmjs.com/package/tyh-ui"
              >NPM</Tyh-link
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- Logo -->
    <div id="myLogo">
      <img
        class="image"
        src="https://www.hualigs.cn/image/60c16782369ab.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterList',
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
// 页脚
#FooterList {
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
  // logo
  #myLogo {
    padding: 30px 0;
    height: 150px;
    .image {
      height: 100%;
    }
  }
}
</style>
