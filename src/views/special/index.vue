<template>
  <div id="conponentIndex">
    <!-- 左侧列表 -->
    <div class="contentList">
      <ul ref="ulList">
        <li v-for="(item, index) in listPush" :key="index">
          <router-link :to="item.url" :style="highLightStyle(item)">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="content">
      <router-view />
    </div>

    <Tyh-backTop bottom="160" right="120">
      <Tyh-icon icon="tyh-ui-huojian-01" color="#409eff" />
    </Tyh-backTop>
  </div>
</template>

<script>
export default {
  name: 'specialIndex',
  components: {},
  props: {},
  data () {
    return {
      listPush: [
        { name: 'Button 按钮', url: '/special/button' },
        { name: 'Input 输入框', url: '/special/input' }
      ]
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    // 高亮显示
    highLightStyle (item) {
      if (item.url === this.$route.path) {
        return {
          color: '#409eff'
        }
      }
    }
  }
}
</script>

<style lang='less' scoped>
#conponentIndex {
  display: flex;
  width: 1100px;
  margin: auto;
  background: skyblue;
  position: relative;
  // 列表
  .contentList {
    width: 200px;
    border-right: 1px solid #eee;
    overflow: auto;
    position: fixed;
    overflow-y: auto;
    overflow-x: hidden;
    background: #fff;
    top: 60px;
    padding-top: 60px;
    bottom: 0px;
    z-index: 100;
    user-select: none;
    ul {
      padding-bottom: 150px;
      li {
        list-style: none;
        line-height: 40px;
        a {
          padding-left: 20px;
          width: 100%;
          display: inline-block;
          text-decoration: none;
          color: #333;
          font-size: 14px;
          &:hover {
            background: rgb(247, 247, 247);
          }
        }
      }
    }
  }
  // 内容
  .content {
    padding: 24px;
    box-sizing: border-box;
    width: 900px;
    position: absolute;
    right: 0px;
    z-index: 50;
  }
}
</style>
