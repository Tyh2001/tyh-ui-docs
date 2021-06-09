<template>
  <div id="conponentIndex">
    <div class="contentList">
      <ul>
        <li v-for="(item, index) in listPush" :key="index">
          <router-link :to="item.url">{{ item.name }}</router-link>
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
  name: 'conponentIndex',
  components: {},
  props: {},
  data () {
    return {
      listPush: [
        { name: '快速上手', url: '/component/install' },
        { name: 'Button 按钮', url: '/component/button' },
        { name: 'List 列表', url: '/component/list' },
        { name: 'Card 卡片', url: '/component/card' }
      ]
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang='less' scoped>
#conponentIndex {
  display: flex;
  width: 1100px;
  margin: auto;

  .contentList {
    width: 200px;
    border-right: 1px solid #eee;
    overflow: auto;
    ul {
      li {
        list-style: none;
        line-height: 40px;
        a {
          text-decoration: none;
          color: #333;
        }
      }
    }
  }
  .content {
    padding: 24px;
    box-sizing: border-box;
    width: 900px;
  }
}
</style>
