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
        { name: '按钮组件', url: '/component/button' },
        { name: '列表组件', url: '/component/list' },
        { name: '卡片组件', url: '/component/card' }
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
  width: 1200px;
  margin: auto;

  .contentList {
    width: 300px;
    border-right: 1px solid #000;
    overflow: auto;
    ul {
      li {
        list-style: none;
        line-height: 35px;
        a {
          text-decoration: none;
          color: #333;
        }
      }
    }
  }
  .content {
    width: 900px;
  }
}
</style>
