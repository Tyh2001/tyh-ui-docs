<template>
  <div id="conponentIndex">
    <div class="contentList">
      <ul ref="ulList">
        <!-- <li
          v-for="(item, index) in listPush"
          :key="index"
          @click="routerPush(item, index)"
        > -->
        <li v-for="(item, index) in listPush" :key="index">
          <router-link :to="item.url">
            {{ item.name }}
          </router-link>
          <!-- {{ item.name }} -->
        </li>
      </ul>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'componentIndex',
  components: {},
  props: {},
  data () {
    return {
      listPush: [
        { name: '快速上手', url: '/component/install' },
        { name: 'Button 按钮', url: '/component/button' },
        { name: 'List 列表', url: '/component/list' },
        { name: 'Card 卡片', url: '/component/card' },
        { name: 'Tag 标签', url: '/component/tag' },
        { name: 'Link 链接', url: '/component/link' },
        { name: 'Input 输入框', url: '/component/input' },
        { name: 'Tips 提示', url: '/component/tips' },
        { name: 'Menu 导航栏', url: '/component/menu' }
      ]
    }
  },
  computed: {
    listLiang () {
      // return
      const a = 1
      const b = 2
      return a + b
    }
  },
  watch: {},
  created () { },
  mounted () { },
  methods: {
    // routerPush (item, index) {
    //   this.$router.push(item.url)
    //   // console.log(index)
    //   // this.$refs.ulList.querySelectorAll('li')[index].style.color = 'blue'
    //   console.log(this.$route.path)
    //   const a = this.$refs.ulList.querySelectorAll('li')[index]
    //   if (item.url === this.$route.path) {
    //     // this.$refs.ulList.querySelectorAll('li')[index].style.color = 'blue'
    //     console.log(a)
    //     a.style.color = 'red'
    //   }
    // }
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
      li {
        list-style: none;
        line-height: 40px;
        a {
          padding-left: 20px;
          width: 100%;
          display: inline-block;
          text-decoration: none;
          color: #333;
          font-size: 15px;
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
