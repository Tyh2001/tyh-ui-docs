<template>
  <div id="FooterList">
    <!-- 合作者 -->
    <div id="Collaborators">
      <h4>合作者</h4>
      <tyh-link target="_blank" url="https://github.com/Tyh2001">
        <div class="userBox">
          <img draggable="false" class="myPhoto" src="./images/footPhoto.jpg" />
          <span class="userName">Tyh2001</span>
        </div>
      </tyh-link>
    </div>
    <!-- 链接 -->
    <div id="footer-link">
      <!-- 链接 -->
      <div class="link">
        <h4 class="lint-title">链接</h4>
        <ul class="link-ul">
          <li>
            <tyh-link target="_blank" url="https://github.com/Tyh2001">
              Github
            </tyh-link>
          </li>
          <li>
            <tyh-link target="_blank" url="https://github.com/Tyh2001/tyh-ui">
              官方仓库
            </tyh-link>
          </li>
          <li>
            <tyh-link
              target="_blank"
              url="https://www.npmjs.com/package/tyh-ui"
            >
              NPM
            </tyh-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- Logo -->
    <div id="myLogo">
      <img
        draggable="false"
        class="image"
        src="../views/images/logo.png"
        alt="Logo"
      />
    </div>

    <!-- 备案号 -->
    <p class="code">
      <tyh-link target="_blank" url="https://beian.miit.gov.cn">
        浙ICP备2021024540号-1
      </tyh-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'FooterList'
}
</script>

<style lang='less' scoped>
// 页脚
#FooterList {
  background: #f7fbfd;
  padding: 60px 200px;
  box-sizing: border-box;
  user-select: none;
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
  .code {
    text-align: center;
    .tyh-link:hover {
      color: #409eff;
    }
  }
}
</style>
