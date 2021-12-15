<template>
  <div id="Footer">
    <div class="foot-box">
      <h3 class="title-footer">合作者</h3>
      <tyh-link
        target="_blank"
        url="https://github.com/Tyh2001"
        style="margin-top: 12px"
      >
        <div class="userBox">
          <img
            draggable="false"
            class="myPhoto"
            src="../views/images/photo.jpg"
          />
          <span class="userName">Tyh2001</span>
        </div>
      </tyh-link>

      <h3 class="title-footer">链接</h3>
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
          <tyh-link target="_blank" url="https://www.npmjs.com/package/tyh-ui">
            NPM
          </tyh-link>
        </li>
        <li>
          <tyh-link
            target="_blank"
            url="https://github.com/Tyh2001/tyh-ui/blob/master/CHANGELOG.md"
          >
            更新日志
          </tyh-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang='less' scoped>
// 页脚
#Footer {
  background: #f7fbfd;
  padding: 60px 0;
  box-sizing: border-box;
  user-select: none;
  .foot-box {
    width: 800px;
    margin: auto;
    .title-footer {
      margin-top: 50px;
      font-size: 20px;
      font-weight: 600;
      color: #515a6e;
    }
    .tyh-link {
      display: inline-block;
      .userBox {
        width: 150px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .myPhoto {
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
        .userName {
          font-size: 20px;
          color: #515a6e;
          margin-left: 10px;
        }
      }
    }
    .link-ul {
      li {
        list-style: none;
        line-height: 40px;
      }
    }
  }
}
@media screen and (max-width: 700px) {
  #Footer {
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    .foot-box {
      width: 100%;
    }
  }
}
</style>
